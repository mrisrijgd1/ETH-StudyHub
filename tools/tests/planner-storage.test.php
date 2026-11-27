<?php
// Study planner storage rules (api/lib/shdb.php + query.php), run against an in-memory SQLite copy of
// the my_items / my_versions tables:  php tools/tests/planner-storage.test.php
// Checks: the planner keys are allowed, nothing is written without the storage consent, other students
// (admins included) cannot read the rows, and deleting planner_profile removes all planner data.
declare(strict_types=1);
require_once __DIR__ . '/../../api/lib/query.php';

$pdo = new PDO('sqlite::memory:', null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
$pdo->sqliteCreateFunction('UTC_TIMESTAMP', fn($p = null) => gmdate('Y-m-d H:i:s'), -1);
$pdo->exec('CREATE TABLE my_items (user_id TEXT, `key` TEXT, content TEXT, source TEXT, updated_at TEXT, PRIMARY KEY (user_id, `key`))');
$pdo->exec('CREATE TABLE my_versions (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT, `key` TEXT, content TEXT, source TEXT, created_at TEXT)');
$pdo->exec('CREATE TABLE admins (user_id TEXT PRIMARY KEY)');

$a = ['id' => '11111111-1111-4111-8111-111111111111'];
$b = ['id' => '22222222-2222-4222-8222-222222222222'];
$pdo->prepare('INSERT INTO admins (user_id) VALUES (?)')->execute([$b['id']]);   // B is an admin

$fails = 0; $n = 0;
function check(string $name, bool $ok): void { global $fails, $n; $n++; if (!$ok) { $fails++; } echo ($ok ? 'ok   ' : 'FAIL ') . $name . "\n"; }
function refused(callable $f): bool { try { $f(); return false; } catch (ShError $e) { return true; } }
$put = fn(array $u, string $key, $content) => sh_run($pdo, $u, ['t' => 'my_items', 'op' => 'upsert', 'v' => ['key' => $key, 'content' => $content]]);
$get = fn(array $u, string $key) => sh_run($pdo, $u, ['t' => 'my_items', 'cols' => 'key,content', 'f' => [['key', 'eq', $key]], 'one' => 'maybe']);
$count = function (string $table, string $uid) use ($pdo): int {
    $s = $pdo->prepare("SELECT COUNT(*) FROM $table WHERE user_id = ? AND `key` LIKE 'planner_%'"); $s->execute([$uid]); return (int)$s->fetchColumn();
};
$consent = ['consent' => ['storage' => true, 'version' => 'v1', 'at' => '2026-11-27T08:00:00Z'], 'programme' => 'physics'];

check('no consent: planner_plan refused', refused(fn() => $put($a, 'planner_plan', ['days' => []])));
check('no consent: planner_profile without consent refused', refused(fn() => $put($a, 'planner_profile', ['programme' => 'physics'])));
check('no consent: consent "true" as a string refused', refused(fn() => $put($a, 'planner_profile', ['consent' => ['storage' => 'true']])));
check('no consent: research consent refused', refused(fn() => $put($a, 'planner_research_consent', ['plan_use' => true])));
check('nothing was stored', $count('my_items', $a['id']) === 0);

$put($a, 'planner_profile', $consent);
check('with consent: planner_profile stored', ($get($a, 'planner_profile')['content']['consent']['storage'] ?? null) === true);
foreach (['planner_plan', 'planner_checkins', 'planner_research_consent', 'planner_calendar'] as $k) {
    $put($a, $k, ['v' => 1]);
    check("with consent: $k stored", ($get($a, $k)['content']['v'] ?? null) === 1);
}
check('update op is checked too (profile without consent refused)', refused(fn() =>
    sh_run($pdo, $a, ['t' => 'my_items', 'op' => 'update', 'v' => ['content' => ['consent' => ['storage' => false]]], 'f' => [['key', 'eq', 'planner_profile']]])));
check('unknown planner key refused', refused(fn() => $put($a, 'planner_secret', ['x' => 1])));
check('other keys work as before', ($put($a, 'notes', ['t' => 'hi']) ?? true) && ($get($a, 'notes')['content']['t'] ?? null) === 'hi');

check('another student (an admin) cannot read the plan', $get($b, 'planner_plan') === null);
check('another student (an admin) sees none of the planner rows', sh_run($pdo, $b, ['t' => 'my_items', 'cols' => 'key', 'f' => [['key', 'in', SH_PLANNER_KEYS]]]) === []);
check('another student cannot write into the plan without their own consent', refused(fn() => $put($b, 'planner_plan', ['days' => ['x']])));
check('the plan is unchanged', ($get($a, 'planner_plan')['content']['v'] ?? null) === 1);
check('signed-out request refused', refused(fn() => sh_run($pdo, null, ['t' => 'my_items', 'cols' => 'key'])));

sh_run($pdo, $a, ['t' => 'my_items', 'op' => 'delete', 'f' => [['key', 'eq', 'planner_profile']]]);
check('withdrawing (deleting planner_profile) removes all planner rows', $count('my_items', $a['id']) === 0);
check('... and their version history', $count('my_versions', $a['id']) === 0);
check('... but not the other items', ($get($a, 'notes')['content']['t'] ?? null) === 'hi');
check('after withdrawing, writes are refused again', refused(fn() => $put($a, 'planner_plan', ['days' => []])));

echo "\n$n checks, $fails failed\n";
exit($fails ? 1 : 0);
