<?php
// One-time move of the account data from Supabase into our own database (MariaDB at Infomaniak).
// Command line only (blocked on the web by api/.htaccess and the check below):
//     php sites/study-hub.ch/api/import.php studyhub-data/backups/studyhub-YYYY-MM-DD.json.gz
// Reads a nightly backup file (made by .github/workflows/backup-to-infomaniak.yml), keeps the old ids,
// and never overwrites newer data: an existing row is only replaced when the backup's updated_at is newer.
// Safe to run twice (the second run only fills in what changed in between).
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__ . '/lib/shdb.php';

$file = $argv[1] ?? '';
if ($file === '' || !is_file($file)) { fwrite(STDERR, "Usage: php import.php <backup.json.gz>\n"); exit(1); }
$raw = (string)@file_get_contents('compress.zlib://' . $file);
$all = json_decode($raw, true);
if (!is_array($all) || !isset($all['tables'])) { fwrite(STDERR, "Not a StudyHub backup file.\n"); exit(1); }

$pdo = sh_pdo();
$pdo->beginTransaction();
$report = [];

// Login list -> users (used for "last seen", the 2-year rule). Never imports passwords (the backup has none).
$n = 0;
$st = $pdo->prepare('INSERT INTO users (id, email, last_seen, created_at) VALUES (?, ?, ?, ?)
                     ON DUPLICATE KEY UPDATE last_seen = GREATEST(COALESCE(last_seen, VALUES(last_seen)), VALUES(last_seen))');
foreach ($all['auth_users'] ?? [] as $u) {
    $seen = $u['last_sign_in_at'] ?? $u['created_at'] ?? 'now';
    $st->execute([sh_in('uuid', $u['id']), $u['email'] ?? null, sh_in('ts', $seen), sh_in('ts', $u['created_at'] ?? 'now')]);
    $n++;
}
$report['users'] = $n;

foreach ($all['tables'] as $table => $rows) {
    $t = SH_TABLES[$table] ?? null;
    if (!$t || !empty($t['internal'])) { $report[$table] = 'skipped (not used any more)'; continue; }
    $cols = $t['cols'];
    $dropped = [];
    $new = 0; $newer = 0; $kept = 0;
    foreach ($rows as $r) {
        $vals = [];
        foreach ($r as $c => $v) {
            if (!isset($cols[$c])) { $dropped[$c] = true; continue; }
            $vals[$c] = sh_in($cols[$c], $v);
        }
        $names = array_keys($vals);
        $sql = 'INSERT IGNORE INTO `' . $table . '` (' . implode(',', array_map(fn($c) => "`$c`", $names)) . ') VALUES (' . implode(',', array_fill(0, count($names), '?')) . ')';
        $ins = $pdo->prepare($sql);
        $ins->execute(array_values($vals));
        if ($ins->rowCount() > 0) { $new++; continue; }
        // Row already there: replace it only if the backup is newer (tables with updated_at).
        if (isset($vals['updated_at'])) {
            $where = implode(' AND ', array_map(fn($k) => "`$k` = ?", $t['pk']));
            $set = implode(',', array_map(fn($c) => "`$c` = ?", $names));
            $up = $pdo->prepare("UPDATE `$table` SET $set WHERE $where AND (updated_at IS NULL OR updated_at < ?)");
            $up->execute(array_merge(array_values($vals), array_map(fn($k) => $vals[$k], $t['pk']), [$vals['updated_at']]));
            if ($up->rowCount() > 0) { $newer++; continue; }
        }
        $kept++;
    }
    $report[$table] = "$new new, $newer updated, $kept already there" . ($dropped ? ' (ignored columns: ' . implode(', ', array_keys($dropped)) . ')' : '');
}
$pdo->commit();
foreach ($report as $k => $v) { echo str_pad($k, 15) . " $v\n"; }
