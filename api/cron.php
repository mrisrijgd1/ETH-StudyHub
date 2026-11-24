<?php
// Nightly housekeeping on the Infomaniak server. Command line only:
//     php sites/study-hub.ch/api/cron.php
// 1. Privacy rule: people who have not used StudyHub for 2 years lose all their data (admins are kept).
//    "Used" = any signed-in visit or connector call (users.last_seen is updated on every request).
// 2. Backup: a full copy of the database into studyhub-data/backups/ (outside the website), kept 30 days.
//    Everything stays on the server; nothing goes to GitHub or anywhere else.
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__ . '/lib/shdb.php';
require __DIR__ . '/lib/query.php';

$pdo = sh_pdo();
// Data minimisation: the e-mail address stays with the login service only (older rows had a copy).
$pdo->exec('UPDATE users SET email = NULL WHERE email IS NOT NULL');
// Short-lived login cache (2 min): remove anything older than 10 min.
foreach (glob(sh_data_dir('cache') . '/*.json') ?: [] as $f) { if (filemtime($f) < time() - 600) { @unlink($f); } }

// 1. Two-year clean-up
$old = $pdo->query("SELECT id FROM users WHERE COALESCE(last_seen, created_at) < UTC_TIMESTAMP(3) - INTERVAL 2 YEAR
                    AND id NOT IN (SELECT user_id FROM admins)")->fetchAll(PDO::FETCH_COLUMN);
foreach ($old as $uid) {
    $pdo->beginTransaction();
    sh_delete_user($pdo, (string)$uid);
    $pdo->prepare('DELETE FROM users WHERE id = ?')->execute([$uid]);
    $pdo->commit();
}
echo 'Inactive for 2 years, deleted: ' . count($old) . "\n";

// 2. Backup
$dir = sh_data_dir('backups');
$out = ['created_utc' => gmdate('c'), 'source' => 'infomaniak-mariadb', 'tables' => []];
foreach (array_keys(SH_TABLES) as $table) {
    $out['tables'][$table] = array_map(fn($r) => sh_out($table, $r), $pdo->query("SELECT * FROM `$table`")->fetchAll(PDO::FETCH_ASSOC));
}
$name = $dir . '/studyhub-db-' . gmdate('Y-m-d') . '.json.gz';
file_put_contents($name, gzencode(json_encode($out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), 9), LOCK_EX);
@chmod($name, 0600);
foreach (glob($dir . '/studyhub-*.json.gz') ?: [] as $f) {
    if (filemtime($f) < time() - 30 * 86400) { @unlink($f); }
}
echo 'Backup: ' . basename($name) . ' (' . filesize($name) . " bytes)\n";
foreach ($out['tables'] as $t => $rows) { echo str_pad($t, 15) . ' ' . count($rows) . "\n"; }
