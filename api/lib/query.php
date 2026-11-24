<?php
// Runs one request from assets/shdb.js (the small stand-in for the Supabase client) against MariaDB.
// Request: {"t": table, "op": "select|insert|upsert|update|delete", "cols": "a,b", "f": [[col, op, value]],
//           "order": [[col, asc]], "limit": n, "one": "single|maybe", "v": row or [rows], "ret": true}
//      or  {"rpc": name, "a": {args}}
// Every request by a person is limited to their own rows (like the old row-level security).

declare(strict_types=1);
require_once __DIR__ . '/shdb.php';

function sh_ident(string $table, string $c): string {
    if (!isset(SH_TABLES[$table]['cols'][$c])) { throw new ShError("Unknown column $c."); }
    return '`' . $c . '`';
}

function sh_where(string $table, array $filters, array &$args): string {
    $w = [];
    foreach ($filters as $f) {
        [$c, $op, $v] = [$f[0] ?? '', $f[1] ?? 'eq', $f[2] ?? null];
        $col = sh_ident($table, (string)$c);
        $ty = SH_TABLES[$table]['cols'][$c];
        switch ($op) {
            case 'eq':  if ($v === null) { $w[] = "$col IS NULL"; } else { $w[] = "$col = ?"; $args[] = sh_in($ty, $v); } break;
            case 'neq': $w[] = "$col <> ?"; $args[] = sh_in($ty, $v); break;
            case 'gt':  $w[] = "$col > ?"; $args[] = sh_in($ty, $v); break;
            case 'gte': $w[] = "$col >= ?"; $args[] = sh_in($ty, $v); break;
            case 'lt':  $w[] = "$col < ?"; $args[] = sh_in($ty, $v); break;
            case 'lte': $w[] = "$col <= ?"; $args[] = sh_in($ty, $v); break;
            case 'in':
                $vals = is_array($v) ? array_values($v) : [];
                if (!$vals) { $w[] = '0'; break; }
                $w[] = "$col IN (" . implode(',', array_fill(0, count($vals), '?')) . ')';
                foreach ($vals as $x) { $args[] = sh_in($ty, $x); }
                break;
            case 'prefix': // "starts with" (the connector's docUnlocked: item_id starting with "doc:<exam>#")
                $w[] = "$col LIKE ?"; $args[] = addcslashes((string)$v, '%_\\') . '%'; break;
            case 'is':     $w[] = "$col IS NULL"; break;
            case 'not_is': $w[] = "$col IS NOT NULL"; break;
            default: throw new ShError('Unknown filter.');
        }
    }
    return $w ? ' WHERE ' . implode(' AND ', $w) : '';
}

// Who may do what. Returns the extra owner filter to add (or null = no extra filter).
function sh_policy(PDO $pdo, ?array $u, string $table, string $op): ?array {
    $t = SH_TABLES[$table] ?? null;
    if (!$t || !empty($t['internal'])) { throw new ShError('Unknown table.'); }
    if (!$u) { throw new ShError('Please sign in first.'); }
    if (!empty($t['readonly']) && $op !== 'select') { throw new ShError('Not allowed.'); }
    $admin = sh_is_admin($pdo, $u);
    // Admins review everyone's suggestions and see nicknames for them (as before).
    if ($admin && $table === 'suggestions' && in_array($op, ['select', 'update'], true)) { return null; }
    if ($admin && $table === 'profiles' && $op === 'select') { return null; }
    if (in_array($table, ['forum_threads', 'forum_posts'], true) && $op === 'update') { throw new ShError('Not allowed.'); }
    if ($table === 'suggestions' && $op === 'update') { throw new ShError('Not allowed.'); }
    return [$t['own'], 'eq', $u['id']];
}

function sh_run(PDO $pdo, ?array $u, array $q) {
    if (isset($q['rpc'])) { return sh_rpc($pdo, $u, (string)$q['rpc'], is_array($q['a'] ?? null) ? $q['a'] : []); }
    $table = (string)($q['t'] ?? '');
    $op = (string)($q['op'] ?? 'select');
    $own = sh_policy($pdo, $u, $table, $op);
    $t = SH_TABLES[$table];
    $filters = is_array($q['f'] ?? null) ? $q['f'] : [];
    if ($own) { $filters[] = $own; }
    $args = [];

    if ($op === 'select') {
        $cols = trim((string)($q['cols'] ?? '*'));
        $sel = $cols === '*' || $cols === '' ? array_keys($t['cols']) : array_map('trim', explode(',', $cols));
        $sql = 'SELECT ' . implode(',', array_map(fn($c) => sh_ident($table, $c), $sel)) . ' FROM `' . $table . '`' . sh_where($table, $filters, $args);
        if (!empty($q['order'])) {
            $sql .= ' ORDER BY ' . implode(',', array_map(fn($o) => sh_ident($table, (string)$o[0]) . (!empty($o[1]) ? ' ASC' : ' DESC'), $q['order']));
        }
        $lim = isset($q['limit']) ? max(1, min(1000, (int)$q['limit'])) : 1000;
        $sql .= ' LIMIT ' . $lim;
        $s = $pdo->prepare($sql); $s->execute($args);
        $rows = array_map(fn($r) => sh_out($table, $r), $s->fetchAll());
        return sh_one($rows, $q['one'] ?? null);
    }

    if ($op === 'insert' || $op === 'upsert') {
        $rows = isset($q['v'][0]) || ($q['v'] ?? null) === [] ? $q['v'] : [$q['v'] ?? []];
        $out = [];
        foreach ($rows as $r) {
            if (!is_array($r)) { throw new ShError('Bad row.'); }
            $r[$t['own']] = $u['id'];                                    // always the signed-in person
            if ($table === 'suggestions') { $r['status'] = 'new'; unset($r['review_note'], $r['reviewed_at']); }
            foreach ($t['cols'] as $c => $ty) { if ($ty === 'id' && $op === 'insert') { unset($r[$c]); } }
            foreach (array_keys($r) as $c) { sh_ident($table, (string)$c); }
            // Upsert = update the row with the same primary key if it is there (only the given columns, like Supabase),
            // otherwise insert. Never "ON DUPLICATE KEY", which could touch another person's row through a unique nickname.
            $exists = null;
            if ($op === 'upsert' && count(array_intersect($t['pk'], array_keys($r))) === count($t['pk'])) {
                $kf = []; foreach ($t['pk'] as $p) { $kf[] = [$p, 'eq', $r[$p]]; }
                $exists = sh_keys($pdo, $table, $kf)[0] ?? null;
            }
            if ($exists) {
                $set = []; $vals = [];
                foreach ($r as $c => $v) { if (!in_array($c, $t['pk'], true)) { $set[] = "`$c` = ?"; $vals[] = sh_in($t['cols'][$c], $v); } }
                sh_check($table, $r);
                if ($set) {
                    $kv = []; foreach ($t['pk'] as $p) { $kv[] = [$p, 'eq', $r[$p]]; }
                    $pdo->prepare('UPDATE `' . $table . '` SET ' . implode(', ', $set) . sh_where($table, $kv, $vals))->execute($vals);
                }
            } else {
                if ($table === 'suggestions') { sh_suggestion_limit($pdo, $u); }
                foreach (SH_DEFAULTS[$table] ?? [] as $k => $d) {
                    if (!array_key_exists($k, $r)) { $r[$k] = $d === 'uuid' ? sh_uuid4() : $d; }
                }
                sh_check($table, $r);
                $cols = []; $vals = [];
                foreach ($r as $c => $v) { $cols[] = '`' . $c . '`'; $vals[] = sh_in($t['cols'][$c], $v); }
                $pdo->prepare('INSERT INTO `' . $table . '` (' . implode(',', $cols) . ') VALUES (' . implode(',', array_fill(0, count($cols), '?')) . ')')->execute($vals);
            }
            $key = [];
            foreach ($t['pk'] as $p) { $key[$p] = ($t['cols'][$p] === 'id') ? (int)($r[$p] ?? $pdo->lastInsertId()) : $r[$p]; }
            sh_after_write($pdo, $table, $key, 'write');
            if (!empty($q['ret'])) { $out[] = sh_fetch_key($pdo, $table, $key); }
        }
        return !empty($q['ret']) ? sh_one($out, $q['one'] ?? null) : null;
    }

    if ($op === 'update') {
        $v = is_array($q['v'] ?? null) ? $q['v'] : [];
        unset($v[$t['own']]);
        foreach ($t['pk'] as $p) { unset($v[$p]); }
        if (!$v) { return null; }
        sh_check($table, $v);
        $keys = sh_keys($pdo, $table, $filters);
        $set = []; $vals = [];
        foreach ($v as $c => $x) { $set[] = sh_ident($table, (string)$c) . ' = ?'; $vals[] = sh_in($t['cols'][$c], $x); }
        $sql = 'UPDATE `' . $table . '` SET ' . implode(', ', $set) . sh_where($table, $filters, $vals);
        $pdo->prepare($sql)->execute($vals);
        foreach ($keys as $k) { sh_after_write($pdo, $table, $k, 'write'); }
        return null;
    }

    if ($op === 'delete') {
        $keys = sh_keys($pdo, $table, $filters);
        $sql = 'DELETE FROM `' . $table . '`' . sh_where($table, $filters, $args);
        $pdo->prepare($sql)->execute($args);
        if ($table === 'forum_threads' && $keys) {   // replies go with their thread (was ON DELETE CASCADE)
            $ids = array_column($keys, 'id');
            $pdo->prepare('DELETE FROM forum_posts WHERE thread_id IN (' . implode(',', array_fill(0, count($ids), '?')) . ')')->execute($ids);
        }
        foreach ($keys as $k) { sh_after_write($pdo, $table, $k, 'delete'); }
        return null;
    }
    throw new ShError('Unknown operation.');
}

function sh_one(array $rows, $one) {
    if ($one === 'single') { if (count($rows) !== 1) { throw new ShError('Expected exactly one row.'); } return $rows[0]; }
    if ($one === 'maybe') { return $rows[0] ?? null; }
    return $rows;
}

function sh_keys(PDO $pdo, string $table, array $filters): array {
    $pk = SH_TABLES[$table]['pk'];
    $args = [];
    $s = $pdo->prepare('SELECT ' . implode(',', array_map(fn($c) => '`' . $c . '`', $pk)) . ' FROM `' . $table . '`' . sh_where($table, $filters, $args) . ' LIMIT 1000');
    $s->execute($args);
    return $s->fetchAll();
}

function sh_fetch_key(PDO $pdo, string $table, array $key): ?array {
    $args = []; $f = [];
    foreach ($key as $c => $v) { $f[] = [$c, 'eq', $v]; }
    $s = $pdo->prepare('SELECT * FROM `' . $table . '`' . sh_where($table, $f, $args));
    $s->execute($args);
    $r = $s->fetch();
    return $r ? sh_out($table, $r) : null;
}

// Version history for undo/restore (was the my_items_log / progress_log triggers).
function sh_after_write(PDO $pdo, string $table, array $key, string $kind): void {
    $log = SH_TABLES[$table]['log'] ?? null;
    if (!$log) { return; }
    if ($log === 'items') {
        if ($kind === 'delete') {
            $pdo->prepare("INSERT INTO my_versions (user_id, `key`, content, source, created_at) VALUES (?, ?, NULL, 'reset', UTC_TIMESTAMP(3))")->execute([$key['user_id'], $key['key']]);
            return;
        }
        $r = sh_fetch_key($pdo, 'my_items', $key);
        if (!$r) { return; }
        $pdo->prepare('INSERT INTO my_versions (user_id, `key`, content, source, created_at) VALUES (?, ?, ?, ?, UTC_TIMESTAMP(3))')
            ->execute([$r['user_id'], $r['key'], json_encode($r['content'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $r['source']]);
        // keep the newest 200 versions per item
        $s = $pdo->prepare('SELECT id FROM my_versions WHERE user_id = ? AND `key` = ? ORDER BY id DESC LIMIT 1 OFFSET 199');
        $s->execute([$r['user_id'], $r['key']]);
        $cut = $s->fetchColumn();
        if ($cut) { $pdo->prepare('DELETE FROM my_versions WHERE user_id = ? AND `key` = ? AND id < ?')->execute([$r['user_id'], $r['key'], $cut]); }
        return;
    }
    // progress
    $vk = 'progress:' . $key['page'];
    if ($kind === 'delete') {
        $pdo->prepare("INSERT INTO my_versions (user_id, `key`, content, source, created_at) VALUES (?, ?, NULL, 'reset', UTC_TIMESTAMP(3))")->execute([$key['user_id'], $vk]);
        return;
    }
    $r = sh_fetch_key($pdo, 'progress', $key);
    if (!$r) { return; }
    $pdo->prepare("INSERT INTO my_versions (user_id, `key`, content, source, created_at) VALUES (?, ?, ?, 'site', UTC_TIMESTAMP(3))")
        ->execute([$r['user_id'], $vk, json_encode(['done' => $r['done'], 'rating' => $r['rating'], 'note' => $r['note']], JSON_UNESCAPED_UNICODE)]);
}

function sh_suggestion_limit(PDO $pdo, array $u): void {
    $s = $pdo->prepare('SELECT COUNT(*) FROM suggestions WHERE user_id = ? AND created_at > UTC_TIMESTAMP(3) - INTERVAL 1 DAY');
    $s->execute([$u['id']]);
    if ((int)$s->fetchColumn() >= 20) { throw new ShError('Daily limit reached (20 suggestions). Thank you! Please try again tomorrow.'); }
}

// ---------------------------------------------------------------- the old database functions
function sh_rpc(PDO $pdo, ?array $u, string $name, array $a) {
    $uid = $u['id'] ?? '';
    $author = "CASE WHEN x.anonymous = 1 OR p.nickname IS NULL THEN 'anonymous' ELSE p.nickname END";
    switch ($name) {
        case 'forum_threads_list': {
            $args = [$uid]; $where = '';
            if (($a['p_topic'] ?? null) !== null) { $where = ' WHERE x.topic = ?'; $args[] = (string)$a['p_topic']; }
            $s = $pdo->prepare("SELECT x.id, x.topic, x.title, x.body, x.created_at, $author AS author, (x.user_id = ?) AS mine,
                (SELECT COUNT(*) FROM forum_posts r WHERE r.thread_id = x.id) AS replies
                FROM forum_threads x LEFT JOIN profiles p ON p.id = x.user_id$where ORDER BY x.created_at DESC LIMIT 200");
            $s->execute($args);
            return array_map(fn($r) => ['id' => (int)$r['id'], 'topic' => $r['topic'], 'title' => $r['title'], 'body' => $r['body'],
                'created_at' => sh_ts_out($r['created_at']), 'author' => $r['author'], 'mine' => (bool)$r['mine'], 'replies' => (int)$r['replies']], $s->fetchAll());
        }
        case 'forum_posts_list': {
            $s = $pdo->prepare("SELECT x.id, x.thread_id, x.body, x.created_at, $author AS author, (x.user_id = ?) AS mine
                FROM forum_posts x LEFT JOIN profiles p ON p.id = x.user_id WHERE x.thread_id = ? ORDER BY x.created_at");
            $s->execute([$uid, (int)($a['p_thread'] ?? 0)]);
            return array_map(fn($r) => ['id' => (int)$r['id'], 'thread_id' => (int)$r['thread_id'], 'body' => $r['body'],
                'created_at' => sh_ts_out($r['created_at']), 'author' => $r['author'], 'mine' => (bool)$r['mine']], $s->fetchAll());
        }
        case 'leaderboard_list': {
            $s = $pdo->query("SELECT p.nickname, SUM(g.done = 1) AS pages_done,
                COUNT(DISTINCT CASE WHEN g.updated_at > UTC_TIMESTAMP(3) - INTERVAL 30 DAY THEN DATE(g.updated_at) END) AS active_days_30
                FROM profiles p JOIN progress g ON g.user_id = p.id
                WHERE p.leaderboard = 1 AND p.nickname IS NOT NULL GROUP BY p.nickname ORDER BY 3 DESC, 2 DESC LIMIT 100");
            return array_map(fn($r) => ['nickname' => $r['nickname'], 'pages_done' => (int)$r['pages_done'], 'active_days_30' => (int)$r['active_days_30']], $s->fetchAll());
        }
        case 'dive_leaderboard': {
            $s = $pdo->prepare('SELECT p.nickname, b.depth, b.answers, b.created_at FROM (
                    SELECT r.user_id, r.depth, r.answers, r.created_at,
                           ROW_NUMBER() OVER (PARTITION BY r.user_id ORDER BY r.depth DESC, r.created_at ASC) AS rn
                    FROM dive_runs r WHERE r.subject = ? AND r.timer = ?) b
                JOIN profiles p ON p.id = b.user_id
                WHERE b.rn = 1 AND p.leaderboard = 1 AND p.nickname IS NOT NULL
                ORDER BY b.depth DESC, b.created_at ASC LIMIT 20');
            $s->execute([(string)($a['p_subject'] ?? ''), (int)($a['p_timer'] ?? 0)]);
            return array_map(fn($r) => ['nickname' => $r['nickname'], 'depth' => (int)$r['depth'], 'answers' => (int)$r['answers'], 'reached_at' => sh_ts_out($r['created_at'])], $s->fetchAll());
        }
    }
    if (!$u) { throw new ShError('Please sign in first.'); }
    switch ($name) {
        case 'is_admin': return sh_is_admin($pdo, $u);
        case 'delete_my_data': sh_delete_user($pdo, $uid); return null;
        case 'my_restore_version': {
            $s = $pdo->prepare('SELECT * FROM my_versions WHERE id = ? AND user_id = ?');
            $s->execute([(int)($a['p_id'] ?? 0), $uid]);
            $v = $s->fetch();
            if (!$v) { throw new ShError('version not found'); }
            $content = $v['content'] === null ? null : json_decode($v['content'], true);
            if (strncmp($v['key'], 'progress:', 9) === 0) {
                $page = substr($v['key'], 9);
                if ($content === null) { return sh_run($pdo, $u, ['t' => 'progress', 'op' => 'delete', 'f' => [['page', 'eq', $page]]]); }
                return sh_run($pdo, $u, ['t' => 'progress', 'op' => 'upsert', 'v' => ['page' => $page, 'done' => (bool)($content['done'] ?? false),
                    'rating' => $content['rating'] ?? null, 'note' => $content['note'] ?? null, 'updated_at' => 'now']]);
            }
            if ($content === null) { return sh_run($pdo, $u, ['t' => 'my_items', 'op' => 'delete', 'f' => [['key', 'eq', $v['key']]]]); }
            return sh_run($pdo, $u, ['t' => 'my_items', 'op' => 'upsert', 'v' => ['key' => $v['key'], 'content' => $content, 'source' => 'restore', 'updated_at' => 'now']]);
        }
        case 'suggestions_admin_list': {
            if (!sh_is_admin($pdo, $u)) { return []; }
            $args = []; $where = '';
            if (($a['p_status'] ?? null) !== null) { $where = ' WHERE x.status = ?'; $args[] = (string)$a['p_status']; }
            $s = $pdo->prepare("SELECT x.id, x.page, x.section, x.quote, x.kind, x.body, x.reason, $author AS author, x.status, x.review_note, x.created_at, x.reviewed_at
                FROM suggestions x LEFT JOIN profiles p ON p.id = x.user_id$where ORDER BY x.created_at DESC LIMIT 500");
            $s->execute($args);
            return array_map(function ($r) { $r['id'] = (int)$r['id']; $r['created_at'] = sh_ts_out($r['created_at']); $r['reviewed_at'] = sh_ts_out($r['reviewed_at']); return $r; }, $s->fetchAll());
        }
        case 'suggestions_admin_set': {
            if (!sh_is_admin($pdo, $u)) { throw new ShError('Only admins can review suggestions.'); }
            $st = (string)($a['p_status'] ?? '');
            if (!in_array($st, ['new', 'accepted', 'rejected', 'done'], true)) { throw new ShError('Unknown status.'); }
            $note = isset($a['p_note']) ? mb_substr((string)$a['p_note'], 0, 2000) : null;
            $pdo->prepare('UPDATE suggestions SET status = ?, review_note = ?, reviewed_at = UTC_TIMESTAMP(3) WHERE id = ?')->execute([$st, $note, (int)($a['p_id'] ?? 0)]);
            return null;
        }
    }
    throw new ShError('Unknown function.');
}

// Removes everything a person has (used by "Delete my account" and the 2-year clean-up).
function sh_delete_user(PDO $pdo, string $uid): void {
    $pdo->prepare('DELETE FROM forum_posts WHERE thread_id IN (SELECT id FROM forum_threads WHERE user_id = ?)')->execute([$uid]);
    foreach (SH_TABLES as $name => $t) {
        if ($name === 'admins') { continue; }
        $pdo->prepare('DELETE FROM `' . $name . '` WHERE `' . $t['own'] . '` = ?')->execute([$uid]);
    }
}
