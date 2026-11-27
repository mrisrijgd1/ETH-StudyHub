<?php
// Official PDFs (old exams, solutions, Lernblätter, course scripts) for signed-in ETH students only.
// GET api/doc.php?f=docs/<name>.pdf with "Authorization: Bearer <login token>".
// The files live outside the website in studyhub-data/library/site-official/ (copied there from the private
// library repo); there is no public URL for them. Allowed: SWITCH edu-ID logins (ETH only, checked by SWITCH)
// and team admins. Google logins and visitors without a login get nothing.
declare(strict_types=1);
ini_set('display_errors', '0');
require_once __DIR__ . '/lib/shdb.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://study-hub.ch', 'https://www.study-hub.ch'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Headers: Authorization, Range');
    header('Access-Control-Allow-Methods: GET, OPTIONS');
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
header('Cache-Control: private, no-store');
header('X-Robots-Tag: noindex, nofollow');
header('X-Content-Type-Options: nosniff');

function doc_fail(int $code, string $msg): void {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => ['message' => $msg]]);
    exit;
}

const DOC_PATH = '~^(docs/[a-z0-9-]+\.pdf|lernblatt/[a-z0-9-]+\.pdf|script\.pdf|phys-script\.pdf|linalg-script\.pdf)$~';

try {
    $f = (string)($_GET['f'] ?? '');
    if (!preg_match(DOC_PATH, $f)) { doc_fail(404, 'No such document.'); }
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    $token = stripos($auth, 'bearer ') === 0 ? trim(substr($auth, 7)) : '';
    $user = $token !== '' ? sh_user_from_token($token) : null;
    if (!$user) { doc_fail(401, 'Please sign in with SWITCH edu-ID to open official files.'); }
    if (($user['provider'] ?? '') !== 'custom:eduid' && !sh_is_admin(sh_pdo(), $user)) {
        doc_fail(403, 'Official files need the ETH login. Sign in with SWITCH edu-ID.');
    }
    $file = sh_data_dir('library') . '/site-official/' . $f;
    if (!is_file($file)) { doc_fail(404, 'This file is not on the server yet.'); }
    header('Content-Type: application/pdf');
    header('Content-Disposition: inline; filename="' . basename($f) . '"');
    header('Content-Length: ' . filesize($file));
    readfile($file);
} catch (Throwable $e) {
    error_log('studyhub doc: ' . $e->getMessage());
    doc_fail(500, 'Server error.');
}
