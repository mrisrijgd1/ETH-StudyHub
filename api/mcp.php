<?php
// StudyHub connector: a remote MCP server (Streamable HTTP, stateless JSON answers) on the Infomaniak hosting.
// Students add https://study-hub.ch/mcp to their own Claude / ChatGPT / Gemini and sign in with their StudyHub
// account (the login runs at Supabase, which is only used for logging in). Every rule is enforced HERE, not in prompts.
// Personal data goes straight into our own database (lib/query.php: the same rules as the website),
// course files come from studyhub-data/connector and studyhub-data/connector-library (lib/mcp_content.php).
// PHP port of connector/supabase/functions/studyhub-mcp (server.ts + personal.ts).
declare(strict_types=1);
ini_set('display_errors', '0');
ini_set('memory_limit', '512M');   // the course index (~100 MB in memory) is loaded per request
require_once __DIR__ . '/lib/query.php';
require_once __DIR__ . '/lib/mcp_content.php';

const MCP_PUBLIC = 'https://study-hub.ch/mcp';
const MCP_META = 'https://study-hub.ch/.well-known/oauth-protected-resource/mcp';
const MCP_VERSION = '2.0.0';
const MCP_SECTIONS = ['plan', 'notes', 'questions', 'flashcards'];
const MCP_MISTAKES = ['definition', 'quantifiers', 'logic-gap', 'wrong-theorem', 'missing-hypothesis', 'missing-case', 'calculation', 'notation', 'presentation', 'time', 'misread-question', 'other'];
const MCP_FONTS = ['default', 'serif', 'sans', 'readable', 'mono'];
const MCP_HIDE = ['badday', 'listen', 'tips', 'comments', 'progress', 'wonder', 'story', 'streak'];
const MCP_EXAM_DATE = '2027-01-25T08:00:00+01:00';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: authorization, content-type, mcp-protocol-version, mcp-session-id, accept');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header('Access-Control-Expose-Headers: WWW-Authenticate, Mcp-Session-Id');
header('Cache-Control: no-store');

function mcp_json($body, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}
function mcp_unauthorized(string $msg = 'Sign in to StudyHub to use this connector.'): void {
    header('WWW-Authenticate: Bearer resource_metadata="' . MCP_META . '", error="invalid_token"');
    mcp_json(['error' => 'invalid_token', 'error_description' => $msg], 401);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') { http_response_code(204); exit; }
if (isset($_GET['meta'])) {   // /.well-known/oauth-protected-resource/mcp (see .htaccess)
    mcp_json(['resource' => MCP_PUBLIC, 'authorization_servers' => [SH_SUPABASE_URL . '/auth/v1'], 'bearer_methods_supported' => ['header'],
        'scopes_supported' => ['openid', 'email', 'profile'], 'resource_name' => 'StudyHub (ETH first semester)', 'resource_documentation' => 'https://study-hub.ch/connect.html']);
}
if ($method === 'GET') {
    if (stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'text/event-stream') !== false) { http_response_code(405); exit; }   // no event stream: every request is answered directly
    mcp_json(['name' => 'StudyHub connector', 'version' => MCP_VERSION, 'docs' => 'https://study-hub.ch/connect.html']);
}
if ($method === 'DELETE') { http_response_code(204); exit; }
if ($method !== 'POST') { http_response_code(405); exit; }

// ---- authentication: every call needs a StudyHub sign-in ----
$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
$token = stripos($auth, 'bearer ') === 0 ? trim(substr($auth, 7)) : '';
if ($token === '') { mcp_unauthorized(); }
$USER = sh_user_from_token($token);
if (!$USER) { mcp_unauthorized('Your StudyHub sign-in has expired. Please reconnect.'); }

$msg = json_decode((string)file_get_contents('php://input', false, null, 0, 4_000_000), true);
if (!is_array($msg)) { mcp_json(['jsonrpc' => '2.0', 'id' => null, 'error' => ['code' => -32700, 'message' => 'Parse error']], 400); }

try { $PDO = sh_pdo(); sh_touch_user($PDO, $USER); }
catch (Throwable $e) { error_log('studyhub mcp: ' . $e->getMessage()); mcp_json(['jsonrpc' => '2.0', 'id' => $msg['id'] ?? null, 'error' => ['code' => -32603, 'message' => 'StudyHub database not reachable.']], 503); }
$C = null;   // content: loaded on first use only (tools/list and personal tools don't need it)
function C(): array { global $C; if ($C === null) { $C = mcp_content(); } return $C; }

$isBatch = array_is_list($msg) && $msg !== [];
$out = [];
foreach ($isBatch ? $msg : [$msg] as $m) { $r = mcp_handle(is_array($m) ? $m : []); if ($r !== null) { $out[] = $r; } }
if (!$out) { http_response_code(202); exit; }
mcp_json($isBatch ? $out : $out[0]);

// ---------------------------------------------------------------------------------------------------
function mcp_handle(array $m): ?array {
    if (($m['jsonrpc'] ?? null) !== '2.0' || !is_string($m['method'] ?? null)) { return ['jsonrpc' => '2.0', 'id' => $m['id'] ?? null, 'error' => ['code' => -32600, 'message' => 'Invalid request']]; }
    if (!array_key_exists('id', $m) || $m['id'] === null) { return null; }   // notification
    $id = $m['id'];
    $T = json_decode((string)file_get_contents(__DIR__ . '/lib/mcp-tools.json'));   // objects, so empty {} stays {} (not [])
    try {
        switch ($m['method']) {
            case 'initialize':
                $asked = $m['params']['protocolVersion'] ?? null;
                $ok = ['2025-06-18', '2025-03-26', '2024-11-05', '2025-11-25'];
                return ['jsonrpc' => '2.0', 'id' => $id, 'result' => ['protocolVersion' => in_array($asked, $ok, true) ? $asked : '2025-06-18',
                    'capabilities' => ['tools' => ['listChanged' => false]], 'serverInfo' => ['name' => 'studyhub', 'title' => 'StudyHub', 'version' => MCP_VERSION],
                    'instructions' => $T->instructions]];
            case 'ping': return ['jsonrpc' => '2.0', 'id' => $id, 'result' => new stdClass()];
            case 'tools/list': return ['jsonrpc' => '2.0', 'id' => $id, 'result' => ['tools' => $T->tools]];
            case 'tools/call':
                $args = $m['params']['arguments'] ?? [];
                return ['jsonrpc' => '2.0', 'id' => $id, 'result' => mcp_tool((string)($m['params']['name'] ?? ''), is_array($args) ? $args : [])];
            case 'resources/list': return ['jsonrpc' => '2.0', 'id' => $id, 'result' => ['resources' => []]];
            case 'prompts/list': return ['jsonrpc' => '2.0', 'id' => $id, 'result' => ['prompts' => []]];
            default: return ['jsonrpc' => '2.0', 'id' => $id, 'error' => ['code' => -32601, 'message' => 'Unknown method ' . $m['method']]];
        }
    } catch (ShError $e) {
        return ['jsonrpc' => '2.0', 'id' => $id, 'result' => mcp_err('Error: ' . $e->getMessage())];
    } catch (Throwable $e) {
        error_log('studyhub mcp: ' . $e->getMessage() . ' @' . $e->getFile() . ':' . $e->getLine());
        return ['jsonrpc' => '2.0', 'id' => $id, 'result' => mcp_err('Error: something went wrong on the StudyHub server.')];
    }
}

function mcp_text(string $t): array { return ['content' => [['type' => 'text', 'text' => $t]]]; }
function mcp_err(string $t): array { return ['content' => [['type' => 'text', 'text' => $t]], 'isError' => true]; }
function J($o): string { return json_encode($o, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE); }
function now_iso(): string { return sh_ts_out(sh_now()); }

// One database call with the student's own rights (same rules as the website): [t, op, cols, f, order, limit, one, v, ret].
function db(array $q) {
    global $PDO, $USER;
    $PDO->beginTransaction();
    try { $r = sh_run($PDO, $USER, $q); $PDO->commit(); return $r; }
    catch (Throwable $e) { if ($PDO->inTransaction()) { $PDO->rollBack(); } throw $e; }
}
function uid(): string { global $USER; return $USER['id']; }

// ---- item state (hints shown, attempted) ----
function get_state(string $item): array {
    return db(['t' => 'item_state', 'cols' => '*', 'f' => [['item_id', 'eq', $item]], 'one' => 'maybe']) ?? ['hints_shown' => 0, 'attempted_at' => null];
}
function set_state(string $item, array $patch): void {
    $cur = get_state($item);
    db(['t' => 'item_state', 'op' => 'upsert', 'v' => array_merge(['item_id' => $item, 'hints_shown' => $cur['hints_shown'], 'attempted_at' => $cur['attempted_at']], $patch, ['updated_at' => now_iso()])]);
}
// A PDF's solutions unlock once any question of it was attempted, or a mock of it was submitted.
function doc_unlocked(string $docId): bool {
    $base = C()['pdfs'][$docId]['solution_of'] ?? $docId;
    if (db(['t' => 'item_state', 'cols' => 'item_id', 'f' => [['item_id', 'prefix', "doc:$base#"], ['attempted_at', 'not_is', null]], 'limit' => 1])) { return true; }
    return (bool)db(['t' => 'mocks', 'cols' => 'id', 'f' => [['exam_id', 'eq', $base], ['submitted_at', 'not_is', null]], 'limit' => 1]);
}

// Hints: stored hints first; otherwise graded steps cut from the solution (never the whole solution).
function hints_for(array $ex): array {
    if (!empty($ex['hints'])) { return $ex['hints']; }
    $sol = (string)($ex['solution'] ?? '');
    $sentences = array_values(array_filter(preg_split('/(?<=[.!?:])\s+(?=[A-Z$(])/u', preg_replace('/\n+/', ' ', $sol) ?? '') ?: [], fn($s) => mb_strlen(trim($s)) > 3));
    $out = [];
    preg_match_all("/\\b(?:[A-Za-z'’-]+ ){0,3}(theorem|lemma|criterion|test|inequality|Satz|definition|rule|substitution|integration by parts|induction|contradiction|epsilon|Archimed\\w*|Bolzano[- ]Weierstrass|intermediate value|mean value|l'H\\w+pital|Cauchy|Leibniz|ratio|root|comparison|triangle inequality)\\b[^.,;]{0,30}/iu", $sol, $tm);
    $terms = array_slice(array_values(array_unique(array_map('trim', $tm[0] ?? []))), 0, 4);
    if ($terms) { $out[] = 'Tools that the solution uses: ' . implode('; ', $terms) . '.'; }
    if (count($sentences) > 1) { $out[] = 'First step: ' . $sentences[0]; }
    if (count($sentences) > 3) { $out[] = 'Next: ' . implode(' ', array_slice($sentences, 1, max(2, intdiv(count($sentences), 3)) - 1)); }
    return $out ?: ['Re-read the definitions in the problem and write down what you must show in symbols (first line and last line of the proof).'];
}

function exercise_or_doc(string $id): array {
    $c = C();
    if (str_starts_with($id, 'doc:')) {
        [$docId, $q] = array_pad(explode('#', substr($id, 4), 2), 2, '');
        $d = $c['pdfs'][$docId] ?? null;
        if (!$d) { return ['error' => "Unknown document $docId."]; }
        if ($q === '') { return ['error' => "Name the question too, e.g. doc:$docId#MC3 or #Aufgabe 2."]; }
        return ['doc' => $d, 'question' => $q];
    }
    $ex = resolve_exercise($c['exercises'], $id);
    if ($ex) { return ['ex' => $ex]; }
    $pg = explode('/', $id)[0];
    $list = exercise_list($c['exercises'], $pg);
    return ['error' => "Unknown exercise id $id." . ($list ? " Exercises on $pg:\n" . implode("\n", $list) : ' Use search with type "exercise" to find ids.')];
}
// The page's own labels ("Exercise 2", "Proof B") are NOT the ex<n> numbers; accept them as aliases.
function resolve_exercise(array $all, string $id): ?array {
    if (isset($all[$id])) { return $all[$id]; }
    if (!preg_match('/^([a-z0-9-]+?)\/(?:#)?([a-zäöü]+(?:-example)?)[\s_-]*([0-9]+|[a-z])$/iu', trim($id), $m)) { return null; }
    [, $page, $word, $n] = $m;
    $pats = [['/^(?:exercise|aufgabe|übung)$/iu', '(?:exercise|aufgabe|übung)'], ['/^(?:proof|beweis)$/iu', '(?:proof|beweis)'], ['/^(?:worked|worked-example|example|beispiel)$/iu', '(?:worked example|beispiel)']];
    $pat = null; foreach ($pats as $p) { if (preg_match($p[0], $word)) { $pat = $p[1]; break; } }
    if (!$pat) { return null; }
    foreach ($all as $e) { if (($e['page'] ?? null) === $page && preg_match('/^' . $pat . '\s+' . preg_quote($n, '/') . '\b/iu', trim((string)$e['title']))) { return $e; } }
    return null;
}
function exercise_list(array $all, string $page): array {
    $o = []; foreach ($all as $e) { if (($e['page'] ?? null) === $page) { $o[] = $e['id'] . ' = ' . mb_substr((string)$e['title'], 0, 90); } } return $o;
}

function mcp_tool(string $name, array $a): array {
    switch ($name) {
        case 'search': {
            $hits = mcp_search(C(), (string)($a['query'] ?? ''), $a['subject'] ?? null, $a['type'] ?? null, min((int)($a['limit'] ?? 0) ?: 8, 20));
            if (!$hits) { return mcp_text('No matches. Try other words (German and English both work), or fewer words.'); }
            return mcp_text(J(['results' => $hits, 'next' => "Open a result with read(id). Exercises: get_exercise(id). Script pages: read('script-analysis@<printed page>')."]));
        }
        case 'read': {
            $r = mcp_read(C(), (string)($a['id'] ?? ''), $a['page'] ?? null, 'doc_unlocked');
            return isset($r['error']) ? mcp_err($r['error']) : mcp_text($r['text']);
        }
        case 'get_page_image': {
            $r = mcp_page_image(C(), (string)($a['doc'] ?? ''), (int)($a['page'] ?? 0), 'doc_unlocked');
            if (isset($r['error'])) { return mcp_err($r['error']); }
            return ['content' => [['type' => 'image', 'data' => $r['data'], 'mimeType' => 'image/jpeg'], ['type' => 'text', 'text' => $r['caption']]]];
        }
        case 'get_exercise': {
            $x = exercise_or_doc((string)($a['id'] ?? ''));
            if (isset($x['error'])) { return mcp_err($x['error']); }
            $id = isset($x['ex']) ? $x['ex']['id'] : (string)$a['id'];
            $st = get_state($id);
            if (isset($x['doc'])) {
                $d = $x['doc']; $pages = $d['questions_text'] ?? $d['page_text'];
                $seg = mcp_segment($pages, $x['question']);
                return mcp_text(J(['id' => $id, 'source' => "{$d['title']} (official exam / course document)", 'url' => $d['url'] ?? null,
                    'question' => $seg ?? "(Label \"{$x['question']}\" not found automatically; here is the whole exam, find the question in it.)\n" . mcp_whole($pages, 15000),
                    'attempted' => !empty($st['attempted_at']), 'hints_shown' => $st['hints_shown'],
                    'rules' => 'Official solution is locked until submit_attempt. There are no stored hints for exam questions: give at most ONE small hint per request yourself, never the solution.']));
            }
            $ex = $x['ex']; $hs = hints_for($ex);
            return mcp_text(J(['id' => $ex['id'], 'title' => $ex['title'], 'source' => "StudyHub {$ex['kind']} ({$ex['page']})", 'url' => $ex['url'] ?? null, 'problem' => $ex['problem'],
                'script' => mcp_script_excerpt(C(), $ex['subject'] ?? null, $ex['script_pages'] ?? []), 'related_official' => mcp_related_official(C(), $ex['title'] . ' ' . $ex['problem'], $ex['subject'] ?? null),
                'hints_available' => count($hs), 'hints_shown' => $st['hints_shown'], 'attempted' => !empty($st['attempted_at']), 'has_grader_list' => $ex['grader'] ?? false,
                'rules' => 'Solution locked until submit_attempt. Hints only via get_hint, one per request of the student.']));
        }
        case 'get_hint': {
            $x = exercise_or_doc((string)($a['id'] ?? ''));
            if (isset($x['error'])) { return mcp_err($x['error']); }
            $id = isset($x['ex']) ? $x['ex']['id'] : (string)$a['id'];
            $st = get_state($id); $n = (int)$st['hints_shown'];
            if (isset($x['doc'])) {
                set_state($id, ['hints_shown' => $n + 1]);
                return mcp_text('Hint ' . ($n + 1) . " for $id: no stored hint exists for this official exam question. Give the student ONE short hint of your own (a direction, a definition or a theorem to look at), not a solution step. Ask them to try again before any further hint.");
            }
            $hs = hints_for($x['ex']);
            if ($n >= count($hs)) { return mcp_text('All ' . count($hs) . " hints for $id (\"{$x['ex']['title']}\") have been shown. The next step is submit_attempt with what the student has written; then the solution unlocks."); }
            set_state($id, ['hints_shown' => $n + 1]);
            return mcp_text('Hint ' . ($n + 1) . ' of ' . count($hs) . " for $id (\"{$x['ex']['title']}\"):\n{$hs[$n]}\n\n[Rule: give only this hint, in your own gentle words. Do not add further steps. The student asks for the next one if needed.]");
        }
        case 'submit_attempt': {
            $x = exercise_or_doc((string)($a['id'] ?? ''));
            if (isset($x['error'])) { return mcp_err($x['error']); }
            $id = isset($x['ex']) ? $x['ex']['id'] : (string)$a['id'];
            $attempt = trim((string)($a['attempt'] ?? ''));
            if (mb_strlen($attempt) < 3) { return mcp_err("Send the student's attempt (typed, or your faithful transcription of their photo). An empty attempt doesn't unlock the solution."); }
            db(['t' => 'attempts', 'op' => 'insert', 'v' => ['item_id' => $id, 'kind' => isset($x['doc']) ? 'exam' : 'exercise', 'attempt' => mb_substr($attempt, 0, 20000)]]);
            set_state($id, ['attempted_at' => now_iso()]);
            $marking = "Mark the attempt now. Compare it line by line with the OFFICIAL solution first (if there is one), then the StudyHub solution. Quote script pages for every definition or theorem used. Say what is correct first, then each gap, with points if a grader's list exists. Finally call save_result with score, max_score, a one-paragraph summary and the list of mistakes (type + topic + short note).";
            $c = C();
            if (isset($x['doc'])) {
                $d = $x['doc'];
                $solDoc = !empty($d['solution_doc']) ? ($c['pdfs'][$d['solution_doc']] ?? null) : (!empty($d['inline_solutions']) ? $d : null);
                $sol = $solDoc ? (mcp_segment($solDoc['page_text'], $x['question']) ?? "(Question \"{$x['question']}\" not located automatically: find it in the official solutions below.)\n" . mcp_whole($solDoc['page_text'])) : null;
                return mcp_text(J(['id' => $id, 'unlocked' => true,
                    'official_solution' => $sol ? ['source' => "{$solDoc['title']} (official)", 'text' => $sol, 'pages' => "use get_page_image('{$solDoc['id']}', page) for exact formulas"]
                        : ['note' => 'No official solution exists for this exam. Solve it carefully yourself and say clearly that your solution is not official.'],
                    'marking' => $marking]));
            }
            $ex = $x['ex'];
            return mcp_text(J(['id' => $ex['id'], 'unlocked' => true, 'related_official' => mcp_related_official($c, $ex['title'] . ' ' . $ex['problem'], $ex['subject'] ?? null),
                'studyhub_solution' => ['source' => 'StudyHub-written (checked, but not official)', 'text' => $ex['solution'] ?? '', 'grader_list_included' => $ex['grader'] ?? false],
                'script' => mcp_script_excerpt($c, $ex['subject'] ?? null, $ex['script_pages'] ?? []), 'marking' => $marking]));
        }
        case 'start_mock': {
            $d = C()['pdfs'][(string)($a['exam'] ?? '')] ?? null;
            if (!$d || ($d['type'] ?? '') !== 'exam') { return mcp_err("Unknown exam id. Use search with type 'exam' or list_exams."); }
            if (!empty($d['solution_of'])) { return mcp_err('That is a solutions file. Start the mock with the exam itself: ' . $d['solution_of']); }
            $minutes = min(max((int)($a['minutes'] ?? 0) ?: 180, 10), 300);
            $mk = db(['t' => 'mocks', 'op' => 'insert', 'v' => ['exam_id' => $d['id'], 'minutes' => $minutes], 'ret' => true, 'one' => 'single']);
            $ends = gmdate('Y-m-d\TH:i:s\Z', strtotime($mk['started_at']) + $minutes * 60);
            return mcp_text(J(['mock_id' => $mk['id'], 'exam' => $d['title'], 'minutes' => $minutes, 'started_at' => $mk['started_at'], 'ends_at' => $ends,
                'pages' => $d['pages'], 'how_to_show' => "Show the questions with read('{$d['id']}') or get_page_image('{$d['id']}', n) for n = 1..{$d['pages']}.",
                'rules' => 'Exam conditions: no hints, no solutions, no help with content until submit_mock. Only clarify wording. Remind the student of the time if asked.']));
        }
        case 'submit_mock': {
            $mid = (string)($a['mock_id'] ?? '');
            if (!preg_match('/^[0-9a-fA-F-]{36}$/', $mid)) { return mcp_err('Unknown mock_id.'); }
            $mk = db(['t' => 'mocks', 'cols' => '*', 'f' => [['id', 'eq', $mid]], 'one' => 'maybe']);
            if (!$mk) { return mcp_err('Unknown mock_id.'); }
            if ($mk['submitted_at']) { return mcp_err('This mock was already submitted. Use save_result to store the marking.'); }
            $used = (int)round((time() - strtotime($mk['started_at'])) / 60);
            db(['t' => 'mocks', 'op' => 'update', 'v' => ['submitted_at' => now_iso()], 'f' => [['id', 'eq', $mk['id']]]]);
            db(['t' => 'attempts', 'op' => 'insert', 'v' => ['item_id' => 'mock:' . $mk['id'], 'kind' => 'mock', 'attempt' => mb_substr((string)($a['answers'] ?? ''), 0, 20000)]]);
            $c = C(); $d = $c['pdfs'][$mk['exam_id']] ?? null;
            $solDoc = $d ? (!empty($d['solution_doc']) ? ($c['pdfs'][$d['solution_doc']] ?? null) : (!empty($d['inline_solutions']) ? $d : null)) : null;
            return mcp_text(J(['mock_id' => $mk['id'], 'minutes_used' => $used, 'minutes_allowed' => $mk['minutes'], 'over_time' => $used > $mk['minutes'],
                'official_solutions' => $solDoc ? ['doc' => $solDoc['id'], 'title' => $solDoc['title'], 'how' => "read('{$solDoc['id']}', page) / get_page_image('{$solDoc['id']}', page)"] : 'No official solutions for this exam: mark from your own careful solution and say so.',
                'marking' => "Mark every question with points like the real exam. Then targeted feedback: the 3 most important gaps, each with the lesson to revisit (StudyHub lesson links) and script pages. Then call save_result once per question (kind 'mock', item_id 'doc:<exam>#<label>', mock_id) and once for the total (kind 'mock', item_id 'mock:<mock_id>', mock_id, score/max, summary)."]));
        }
        case 'list_exams': {
            $list = [];
            foreach (C()['pdfs'] as $d) {
                if (!((($d['type'] ?? '') === 'exam') || preg_match('/mock/', $d['id'])) || !empty($d['solution_of'])) { continue; }
                if (!empty($a['subject']) && ($d['subject'] ?? null) !== $a['subject']) { continue; }
                $list[] = ['id' => $d['id'], 'title' => $d['title'], 'subject' => $d['subject'] ?? null, 'pages' => $d['pages'], 'official_solutions' => !empty($d['solution_doc']) || !empty($d['inline_solutions'])];
            }
            return mcp_text(J($list));
        }
    }
    return mcp_personal($name, $a);
}

// ---------------------------------------------------------------------------------------------------
// Personal layer: My StudyHub (plan, notes, questions, flashcards), progress, results, fingerprint, gap finder,
// design. Every change is versioned by the database layer (history, undo, restore, reset).
function get_item(string $key): ?array { return db(['t' => 'my_items', 'cols' => 'content,updated_at', 'f' => [['key', 'eq', $key]], 'one' => 'maybe']); }
function put_item(string $key, $content): void {
    db(['t' => 'my_items', 'op' => 'upsert', 'v' => ['key' => $key, 'content' => $content, 'source' => 'ai', 'updated_at' => now_iso()]]);
}
function page_id($p): string { return preg_replace('/\.html$/', '', preg_replace('/^progress:/', '', trim((string)$p))); }
function page_key($p): string { return page_id($p) . '.html'; }
function hist_key($k): string { $k = (string)($k ?? ''); return str_starts_with($k, 'progress:') ? 'progress:' . page_key($k) : $k; }
function clean_design(array $t): array {
    $o = [];
    if (in_array($t['theme'] ?? null, ['light', 'dark', 'auto'], true)) { $o['theme'] = $t['theme']; }
    if (is_string($t['palette'] ?? null) && preg_match('/^[a-z0-9-]{1,40}$/', $t['palette'])) { $o['palette'] = $t['palette']; }
    foreach (['accent', 'background', 'text', 'box'] as $k) { if (is_string($t[$k] ?? null) && preg_match('/^#[0-9a-fA-F]{6}$/', $t[$k])) { $o[$k] = $t[$k]; } }
    if (in_array($t['font'] ?? null, MCP_FONTS, true)) { $o['font'] = $t['font']; }
    $size = (float)($t['size'] ?? 0); if ($size >= 80 && $size <= 150) { $o['size'] = (int)round($size); }
    if (in_array($t['density'] ?? null, ['compact', 'normal', 'airy'], true)) { $o['density'] = $t['density']; }
    if (in_array($t['width'] ?? null, ['narrow', 'normal', 'wide'], true)) { $o['width'] = $t['width']; }
    if (is_array($t['hide'] ?? null)) { $o['hide'] = array_values(array_filter($t['hide'], fn($h) => in_array($h, MCP_HIDE, true))); }
    return $o;
}
function clean_item(string $sec, $it): array {
    $it = is_array($it) ? $it : [];
    $s = fn($k, $n) => array_key_exists($k, $it) && $it[$k] !== null ? mb_substr((string)$it[$k], 0, $n) : null;
    if ($sec === 'flashcards') { $o = ['front' => $s('front', 2000), 'back' => $s('back', 4000), 'topic' => $s('topic', 80), 'page' => $s('page', 40), 'due' => $s('due', 30),
        'box' => array_key_exists('box', $it) ? max(0, min(5, (int)$it['box'])) : null]; }
    elseif ($sec === 'questions') { $o = ['text' => $s('text', 4000), 'page' => $s('page', 40), 'status' => in_array($it['status'] ?? null, ['open', 'answered'], true) ? $it['status'] : null, 'answer' => $s('answer', 6000)]; }
    else { $o = ['text' => $s('text', 8000), 'page' => $s('page', 40), 'title' => $s('title', 120)]; }
    return array_filter($o, fn($v) => $v !== null);
}

function mcp_personal(string $name, array $a): array {
    switch ($name) {
        case 'my_studyhub': {
            $action = $a['action'] ?? 'get';
            if ($action === 'get') {
                $res = [];
                foreach (!empty($a['section']) ? [$a['section']] : MCP_SECTIONS as $k) { $res[$k] = get_item((string)$k)['content'] ?? ($k === 'plan' ? ['text' => ''] : []); }
                return mcp_text(J($res + ['page' => 'https://study-hub.ch/my.html']));
            }
            $sec = $a['section'] ?? null;
            if (!in_array($sec, MCP_SECTIONS, true)) { return mcp_err('section must be one of ' . implode(', ', MCP_SECTIONS)); }
            if ($sec === 'plan') {
                if (!in_array($action, ['set', 'add'], true)) { return mcp_err("For the plan use action 'set' (replace) or 'add' (append a line)."); }
                $cur = (string)(get_item('plan')['content']['text'] ?? '');
                $t = $action === 'set' ? (string)($a['text'] ?? '') : ($cur !== '' ? $cur . "\n" : '') . (string)($a['text'] ?? '');
                put_item('plan', ['text' => mb_substr($t, 0, 50000)]);
                return mcp_text("Plan saved (a version was stored; undo('plan') reverts it).");
            }
            $list = get_item($sec)['content'] ?? [];
            if (!is_array($list)) { $list = []; }
            if ($action === 'add') {
                $items = is_array($a['items'] ?? null) ? $a['items'] : [$a['item'] ?? ['text' => $a['text'] ?? null]];
                $added = [];
                foreach ($items as $it) { $added[] = ['id' => substr(sh_uuid4(), 0, 8), 'created' => now_iso()] + clean_item($sec, $it); }
                $list = array_merge($list, $added);
                if (count($list) > 2000) { return mcp_err('Too many items (max 2000).'); }
                put_item($sec, $list);
                return mcp_text('Added ' . count($added) . " to $sec: ids " . implode(', ', array_column($added, 'id')) . '.');
            }
            if ($action === 'update') {
                foreach ($list as $i => $x) {
                    if (($x['id'] ?? null) === ($a['id'] ?? null)) { $list[$i] = array_merge($x, clean_item($sec, $a['item'] ?? []), ['id' => $x['id']]); put_item($sec, $list); return mcp_text('Updated.'); }
                }
                return mcp_err('No item with that id.');
            }
            if ($action === 'remove') {
                $left = array_values(array_filter($list, fn($x) => ($x['id'] ?? null) !== ($a['id'] ?? null)));
                if (count($left) === count($list)) { return mcp_err('No item with that id.'); }
                put_item($sec, $left);
                return mcp_text("Removed (undo('$sec') brings it back).");
            }
            return mcp_err('action must be get, add, update or remove (plan: set or add).');
        }
        case 'history': {
            $key = hist_key($a['key'] ?? '');
            $data = db(['t' => 'my_versions', 'cols' => 'id,content,source,created_at', 'f' => [['key', 'eq', $key]], 'order' => [['id', false]], 'limit' => min((int)($a['limit'] ?? 0) ?: 10, 50)]);
            if (!$data) { return mcp_text('No history for ' . $key); }
            return mcp_text(J(array_map(fn($v) => ['version_id' => $v['id'], 'at' => $v['created_at'], 'by' => $v['source'],
                'preview' => $v['content'] === null ? '(deleted)' : mb_substr(json_encode($v['content'], JSON_UNESCAPED_UNICODE), 0, 200)], $data)));
        }
        case 'undo': case 'restore_version': case 'reset': {
            $key = array_key_exists('key', $a) ? hist_key($a['key']) : '';
            $vid = null;
            if ($name === 'restore_version') { $vid = (int)($a['version_id'] ?? 0); }
            if ($name === 'undo') {
                $data = db(['t' => 'my_versions', 'cols' => 'id', 'f' => [['key', 'eq', $key]], 'order' => [['id', false]], 'limit' => 2]);
                if (count($data) < 2) { return mcp_err('Nothing to undo for ' . $key); }
                $vid = $data[1]['id'];
            }
            if ($name === 'reset') {
                if (str_starts_with($key, 'progress:')) { db(['t' => 'progress', 'op' => 'delete', 'f' => [['page', 'eq', substr($key, 9)]]]); }
                else { db(['t' => 'my_items', 'op' => 'delete', 'f' => [['key', 'eq', $key]]]); }
                return mcp_text("$key reset to the original (empty) state. The old content stays in history, so restore_version can bring it back.");
            }
            $r = db(['rpc' => 'my_restore_version', 'a' => ['p_id' => $vid]]);
            $v = db(['t' => 'my_versions', 'cols' => 'key,created_at', 'f' => [['id', 'eq', $vid]], 'one' => 'maybe']);
            return mcp_text(($v['key'] ?? 'Item') . ' restored to the version from ' . ($v['created_at'] ?? '?') . '.');
        }
        case 'progress': {
            if (($a['action'] ?? 'get') === 'get') {
                $data = db(['t' => 'progress', 'cols' => 'page,done,rating,note,updated_at', 'order' => [['page', true]]]);
                return mcp_text(J(array_map(fn($r) => array_merge($r, ['page' => page_id($r['page'])]), $data)));
            }
            if (!preg_match('/^[a-z0-9-]{3,40}$/', page_id($a['page'] ?? ''))) { return mcp_err('page must be a page id like lesson-08, refresher-02 or phys-05.'); }
            $page = page_key($a['page']);
            $cur = db(['t' => 'progress', 'cols' => '*', 'f' => [['page', 'eq', $page]], 'one' => 'maybe']) ?? [];
            $row = ['page' => $page, 'done' => $a['done'] ?? $cur['done'] ?? false, 'rating' => $a['rating'] ?? $cur['rating'] ?? null, 'note' => $a['note'] ?? $cur['note'] ?? null, 'updated_at' => now_iso()];
            if ($row['rating'] !== null && !($row['rating'] >= 1 && $row['rating'] <= 5)) { return mcp_err('rating is 1 (easy) to 5 (hard).'); }
            db(['t' => 'progress', 'op' => 'upsert', 'v' => $row]);
            return mcp_text('Saved progress for ' . page_id($page) . ". It shows on the site (ticks, Your progress box) after a reload; history('progress:" . page_id($page) . "') lists its versions.");
        }
        case 'save_result': {
            $mistakes = array_map(fn($m) => ['type' => in_array($m['type'] ?? null, MCP_MISTAKES, true) ? $m['type'] : 'other', 'topic' => mb_substr((string)($m['topic'] ?? ''), 0, 80), 'note' => mb_substr((string)($m['note'] ?? ''), 0, 300)],
                array_slice(array_filter(is_array($a['mistakes'] ?? null) ? $a['mistakes'] : [], 'is_array'), 0, 30));
            $kind = in_array($a['kind'] ?? null, ['exercise', 'exam', 'mock', 'check'], true) ? $a['kind'] : 'exercise';
            $topics = array_slice(array_values(array_unique(array_filter(array_map('strval', array_merge(is_array($a['topics'] ?? null) ? $a['topics'] : [], array_column($mistakes, 'topic')))))), 0, 10);
            db(['t' => 'results', 'op' => 'insert', 'v' => ['item_id' => (string)($a['item_id'] ?? 'free'), 'kind' => $kind, 'score' => $a['score'] ?? null, 'max_score' => $a['max_score'] ?? null,
                'summary' => mb_substr((string)($a['summary'] ?? ''), 0, 5000), 'mistakes' => $mistakes, 'topics' => $topics]]);
            if (!empty($a['mock_id']) && str_starts_with((string)($a['item_id'] ?? ''), 'mock:') && preg_match('/^[0-9a-fA-F-]{36}$/', (string)$a['mock_id'])) {
                db(['t' => 'mocks', 'op' => 'update', 'v' => ['score' => $a['score'] ?? null, 'max_score' => $a['max_score'] ?? null, 'feedback' => mb_substr((string)($a['summary'] ?? ''), 0, 20000)], 'f' => [['id', 'eq', $a['mock_id']]]]);
            }
            return mcp_text("Result saved. It appears on the student's performance page (my.html#performance) and feeds the mistake fingerprint and what_to_do_today.");
        }
        case 'mistake_fingerprint': return mcp_text(J(fingerprint()));
        case 'performance': {
            $prog = db(['t' => 'progress', 'cols' => 'page,done,rating']);
            $res = db(['t' => 'results', 'cols' => 'item_id,kind,score,max_score,topics,created_at', 'order' => [['created_at', false]], 'limit' => 200]);
            $mocks = db(['t' => 'mocks', 'cols' => 'exam_id,minutes,started_at,submitted_at,score,max_score', 'order' => [['started_at', false]], 'limit' => 20]);
            $scored = array_values(array_filter($res, fn($r) => ($r['max_score'] ?? 0) > 0));
            $avg = $scored ? (int)round(100 * array_sum(array_map(fn($r) => $r['score'] / $r['max_score'], $scored)) / count($scored)) : null;
            $done = array_values(array_map(fn($p) => page_id($p['page']), array_filter($prog, fn($p) => $p['done'])));
            return mcp_text(J(['pages_done' => count($done), 'done' => $done, 'hard_pages' => array_values(array_map(fn($p) => page_id($p['page']), array_filter($prog, fn($p) => ($p['rating'] ?? 0) >= 4))),
                'results' => count($scored), 'average_percent' => $avg, 'recent' => array_slice($res, 0, 10), 'mocks' => $mocks, 'fingerprint' => fingerprint(),
                'days_to_exam_session' => (int)ceil((strtotime(MCP_EXAM_DATE) - time()) / 86400), 'page' => 'https://study-hub.ch/my.html#performance']));
        }
        case 'what_to_do_today': return mcp_text(J(gap_finder((int)($a['minutes'] ?? 0) ?: 60, $a['subject'] ?? null)));
        case 'design': {
            $action = $a['action'] ?? 'get';
            if ($action === 'get') {
                return mcp_text(J(['design' => get_item('design')['content'] ?? new stdClass(), 'options' => ['theme' => ['light', 'dark', 'auto'], 'palette' => 'a Design picker palette name (the site shows the list); light/dark only',
                    'colours' => 'accent, background, text, box as #rrggbb', 'font' => MCP_FONTS, 'size' => '80-150 (%)', 'density' => ['compact', 'normal', 'airy'], 'width' => ['narrow', 'normal', 'wide'], 'hide' => MCP_HIDE]]));
            }
            if ($action === 'reset') { db(['t' => 'my_items', 'op' => 'delete', 'f' => [['key', 'eq', 'design']]]); return mcp_text("Design reset to the StudyHub default (undo('design') brings it back)."); }
            $cur = get_item('design')['content'] ?? [];
            $next = clean_design(array_merge(is_array($cur) ? $cur : [], is_array($a['tokens'] ?? null) ? $a['tokens'] : []));
            put_item('design', $next ?: new stdClass());
            return mcp_text('Design saved: ' . json_encode($next ?: new stdClass(), JSON_UNESCAPED_SLASHES) . '. It applies on every StudyHub page when the student is signed in (reload the page). Content updates keep this design.');
        }
        case 'suggest': {
            if (($a['action'] ?? 'add') === 'list') {
                return mcp_text(J(db(['t' => 'suggestions', 'cols' => 'id,page,section,kind,body,status,review_note,created_at', 'order' => [['created_at', false]], 'limit' => 50])));
            }
            $pg = page_id($a['page'] ?? ''); $body = trim((string)($a['text'] ?? ''));
            if (!preg_match('/^[a-z0-9-]{2,60}$/', $pg)) { return mcp_err('page must be a page id like lesson-08 or serie-a03.'); }
            if (mb_strlen($body) < 5) { return mcp_err('Write the suggestion itself in text (at least a few words).'); }
            db(['t' => 'suggestions', 'op' => 'insert', 'v' => ['page' => $pg, 'section' => isset($a['section']) ? mb_substr((string)$a['section'], 0, 200) : null,
                'quote' => isset($a['quote']) ? mb_substr((string)$a['quote'], 0, 1000) : null, 'kind' => in_array($a['kind'] ?? null, ['mistake', 'unclear', 'addition', 'other'], true) ? $a['kind'] : 'mistake',
                'body' => mb_substr($body, 0, 4000), 'reason' => isset($a['reason']) ? mb_substr((string)$a['reason'], 0, 2000) : null, 'anonymous' => !empty($a['anonymous'])]]);
            return mcp_text('Suggestion filed. The site owner reviews it before anything changes; its status shows on My StudyHub (my.html#my-suggestions).');
        }
        case 'review_suggestions': {
            if (!db(['rpc' => 'is_admin', 'a' => []])) { return mcp_err('Only the site owner can review suggestions.'); }
            if (($a['action'] ?? 'list') === 'set') {
                $st = (string)($a['status'] ?? '');
                if (!in_array($st, ['new', 'accepted', 'rejected', 'done'], true)) { return mcp_err('status must be new, accepted, rejected or done.'); }
                db(['rpc' => 'suggestions_admin_set', 'a' => ['p_id' => (int)($a['id'] ?? 0), 'p_status' => $st, 'p_note' => isset($a['note']) ? mb_substr((string)$a['note'], 0, 2000) : null]]);
                return mcp_text('Suggestion ' . (int)($a['id'] ?? 0) . " marked $st.");
            }
            $list = db(['rpc' => 'suggestions_admin_list', 'a' => ['p_status' => $a['status'] ?? null]]);
            return mcp_text(J(['note' => 'Check each one against the official script / solutions first. Accepted ones still need a site update to go live.', 'suggestions' => $list]));
        }
        case 'list_library': {
            $docs = [];
            foreach (C()['docs'] as $d) { if (!empty($d['library'])) { $docs[] = ['id' => $d['id'], 'title' => $d['title'], 'subject' => $d['subject'] ?? null, 'pages' => $d['pages'] ?? null]; } }
            return $docs ? mcp_text(J(['note' => 'Private library: for study use by signed-in students only. Never paste whole files; quote short passages.', 'docs' => $docs])) : mcp_text('The private library is empty so far.');
        }
    }
    return mcp_err("Unknown tool $name.");
}

function fingerprint(): array {
    $data = db(['t' => 'results', 'cols' => 'mistakes,created_at', 'order' => [['created_at', false]], 'limit' => 300]);
    $byType = []; $byTopic = []; $recent = [];
    foreach ($data as $r) {
        foreach ($r['mistakes'] ?? [] as $m) {
            $byType[$m['type']] = ($byType[$m['type']] ?? 0) + 1;
            if (!empty($m['topic'])) { $byTopic[$m['topic']] = ($byTopic[$m['topic']] ?? 0) + 1; }
            if (count($recent) < 8) { $recent[] = $m + ['at' => $r['created_at']]; }
        }
    }
    $top = function ($o) { arsort($o); $out = []; foreach (array_slice($o, 0, 6, true) as $k => $n) { $out[] = ['k' => (string)$k, 'n' => $n]; } return $out; };
    return ['mistakes_logged' => array_sum($byType), 'most_common_types' => $top($byType), 'weakest_topics' => $top($byTopic), 'recent' => $recent];
}

// Gap finder: what to do today, from progress, ratings, results and the mistake fingerprint.
function gap_finder(int $minutes, ?string $subject): array {
    $c = C();
    $P = []; foreach (db(['t' => 'progress', 'cols' => 'page,done,rating,updated_at']) as $p) { $P[page_id($p['page'])] = $p; }
    $attempted = []; foreach (db(['t' => 'item_state', 'cols' => 'item_id,attempted_at']) as $s) { if ($s['attempted_at']) { $attempted[$s['item_id']] = true; } }
    $res = db(['t' => 'results', 'cols' => 'item_id,score,max_score,topics,created_at', 'order' => [['created_at', false]], 'limit' => 200]);
    $pages = [];
    foreach ($c['docs'] as $d) {   // Linear Algebra is examined after the second semester: only when asked for by name
        if (in_array($d['type'] ?? '', ['lesson', 'refresher'], true) && ($subject ? ($d['subject'] ?? null) === $subject : ($d['subject'] ?? null) !== 'linalg')) { $pages[] = $d['id']; }
    }
    sort($pages);
    $fp = fingerprint();
    $weak = [];
    foreach ($res as $r) { if (($r['max_score'] ?? 0) > 0 && $r['score'] / $r['max_score'] < 0.6) { $pg = explode('/', (string)$r['item_id'])[0]; $weak[$pg] = ($weak[$pg] ?? 0) + 1; } }
    $tasks = [];
    foreach ($pages as $pg) {
        $p = $P[$pg] ?? null; $w = $weak[$pg] ?? 0; $rating = (int)($p['rating'] ?? 0);
        if ($rating >= 4 || $w) {
            $ex = [];
            foreach ($c['exercises'] as $e) { if (($e['page'] ?? null) === $pg && !isset($attempted[$e['id']])) { $ex[] = $e['id']; if (count($ex) >= 2) { break; } } }
            $tasks[] = ['why' => $w ? "$w low score(s) here" : "you rated it $rating/5", 'do' => "Revisit $pg: redo " . ($ex ? implode(', ', $ex) : 'its exam exercise') . ' on paper', 'minutes' => 30, 'score' => 3 + $w + ($rating - 3)];
        }
    }
    foreach ($pages as $pg) {
        if (empty($P[$pg]['done'])) { $tasks[] = ['why' => 'next step on your path', 'do' => "Continue with $pg: " . (mcp_doc($c, $pg)['title'] ?? ''), 'minutes' => 60, 'score' => 4]; break; }
    }
    if ($fp['most_common_types']) {
        $t0 = $fp['most_common_types'][0];
        $tasks[] = ['why' => "your most common mistake type is \"{$t0['k']}\" ({$t0['n']}×)", 'do' => "Do one exam proof slowly and check only for {$t0['k']} mistakes", 'minutes' => 20, 'score' => 2 + $t0['n'] / 3];
    }
    $days = (int)ceil((strtotime(MCP_EXAM_DATE) - time()) / 86400);
    if ($days < 40) { $tasks[] = ['why' => "$days days to the exam session", 'do' => 'Do one timed mock (start_mock) and let it be marked', 'minutes' => 180, 'score' => $days < 20 ? 6 : 3]; }
    usort($tasks, fn($x, $y) => $y['score'] <=> $x['score']);
    $pick = []; $left = $minutes;
    foreach ($tasks as $t) { if ($t['minutes'] <= $left || !$pick) { unset($t['score']); $pick[] = $t; $left -= $t['minutes']; } if (count($pick) >= 3) { break; } }
    return ['minutes_available' => $minutes, 'today' => $pick, 'days_to_exam_session' => $days, 'note' => "Suggest at most these tasks, one at a time, gently. A missed day is fine: resume, don't rebuild."];
}
