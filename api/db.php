<?php
// StudyHub data API: one POST per database call from assets/shdb.js or the AI connector.
// Login check: "Authorization: Bearer <Supabase access token>". See lib/query.php for the rules.
declare(strict_types=1);
ini_set('display_errors', '0');
require_once __DIR__ . '/lib/query.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://study-hub.ch', 'https://www.study-hub.ch'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Headers: Authorization, Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply($data, ?string $err = null, int $code = 200): void {
    http_response_code($code);
    echo json_encode(['data' => $data, 'error' => $err === null ? null : ['message' => $err]], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { reply(null, 'Use POST.', 405); }
$raw = file_get_contents('php://input', false, null, 0, 2_000_000);
$q = json_decode((string)$raw, true);
if (!is_array($q)) { reply(null, 'Bad request.', 400); }

try {
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    $token = stripos($auth, 'bearer ') === 0 ? trim(substr($auth, 7)) : '';
    $user = $token !== '' ? sh_user_from_token($token) : null;
    if ($token !== '' && !$user) { reply(null, 'Your login has expired. Please sign in again.', 401); }
    $pdo = sh_pdo();
    if ($user) { sh_touch_user($pdo, $user); }
    $pdo->beginTransaction();
    $out = sh_run($pdo, $user, $q);
    $pdo->commit();
    reply($out);
} catch (ShError $e) {
    if (isset($pdo) && $pdo->inTransaction()) { $pdo->rollBack(); }
    reply(null, $e->getMessage(), 400);
} catch (PDOException $e) {
    if (isset($pdo) && $pdo->inTransaction()) { $pdo->rollBack(); }
    $msg = $e->getCode() === '23000' ? 'That is already taken (or already exists).' : 'Database error.';
    error_log('studyhub db: ' . $e->getMessage());
    reply(null, $msg, 400);
} catch (Throwable $e) {
    error_log('studyhub db: ' . $e->getMessage());
    reply(null, 'Server error.', 500);
}
