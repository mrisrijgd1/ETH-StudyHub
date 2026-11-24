<?php
// StudyHub connector, course content: the content index built by connector/build/build_content.py
// (studyhub-data/connector/content.json + page images) and the private library built by build_library.py
// (studyhub-data/connector-library/index.json + page images). Both live OUTSIDE the website folder, on the
// Infomaniak server; they are only reachable through the signed-in connector. PHP port of content.ts.
declare(strict_types=1);

function mcp_dir(string $which): string { return sh_home() . '/studyhub-data/' . $which; }

// Loads both indexes. The parsed result (with the search index) is cached as a PHP serialize() file and
// rebuilt only when one of the JSON files changes, so a normal call costs one unserialize().
function mcp_content(): array {
    $files = [mcp_dir('connector') . '/content.json', mcp_dir('connector-library') . '/index.json'];
    $stamp = '';
    foreach ($files as $f) { $stamp .= is_file($f) ? filemtime($f) . ':' . filesize($f) . ';' : '-;'; }
    $cache = sh_data_dir('cache') . '/mcp-content-' . substr(md5($stamp), 0, 12) . '.ser';
    if (is_file($cache)) {
        $c = @unserialize((string)file_get_contents($cache));
        if (is_array($c)) { return $c; }
    }
    $c = is_file($files[0]) ? json_decode((string)file_get_contents($files[0]), true) : null;
    if (!is_array($c)) { $c = ['built' => 'none', 'docs' => [], 'chunks' => [], 'exercises' => [], 'pdfs' => [], 'scripts' => []]; }
    foreach (['docs', 'chunks', 'exercises', 'pdfs', 'scripts'] as $k) { $c[$k] = $c[$k] ?? []; }
    $lib = is_file($files[1]) ? json_decode((string)file_get_contents($files[1]), true) : null;
    if (is_array($lib)) {
        foreach ($lib['docs'] ?? [] as $d) { $d['library'] = true; $c['docs'][] = $d; $c['pdfs'][$d['id']] = $d; }
        foreach ($lib['chunks'] ?? [] as $ch) { $c['chunks'][] = $ch; }
    }
    $c['docById'] = [];
    foreach ($c['docs'] as $i => $d) { $c['docById'][$d['id']] = $i; }
    mcp_build_index($c);
    foreach (glob(sh_data_dir('cache') . '/mcp-content-*.ser') ?: [] as $old) { @unlink($old); }
    @file_put_contents($cache, serialize($c), LOCK_EX);
    return $c;
}

const MCP_STOP = ['the', 'a', 'an', 'of', 'and', 'or', 'to', 'in', 'is', 'it', 'for', 'on', 'with', 'as', 'by', 'be', 'are', 'that', 'this',
    'from', 'at', 'was', 'which', 'der', 'die', 'das', 'und', 'ist', 'ein', 'eine', 'von', 'zu', 'mit', 'den', 'im', 'für', 'auf', 'sich',
    'des', 'dem', 'nicht', 'es', 'wir', 'sei'];

function mcp_tokens(string $s): array {
    $s = mb_strtolower($s);
    if (class_exists('Normalizer')) { $s = Normalizer::normalize($s, Normalizer::FORM_C) ?: $s; }
    $s = preg_replace('/\\\\[a-z]+/', ' ', $s) ?? $s;
    $out = [];
    foreach (preg_split('/[^a-z0-9äöüß]+/u', $s) ?: [] as $t) {
        if (mb_strlen($t) <= 1 || in_array($t, MCP_STOP, true)) { continue; }
        $r = preg_replace('/(ungen|ung|en|es|e|s)$/u', '', $t);
        $out[] = ($r === '' || $r === null) ? $t : $r;
    }
    return $out;
}

function mcp_build_index(array &$c): void {
    $df = []; $toks = [];
    foreach ($c['chunks'] as $ch) {
        $tf = [];
        foreach (mcp_tokens(($ch['title'] ?? '') . ' ' . ($ch['title'] ?? '') . ' ' . ($ch['text'] ?? '')) as $t) { $tf[$t] = ($tf[$t] ?? 0) + 1; }
        $toks[] = $tf;
        foreach ($tf as $t => $_) { $df[$t] = ($df[$t] ?? 0) + 1; }
    }
    $c['_idx'] = ['df' => $df, 'toks' => $toks, 'n' => count($c['chunks'])];
}

function mcp_doc(array $c, string $id): ?array { $i = $c['docById'][$id] ?? null; return $i === null ? null : $c['docs'][$i]; }

function mcp_search(array $c, string $q, ?string $subject, ?string $type, int $limit = 8): array {
    $qt = array_values(array_unique(mcp_tokens($q)));
    ['df' => $df, 'toks' => $toks, 'n' => $n] = $c['_idx'];
    $wantEx = $type === 'exercise';
    $out = [];
    if (!$wantEx) {
        foreach ($c['chunks'] as $i => $ch) {
            $d = mcp_doc($c, (string)$ch['doc']);
            if (!$d) { continue; }
            if ($subject && $subject !== 'any' && ($d['subject'] ?? null) !== $subject) { continue; }
            if ($type && $type !== 'any' && !(($d['type'] ?? null) === $type || ($type === 'library' && !empty($d['library'])))) { continue; }
            if (!empty($d['solution_of'])) { continue; }
            $s = 0.0;
            foreach ($qt as $t) { $f = $toks[$i][$t] ?? 0; if ($f) { $s += log(1 + $n / ($df[$t] ?? 1)) * ($f / ($f + 1.5)); } }
            if ($s > 0) { $out[] = [$s, $ch, $d]; }
        }
    }
    usort($out, fn($a, $b) => $b[0] <=> $a[0]);
    $res = [];
    foreach (array_slice($out, 0, $limit) as [$s, $ch, $d]) {
        $res[] = ['id' => $ch['id'], 'title' => $ch['title'], 'type' => !empty($d['library']) ? 'library' : ($d['type'] ?? null), 'subject' => $d['subject'] ?? null,
            'label' => $d['label'] ?? (!empty($d['library']) ? 'library (private)' : 'StudyHub-written'), 'url' => $d['url'] ?? null, 'snippet' => mcp_snippet((string)$ch['text'], $qt)];
    }
    if (!$type || $type === 'any' || $wantEx) {
        $ex = [];
        foreach ($c['exercises'] as $e) {
            if ($subject && $subject !== 'any' && ($e['subject'] ?? null) !== $subject) { continue; }
            $tt = array_count_values(mcp_tokens(($e['title'] ?? '') . ' ' . ($e['title'] ?? '') . ' ' . ($e['problem'] ?? '')));
            $s = 0.0;
            foreach ($qt as $t) { $f = $tt[$t] ?? 0; if ($f) { $s += log(1 + $n / ($df[$t] ?? 1)) * ($f / ($f + 1.5)); } }
            if ($s > 0) { $ex[] = [$s, $e]; }
        }
        usort($ex, fn($a, $b) => $b[0] <=> $a[0]);
        foreach (array_slice($ex, 0, $wantEx ? $limit : 3) as [$s, $e]) {
            $res[] = ['id' => $e['id'], 'title' => $e['title'], 'type' => 'exercise', 'subject' => $e['subject'] ?? null, 'label' => 'StudyHub-written', 'url' => $e['url'] ?? null,
                'snippet' => mb_substr((string)$e['problem'], 0, 220)];
        }
    }
    return $res;
}

function mcp_snippet(string $t, array $qt): string {
    $low = mb_strtolower($t); $at = -1;
    foreach ($qt as $q) { $p = mb_strpos($low, $q); if ($p !== false) { $at = $p; break; } }
    $s = max(0, $at - 120);
    return ($s > 0 ? '…' : '') . preg_replace('/\s+/u', ' ', mb_substr($t, $s, 320)) . '…';
}

// ---------- reading ----------
function mcp_read(array $c, string $id, $page, callable $unlocked): array {
    if (preg_match('/^(script-(?:analysis|physics))@(-?\d+)$/', $id, $sm)) {
        $sc = $c['scripts'][$sm[1]] ?? null;
        if (!$sc) { return ['error' => 'Script not available.']; }
        $printed = (int)($page ?? $sm[2]);
        $t = $sc['page_text'][$printed + $sc['offset'] - 1] ?? null;
        if ($t === null) { return ['error' => "Page $printed is outside the script (printed pages " . (1 - $sc['offset']) . '..' . ($sc['pages'] - $sc['offset']) . ').']; }
        return ['text' => "{$sc['title']}, printed page $printed (official script; quote it as \"script p. $printed\"). Exact formulas: get_page_image('{$sm[1]}', $printed).\n\n$t"];
    }
    if (preg_match('/^(.+)@(\d+)$/', $id, $pm) && isset($c['pdfs'][$pm[1]])) { return mcp_read_pdf($c, $pm[1], (int)($page ?? $pm[2]), $unlocked); }
    foreach ($c['chunks'] as $ch) {
        if ($ch['id'] === $id && !isset($c['pdfs'][$ch['doc']])) {
            $d = mcp_doc($c, (string)$ch['doc']);
            return ['text' => "{$ch['title']}\nSource: " . ($d['label'] ?? 'StudyHub-written') . ' · ' . ($d['url'] ?? '') . "\n\n{$ch['text']}"];
        }
    }
    if (isset($c['pdfs'][$id])) { return mcp_read_pdf($c, $id, $page ? (int)$page : 0, $unlocked); }
    $parts = array_values(array_filter($c['chunks'], fn($x) => $x['doc'] === $id));
    if ($parts) {
        $d = mcp_doc($c, $id) ?? ['title' => $id, 'label' => '', 'url' => ''];
        $all = implode("\n\n", array_map(fn($p) => $p['text'], $parts));
        $pg = max(1, (int)$page ?: 1);
        $start = ($pg - 1) * 24000;
        $more = mb_strlen($all) > $start + 24000 ? "\n\n[continued: read('$id', page=" . ($pg + 1) . ')]' : '';
        return ['text' => "{$d['title']} ({$d['label']}) · {$d['url']}\n" . mcp_ex_index($c, $id) . "\n\n" . mb_substr($all, $start, 24000) . $more];
    }
    return ['error' => "Nothing with id \"$id\". Use search first."];
}

function mcp_read_pdf(array $c, string $id, int $page, callable $unlocked): array {
    $d = $c['pdfs'][$id];
    if (!empty($d['solution_of']) && !$unlocked($id)) {
        return ['error' => "Locked: {$d['title']} is an official solutions file. It opens once the student has submitted an attempt (submit_attempt('doc:{$d['solution_of']}#<question>', …)) or a mock of that exam (submit_mock)."];
    }
    $open = !empty($d['inline_solutions']) ? $unlocked($id) : true;
    $pages = $open ? $d['page_text'] : ($d['questions_text'] ?? $d['page_text']);
    $head = "{$d['title']} (" . (!empty($d['library']) ? 'library (private, do not share files)' : ($d['label'] ?? '')) . ") · {$d['pages']} pages" . (!empty($d['url']) ? ' · ' . $d['url'] : '') .
        (!empty($d['inline_solutions']) && !$open ? "\n[Official solutions in this file are locked until submit_attempt('doc:$id#<question>', …).]" : '') .
        (!empty($d['solution_doc']) ? "\nOfficial solutions: {$d['solution_doc']} (locked until an attempt)." : '');
    if (!$page) {
        $all = mcp_whole($pages, PHP_INT_MAX);
        return ['text' => "$head\n\n" . mb_substr($all, 0, 30000) . (mb_strlen($all) > 30000 ? "\n\n[cut: use read('$id', page=n)]" : '')];
    }
    if ($page < 1 || $page > count($pages)) { return ['error' => "Page $page out of range 1.." . count($pages) . '.']; }
    return ['text' => "$head\n--- page $page --- (exact formulas: get_page_image('$id', $page))\n\n" . $pages[$page - 1]];
}

function mcp_page_image(array $c, string $doc, int $page, callable $unlocked): array {
    $dir = 'connector'; $path = ''; $caption = '';
    $sc = $c['scripts'][$doc] ?? null;
    if ($sc) {
        $pdfPage = $page + $sc['offset'];
        if ($pdfPage < 1 || $pdfPage > $sc['pages']) { return ['error' => 'Page out of range.']; }
        $path = "pages/$doc/$pdfPage.jpg"; $caption = "{$sc['title']}, printed page $page";
    } else {
        $d = $c['pdfs'][$doc] ?? null;
        if (!$d) { return ['error' => "Unknown document $doc."]; }
        if ((!empty($d['solution_of']) || !empty($d['inline_solutions'])) && !$unlocked($doc)) { return ['error' => 'Locked: this page image contains official solutions. Submit an attempt first.']; }
        if ($page < 1 || $page > $d['pages']) { return ['error' => "Page out of range 1..{$d['pages']}."]; }
        if (!empty($d['library'])) { $dir = 'connector-library'; }
        $path = "pages/$doc/$page.jpg"; $caption = "{$d['title']}, page $page";
    }
    if (strpos($path, '..') !== false) { return ['error' => 'Bad id.']; }
    $f = mcp_dir($dir) . '/' . $path;
    if (!is_file($f)) { return ['error' => 'Image not available yet; use read() for the text.']; }
    return ['data' => base64_encode((string)file_get_contents($f)), 'caption' => $caption];
}

// ---------- exercises ----------
const MCP_LABEL = '/(?:^|\n)\s*((?:\d\.)?(?:MC|K|B|A)\d+|Aufgabe\s+\d+|Problem\s+\d+|Exercise\s+\d+|\d{1,2}\.(?=\s+\d+\s+Punkte))/u';

function mcp_whole(array $pages, int $max = 25000): string {
    $parts = [];
    foreach ($pages as $i => $p) { $parts[] = '--- page ' . ($i + 1) . " ---\n" . $p; }
    $all = implode("\n\n", $parts);
    return mb_strlen($all) > $max ? mb_substr($all, 0, $max) . "\n[cut: read the remaining pages one by one]" : $all;
}

function mcp_segment(array $pages, string $q): ?string {
    $all = implode("\n", $pages);
    $norm = fn($s) => mb_strtolower(trim(preg_replace('/\s+/u', ' ', $s) ?? ''));
    preg_match_all(MCP_LABEL, $all, $mm, PREG_OFFSET_CAPTURE);
    $marks = [];
    foreach ($mm[1] as $m) { $marks[] = ['label' => $norm($m[0]), 'at' => $m[1]]; }   // byte offsets
    $want = $norm($q);
    $i = -1;
    foreach ($marks as $k => $m) {
        $l = $m['label'];
        if ($l === $want || $l === $want . '.' || $l === preg_replace('/^(aufgabe|exercise|problem)\s*/', '', $want) . '.'
            || str_ends_with($l, '.' . $want) || $l === preg_replace('/^aufgabe/', 'aufgabe ', $want)) { $i = $k; break; }
    }
    if ($i < 0) { return null; }
    $end = strlen($all);
    for ($k = $i + 1; $k < count($marks); $k++) { if ($marks[$k]['label'] !== $marks[$i]['label']) { $end = $marks[$k]['at']; break; } }
    $seg = substr($all, $marks[$i]['at'], $end - $marks[$i]['at']);
    return trim(mb_substr(mb_convert_encoding($seg, 'UTF-8', 'UTF-8'), 0, 12000));
}

function mcp_script_excerpt(array $c, ?string $subject, $pages): array {
    if ($subject === 'linalg') { return []; }   // Linear Algebra pages refer to its own script (a library file)
    $sc = $c['scripts'][$subject === 'physics' ? 'script-physics' : 'script-analysis'] ?? null;
    if (!$sc || !is_array($pages) || !$pages) { return []; }
    $out = [];
    foreach (array_slice($pages, 0, 3) as $p) {
        $out[] = ['printed_page' => $p, 'quote_as' => "script p. $p", 'text' => mb_substr((string)($sc['page_text'][$p + $sc['offset'] - 1] ?? ''), 0, 1800)];
    }
    return $out;
}

function mcp_related_official(array $c, string $t, ?string $subject): array {
    preg_match_all('/\b(HS|FS)\s?(\d{2})\b/', $t, $m, PREG_SET_ORDER);
    $keys = [];
    foreach ($m as $x) { $keys[strtolower($x[1]) . $x[2]] = true; }
    if (!$keys) { return []; }
    $out = [];
    foreach ($c['pdfs'] as $d) {
        if (!empty($d['library']) || ($d['type'] ?? '') !== 'exam') { continue; }
        if ($subject && !empty($d['subject']) && $d['subject'] !== $subject) { continue; }
        $hit = false; foreach ($keys as $k => $_) { if (strpos($d['id'], $k) !== false) { $hit = true; break; } }
        if (!$hit) { continue; }
        $out[] = ['id' => $d['id'], 'title' => $d['title'], 'official_solutions' => $d['solution_doc'] ?? (!empty($d['inline_solutions']) ? $d['id'] : null),
            'how' => "get_exercise('doc:{$d['id']}#<question label>')"];
        if (count($out) >= 4) { break; }
    }
    return $out;
}

function mcp_ex_index(array $c, string $page): string {
    $list = array_filter($c['exercises'], fn($e) => ($e['page'] ?? null) === $page);
    if (!$list) { return 'No locked exercises on this page.'; }
    return "Exercises on this page (solutions locked). Use EXACTLY these ids; the page's own labels like \"Exercise 2\" are not ex2:\n" .
        implode("\n", array_map(fn($e) => '- ' . $e['id'] . ' = ' . mb_substr((string)$e['title'], 0, 90), $list));
}
