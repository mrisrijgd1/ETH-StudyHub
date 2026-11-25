<?php
// StudyHub data layer on the Infomaniak hosting (MariaDB).
// Supabase only does the LOGIN: the browser (or the AI connector) sends its Supabase access token,
// we ask Supabase once who that is (cached briefly), and every read/write is then limited to that
// person's own rows, exactly like the old Supabase row-level security rules.
// Secrets live only in <home>/studyhub-data/db-config.php (made by hand on the server, never in GitHub).

declare(strict_types=1);

const SH_SUPABASE_URL = 'https://qgntwqqmpdiwexnwsmnm.supabase.co';
const SH_SUPABASE_KEY = 'sb_publishable_Kox04-HlRIieoQbhDlqSuw_ko2783NR'; // public by design
const SH_SCHEMA_VERSION = 1;
if (!function_exists('array_is_list')) {   // PHP < 8.1
    function array_is_list(array $a): bool { $i = 0; foreach ($a as $k => $_) { if ($k !== $i++) { return false; } } return true; }
}

final class ShError extends Exception {}

function sh_home(): string { return getenv('SH_HOME') ?: dirname(__DIR__, 4); }
function sh_data_dir(string $sub = ''): string {
    $d = sh_home() . '/studyhub-data' . ($sub !== '' ? '/' . $sub : '');
    if (!is_dir($d)) { @mkdir($d, 0700, true); }
    return $d;
}

function sh_pdo(): PDO {
    static $pdo = null;
    if ($pdo) { return $pdo; }
    $f = sh_data_dir() . '/db-config.php';
    if (!is_file($f)) { throw new ShError('The database is not set up yet.'); }
    $c = include $f;
    $pdo = new PDO('mysql:host=' . $c['host'] . ';dbname=' . $c['name'] . ';charset=utf8mb4', $c['user'], $c['pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $pdo->exec("SET time_zone = '+00:00'");
    sh_migrate($pdo);
    return $pdo;
}

// ---------------------------------------------------------------- schema
// Column types: uuid, text, bool, int, num, json, ts. 'id' = auto number.
const SH_TABLES = [
    'users'         => ['own' => 'id', 'cols' => ['id' => 'uuid', 'email' => 'text', 'last_seen' => 'ts', 'created_at' => 'ts'], 'pk' => ['id'], 'internal' => true],
    'profiles'      => ['own' => 'id', 'cols' => ['id' => 'uuid', 'nickname' => 'text', 'leaderboard' => 'bool', 'created_at' => 'ts'], 'pk' => ['id']],
    'progress'      => ['own' => 'user_id', 'cols' => ['user_id' => 'uuid', 'page' => 'text', 'done' => 'bool', 'rating' => 'int', 'note' => 'text', 'updated_at' => 'ts'], 'pk' => ['user_id', 'page'], 'log' => 'progress'],
    'forum_threads' => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'topic' => 'text', 'title' => 'text', 'body' => 'text', 'anonymous' => 'bool', 'created_at' => 'ts'], 'pk' => ['id']],
    'forum_posts'   => ['own' => 'user_id', 'cols' => ['id' => 'id', 'thread_id' => 'int', 'user_id' => 'uuid', 'body' => 'text', 'anonymous' => 'bool', 'created_at' => 'ts'], 'pk' => ['id']],
    'my_items'      => ['own' => 'user_id', 'cols' => ['user_id' => 'uuid', 'key' => 'text', 'content' => 'json', 'source' => 'text', 'updated_at' => 'ts'], 'pk' => ['user_id', 'key'], 'log' => 'items'],
    'my_versions'   => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'key' => 'text', 'content' => 'json', 'source' => 'text', 'created_at' => 'ts'], 'pk' => ['id'], 'readonly' => true],
    'item_state'    => ['own' => 'user_id', 'cols' => ['user_id' => 'uuid', 'item_id' => 'text', 'hints_shown' => 'int', 'attempted_at' => 'ts', 'updated_at' => 'ts'], 'pk' => ['user_id', 'item_id']],
    'attempts'      => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'item_id' => 'text', 'kind' => 'text', 'attempt' => 'text', 'created_at' => 'ts'], 'pk' => ['id']],
    'results'       => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'item_id' => 'text', 'kind' => 'text', 'score' => 'num', 'max_score' => 'num', 'summary' => 'text', 'mistakes' => 'json', 'topics' => 'json', 'created_at' => 'ts'], 'pk' => ['id']],
    'mocks'         => ['own' => 'user_id', 'cols' => ['id' => 'uuid', 'user_id' => 'uuid', 'exam_id' => 'text', 'minutes' => 'int', 'started_at' => 'ts', 'submitted_at' => 'ts', 'score' => 'num', 'max_score' => 'num', 'feedback' => 'text'], 'pk' => ['id']],
    'suggestions'   => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'page' => 'text', 'section' => 'text', 'quote' => 'text', 'kind' => 'text', 'body' => 'text', 'reason' => 'text', 'anonymous' => 'bool', 'status' => 'text', 'review_note' => 'text', 'created_at' => 'ts', 'reviewed_at' => 'ts'], 'pk' => ['id']],
    'admins'        => ['own' => 'user_id', 'cols' => ['user_id' => 'uuid'], 'pk' => ['user_id'], 'readonly' => true],
    'dive_runs'     => ['own' => 'user_id', 'cols' => ['id' => 'id', 'user_id' => 'uuid', 'subject' => 'text', 'timer' => 'int', 'depth' => 'int', 'answers' => 'int', 'created_at' => 'ts'], 'pk' => ['id']],
    'app_state'     => ['own' => 'user_id', 'cols' => ['user_id' => 'uuid', 'app' => 'text', 'data' => 'json', 'updated_at' => 'ts'], 'pk' => ['user_id', 'app']],
];

// Defaults applied on insert when a column is missing (like the old SQL defaults).
const SH_DEFAULTS = [
    'profiles' => ['leaderboard' => false, 'created_at' => 'now'],
    'progress' => ['done' => false, 'updated_at' => 'now'],
    'forum_threads' => ['anonymous' => false, 'created_at' => 'now'],
    'forum_posts' => ['anonymous' => false, 'created_at' => 'now'],
    'my_items' => ['source' => 'site', 'updated_at' => 'now'],
    'my_versions' => ['source' => 'site', 'created_at' => 'now'],
    'item_state' => ['hints_shown' => 0, 'updated_at' => 'now'],
    'attempts' => ['kind' => 'exercise', 'created_at' => 'now'],
    'results' => ['kind' => 'exercise', 'mistakes' => [], 'topics' => [], 'created_at' => 'now'],
    'mocks' => ['id' => 'uuid', 'started_at' => 'now'],
    'suggestions' => ['kind' => 'mistake', 'anonymous' => false, 'status' => 'new', 'created_at' => 'now'],
    'dive_runs' => ['created_at' => 'now'],
    'app_state' => ['updated_at' => 'now'],
    'users' => ['created_at' => 'now'],
];

function sh_sql_type(string $t, string $col): string {
    switch ($t) {
        case 'uuid': return 'CHAR(36) NOT NULL';
        case 'id':   return 'BIGINT NOT NULL AUTO_INCREMENT';
        case 'bool': return 'TINYINT(1) NULL';
        case 'int':  return 'BIGINT NULL';
        case 'num':  return 'DOUBLE NULL';
        case 'json': return 'LONGTEXT NULL';
        case 'ts':   return 'DATETIME(3) NULL';
        default:     return in_array($col, ['page', 'key', 'app', 'item_id', 'topic', 'exam_id', 'subject', 'nickname', 'kind', 'status', 'source'], true) ? 'VARCHAR(191) NULL' : 'MEDIUMTEXT NULL';
    }
}

function sh_migrate(PDO $pdo): void {
    $marker = sh_data_dir() . '/.schema-v' . SH_SCHEMA_VERSION;
    if (is_file($marker)) { return; }
    foreach (SH_TABLES as $name => $t) {
        $cols = [];
        foreach ($t['cols'] as $c => $ty) {
            $nn = in_array($c, $t['pk'], true) ? str_replace(' NULL', ' NOT NULL', sh_sql_type($ty, $c)) : sh_sql_type($ty, $c);
            $nn = str_replace('NOT NOT NULL', 'NOT NULL', $nn);
            $cols[] = '`' . $c . '` ' . $nn;
        }
        $cols[] = 'PRIMARY KEY (`' . implode('`,`', $t['pk']) . '`)';
        $pdo->exec('CREATE TABLE IF NOT EXISTS `' . $name . '` (' . implode(', ', $cols) . ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin'
            . (isset($t['cols']['id']) && $t['cols']['id'] === 'id' ? ' AUTO_INCREMENT=1000000' : ''));
    }
    // Indexes for the common lookups.
    $idx = [
        'profiles' => 'UNIQUE KEY nick (nickname)',
        'forum_threads' => 'KEY by_topic (topic, created_at)',
        'forum_posts' => 'KEY by_thread (thread_id, created_at)',
        'my_versions' => 'KEY by_user_key (user_id, `key`, id)',
        'results' => 'KEY by_user (user_id, created_at)',
        'mocks' => 'KEY by_user (user_id, started_at)',
        'attempts' => 'KEY by_user (user_id, created_at)',
        'suggestions' => 'KEY by_user (user_id, created_at)',
        'dive_runs' => 'KEY board (subject, timer, depth)',
    ];
    foreach ($idx as $tbl => $def) {
        try { $pdo->exec('ALTER TABLE `' . $tbl . '` ADD ' . $def); } catch (PDOException $e) { /* already there */ }
    }
    @file_put_contents($marker, date('c'));
}

// ---------------------------------------------------------------- auth
// Returns ['id' => uuid] for a valid Supabase access token, or null. The e-mail address is NOT kept:
// StudyHub only needs the login's id (the address stays with the login service).
function sh_user_from_token(string $token): ?array {
    if ($token === '' || strlen($token) > 4096) { return null; }
    $cacheDir = sh_data_dir('cache');
    $cf = $cacheDir . '/' . hash('sha256', $token) . '.json';
    if (is_file($cf) && filemtime($cf) > time() - 120) {
        $u = json_decode((string)file_get_contents($cf), true);
        if (is_array($u) && isset($u['id'])) { return $u; }
    }
    $u = sh_http_get_user($token);
    if ($u === null) { return null; }
    @file_put_contents($cf, json_encode($u), LOCK_EX);
    if (mt_rand(1, 50) === 1) {   // tidy old cache entries now and then
        foreach (glob($cacheDir . '/*.json') ?: [] as $old) { if (filemtime($old) < time() - 600) { @unlink($old); } }
    }
    return $u;
}

function sh_http_get_user(string $token): ?array {
    $hook = getenv('SH_TEST_USERS');   // local tests only: JSON map token -> user
    if ($hook) { $m = json_decode($hook, true); return $m[$token] ?? null; }
    $ctx = stream_context_create(['http' => [
        'method' => 'GET', 'timeout' => 8, 'ignore_errors' => true,
        'header' => "apikey: " . SH_SUPABASE_KEY . "\r\nAuthorization: Bearer " . $token . "\r\n",
    ]]);
    $body = @file_get_contents(SH_SUPABASE_URL . '/auth/v1/user', false, $ctx);
    if ($body === false) { throw new ShError('Could not reach the login service. Please try again.'); }
    $status = 0;
    foreach ($http_response_header ?? [] as $h) { if (preg_match('~^HTTP/\S+\s+(\d+)~', $h, $m)) { $status = (int)$m[1]; } }
    if ($status !== 200) { return null; }
    $j = json_decode($body, true);
    if (!is_array($j) || !preg_match('/^[0-9a-f-]{36}$/', (string)($j['id'] ?? ''))) { return null; }
    return ['id' => $j['id']];
}

function sh_touch_user(PDO $pdo, array $u): void {
    static $done = false;
    if ($done) { return; }
    $done = true;
    $pdo->prepare('INSERT INTO users (id, email, last_seen, created_at) VALUES (?, NULL, UTC_TIMESTAMP(3), UTC_TIMESTAMP(3))
                   ON DUPLICATE KEY UPDATE email = NULL, last_seen = VALUES(last_seen)')->execute([$u['id']]);
}

function sh_is_admin(PDO $pdo, ?array $u): bool {
    if (!$u) { return false; }
    $s = $pdo->prepare('SELECT 1 FROM admins WHERE user_id = ?');
    $s->execute([$u['id']]);
    return (bool)$s->fetchColumn();
}

// ---------------------------------------------------------------- values in / out
function sh_now(): string { return (new DateTime('now', new DateTimeZone('UTC')))->format('Y-m-d H:i:s.v'); }
function sh_uuid4(): string {
    $b = random_bytes(16); $b[6] = chr((ord($b[6]) & 0x0f) | 0x40); $b[8] = chr((ord($b[8]) & 0x3f) | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($b), 4));
}

function sh_in(string $type, $v) {
    if ($v === null) { return null; }
    switch ($type) {
        case 'bool': return $v ? 1 : 0;
        case 'int': case 'id': return is_numeric($v) ? (int)$v : null;
        case 'num': return is_numeric($v) ? (float)$v : null;
        case 'json': return json_encode($v, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        case 'ts':
            if ($v === 'now') { return sh_now(); }
            $t = strtotime((string)$v);
            if ($t === false) { throw new ShError('Bad date.'); }
            $ms = preg_match('/\.(\d{1,3})/', (string)$v, $m) ? str_pad($m[1], 3, '0') : '000';
            return gmdate('Y-m-d H:i:s', $t) . '.' . $ms;
        case 'uuid':
            if (!preg_match('/^[0-9a-fA-F-]{36}$/', (string)$v)) { throw new ShError('Bad id.'); }
            return strtolower((string)$v);
        default: return (string)$v;
    }
}

function sh_out(string $table, array $row): array {
    $cols = SH_TABLES[$table]['cols'] ?? [];
    foreach ($row as $k => $v) {
        $ty = $cols[$k] ?? null;
        if ($v === null || $ty === null) { continue; }
        switch ($ty) {
            case 'bool': $row[$k] = (bool)$v; break;
            case 'int': case 'id': $row[$k] = (int)$v; break;
            case 'num': $row[$k] = (float)$v; break;
            case 'json': $row[$k] = json_decode((string)$v, true); break;
            case 'ts': $row[$k] = str_replace(' ', 'T', substr((string)$v, 0, 23)) . '+00:00'; break;
        }
    }
    return $row;
}
function sh_ts_out($v): ?string { return $v === null ? null : str_replace(' ', 'T', substr((string)$v, 0, 23)) . '+00:00'; }

// ---------------------------------------------------------------- checks (the old SQL CHECK rules)
function sh_check(string $table, array $r): void {
    $len = function ($k, $min, $max) use ($r) {
        if (!array_key_exists($k, $r) || $r[$k] === null) { return; }
        $n = mb_strlen((string)$r[$k]);
        if ($n < $min || $n > $max) { throw new ShError("$k must be $min to $max characters."); }
    };
    $in = function ($k, array $ok) use ($r) {
        if (array_key_exists($k, $r) && $r[$k] !== null && !in_array($r[$k], $ok, true)) { throw new ShError("Unknown $k."); }
    };
    $big = function ($k) use ($r) {
        if (array_key_exists($k, $r) && strlen(json_encode($r[$k])) >= 300000) { throw new ShError('Too much data in one item.'); }
    };
    switch ($table) {
        case 'profiles': $len('nickname', 2, 30); break;
        case 'progress': $len('page', 1, 100); $len('note', 0, 5000);
            if (isset($r['rating']) && ($r['rating'] < 1 || $r['rating'] > 5)) { throw new ShError('Rating must be 1 to 5.'); } break;
        case 'forum_threads': $len('topic', 0, 100); $len('title', 3, 150); $len('body', 1, 5000); break;
        case 'forum_posts': $len('body', 1, 5000); break;
        case 'my_items': $in('key', ['plan', 'notes', 'questions', 'flashcards', 'design', 'study_setup', 'memory']);
            $in('source', ['site', 'ai', 'undo', 'restore', 'reset']); $big('content'); break;
        case 'attempts': $len('attempt', 0, 20000); break;
        case 'results': $in('kind', ['exercise', 'exam', 'mock', 'check']); $len('summary', 0, 5000); break;
        case 'mocks': $len('feedback', 0, 20000); break;
        case 'suggestions': $len('page', 1, 100); $len('section', 0, 200); $len('quote', 0, 1000); $len('body', 5, 4000);
            $len('reason', 0, 2000); $len('review_note', 0, 2000);
            $in('kind', ['mistake', 'unclear', 'addition', 'other']); $in('status', ['new', 'accepted', 'rejected', 'done']); break;
        case 'dive_runs': $in('subject', ['analysis', 'physics', 'mixed']); $in('timer', [30, 60, 120, 180, 300]);
            if (isset($r['depth']) && ($r['depth'] < 0 || $r['depth'] > 11000)) { throw new ShError('Bad depth.'); }
            if (isset($r['answers']) && ($r['answers'] < 0 || $r['answers'] > 24)) { throw new ShError('Bad answers.'); } break;
        case 'app_state': $in('app', ['dive', 'chemie', 'flashcards', 'linalg']); $big('data'); break;
    }
}
