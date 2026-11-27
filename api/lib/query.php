<?php
// Runs one request from assets/shdb.js (the small stand-in for the Supabase client) against MariaDB.
// Request: {"t": table, "op": "select|insert|upsert|update|delete", "cols": "a,b", "f": [[col, op, value]],
//           "order": [[col, asc]], "limit": n, "one": "single|maybe", "v": row or [rows], "ret": true}
//      or  {"rpc": name, "a": {args}}
// Every request by a person is limited to their own rows (like the old row-level security).

declare(strict_types=1);
require_once __DIR__ . '/shdb.php';
require_once __DIR__ . '/feedback-lib.php';

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
                // Only the person's OWN row counts: a row with this key that belongs to someone else is never touched
                // (the insert below then fails as "already taken"), so nobody can overwrite or take over another person's row.
                $kf = [[$t['own'], 'eq', $u['id']]]; foreach ($t['pk'] as $p) { $kf[] = [$p, 'eq', $r[$p]]; }
                $exists = sh_keys($pdo, $table, $kf)[0] ?? null;
            }
            if ($exists && in_array($table, ['forum_threads', 'forum_posts', 'suggestions'], true)) { throw new ShError('Not allowed.'); }
            if ($table === 'my_items') { sh_planner_guard($pdo, $u['id'], (string)($r['key'] ?? ''), array_key_exists('content', $r), $r['content'] ?? null); }
            if ($exists) {
                $set = []; $vals = [];
                foreach ($r as $c => $v) { if (!in_array($c, $t['pk'], true)) { $set[] = "`$c` = ?"; $vals[] = sh_in($t['cols'][$c], $v); } }
                sh_check($table, $r);
                if ($set) {
                    $kv = [[$t['own'], 'eq', $u['id']]]; foreach ($t['pk'] as $p) { $kv[] = [$p, 'eq', $r[$p]]; }
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
        if ($table === 'my_items') {
            foreach ($keys as $k) { sh_planner_guard($pdo, $u['id'], (string)$k['key'], array_key_exists('content', $v), $v['content'] ?? null); }
        }
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
        if ($table === 'my_items' && in_array('planner_profile', array_column($keys, 'key'), true)) { sh_planner_withdraw($pdo, $u['id']); }
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
        case 'import_to_eduid': return sh_import_to_eduid($pdo, $u, (string)($a['p_target_token'] ?? ''));
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
        // ---- Feedback inbox (team only). Conversations are anonymous: the team sees no name, only the text.
        case 'feedback_admin_list': {
            if (!sh_is_admin($pdo, $u)) { return []; }
            fb_ready($pdo);
            $args = []; $where = '';
            if (in_array($a['p_status'] ?? null, ['open', 'done'], true)) { $where = ' WHERE t.status = ?'; $args[] = $a['p_status']; }
            $s = $pdo->prepare("SELECT t.id, t.kind, t.page, t.lang, (t.email IS NOT NULL) AS has_email, t.status, t.last_from, t.created_at, t.updated_at,
                    (SELECT COUNT(*) FROM fb_messages m WHERE m.thread_id = t.id) AS n
                FROM fb_threads t$where ORDER BY (t.status = 'open' AND t.last_from = 'student') DESC, t.updated_at DESC LIMIT 300");
            $s->execute($args);
            return array_map(function ($r) { return ['id' => (int)$r['id'], 'kind' => $r['kind'], 'page' => $r['page'], 'lang' => $r['lang'], 'has_email' => (bool)$r['has_email'],
                'status' => $r['status'], 'last_from' => $r['last_from'], 'n' => (int)$r['n'], 'created_at' => sh_ts_out($r['created_at']), 'updated_at' => sh_ts_out($r['updated_at'])]; }, $s->fetchAll());
        }
        case 'feedback_admin_thread': {
            if (!sh_is_admin($pdo, $u)) { throw new ShError('Only the team can read feedback.'); }
            fb_ready($pdo);
            return fb_messages($pdo, (int)($a['p_id'] ?? 0));
        }
        case 'feedback_admin_reply': {
            if (!sh_is_admin($pdo, $u)) { throw new ShError('Only the team can reply to feedback.'); }
            fb_ready($pdo);
            $msg = fb_clean_text((string)($a['p_message'] ?? ''));
            if ($msg === '') { throw new ShError('Please write a reply first.'); }
            $s = $pdo->prepare('SELECT * FROM fb_threads WHERE id = ?');
            $s->execute([(int)($a['p_id'] ?? 0)]);
            $t = $s->fetch();
            if (!$t) { throw new ShError('Conversation not found.'); }
            fb_add($pdo, (int)$t['id'], 'team', $msg);
            return ['emailed' => fb_notify_student($t)];
        }
        case 'feedback_admin_set': {
            if (!sh_is_admin($pdo, $u)) { throw new ShError('Only the team can change feedback.'); }
            fb_ready($pdo);
            $id = (int)($a['p_id'] ?? 0); $st = (string)($a['p_status'] ?? '');
            if ($st === 'delete') {
                $pdo->prepare('DELETE FROM fb_messages WHERE thread_id = ?')->execute([$id]);
                $pdo->prepare('DELETE FROM fb_threads WHERE id = ?')->execute([$id]);
                return null;
            }
            if (!in_array($st, ['open', 'done'], true)) { throw new ShError('Unknown status.'); }
            $pdo->prepare('UPDATE fb_threads SET status = ? WHERE id = ?')->execute([$st, $id]);
            return null;
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

// Move everything from an old Google login to the same student's new SWITCH edu-ID login.
// Called while signed in with the OLD Google login; p_target_token is the edu-ID login's access token,
// so only someone holding both logins can move data. Where both logins have a row for the same
// page/key, the newer one wins. Afterwards nothing is left under the old id, and the browser deletes
// the old Google login itself.
function sh_import_to_eduid(PDO $pdo, array $old, string $targetToken): array {
    $new = sh_user_from_token($targetToken);
    if (!$new) { throw new ShError('Your edu-ID login has expired. Please sign in with SWITCH edu-ID again.'); }
    if (($new['provider'] ?? '') !== 'custom:eduid') { throw new ShError('The target account is not a SWITCH edu-ID login.'); }
    if (($old['provider'] ?? '') === 'custom:eduid') { throw new ShError('This is already an edu-ID login.'); }
    $o = $old['id']; $n = $new['id'];
    if ($o === $n) { return ['moved' => 0, 'same' => true]; }
    sh_touch_user($pdo, $new);
    $moved = 0;
    $zero = "'1970-01-01'";
    $keyed = ['progress' => 'page', 'my_items' => 'key', 'item_state' => 'item_id', 'app_state' => 'app'];
    foreach ($keyed as $t => $k) {
        // 1. old rows that the new login already has in a newer (or equal) version: drop the old copy
        $pdo->prepare("DELETE x FROM `$t` x JOIN `$t` y ON y.`$k` = x.`$k` AND y.user_id = ?
                       WHERE x.user_id = ? AND COALESCE(y.updated_at, $zero) >= COALESCE(x.updated_at, $zero)")->execute([$n, $o]);
        // 2. new rows that are older than the old login's copy: drop the new copy
        $pdo->prepare("DELETE y FROM `$t` y JOIN `$t` x ON x.`$k` = y.`$k` AND x.user_id = ? WHERE y.user_id = ?")->execute([$o, $n]);
        // 3. move the rest
        $s = $pdo->prepare("UPDATE `$t` SET user_id = ? WHERE user_id = ?"); $s->execute([$n, $o]); $moved += $s->rowCount();
    }
    // Profile (nickname, leaderboard): keep the new one if it exists, else move the old one.
    $s = $pdo->prepare('SELECT 1 FROM profiles WHERE id = ?'); $s->execute([$n]);
    if ($s->fetchColumn()) { $pdo->prepare('DELETE FROM profiles WHERE id = ?')->execute([$o]); }
    else { $s = $pdo->prepare('UPDATE profiles SET id = ? WHERE id = ?'); $s->execute([$n, $o]); $moved += $s->rowCount(); }
    // Rows with their own ids: just hand them over.
    foreach (['forum_threads', 'forum_posts', 'my_versions', 'attempts', 'results', 'mocks', 'suggestions', 'dive_runs'] as $t) {
        $s = $pdo->prepare("UPDATE `$t` SET user_id = ? WHERE user_id = ?"); $s->execute([$n, $o]); $moved += $s->rowCount();
    }
    // Team members keep their team rights.
    $s = $pdo->prepare('SELECT 1 FROM admins WHERE user_id = ?'); $s->execute([$o]);
    if ($s->fetchColumn()) { $pdo->prepare('INSERT IGNORE INTO admins (user_id) VALUES (?)')->execute([$n]); }
    sh_delete_user($pdo, $o);   // anything left under the old id (only duplicates by now)
    $pdo->prepare('DELETE FROM admins WHERE user_id = ?')->execute([$o]);
    return ['moved' => $moved, 'same' => false];
}
