<?php
// Exam Dive question bank for signed-in students (replaces the private Supabase bucket "dive").
// The bank is copied by the library repo's sync workflow to studyhub-data/dive/ (outside the website).
//   POST (Authorization: Bearer <login token>)  -> {"questions": [...]} with figure links signed for 6 hours
//   GET ?fig=<path>&exp=<unix time>&sig=<hmac>  -> one figure image (images can't send a login header)
declare(strict_types=1);
ini_set('display_errors', '0');
require_once __DIR__ . '/lib/shdb.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://study-hub.ch', 'https://www.study-hub.ch'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin); header('Vary: Origin');
    header('Access-Control-Allow-Headers: Authorization, Content-Type'); header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }

function dive_dir(): string { return sh_home() . '/studyhub-data/dive'; }
function dive_secret(): string {   // random key made once on the server, used only to sign figure links
    $f = sh_data_dir('cache') . '/dive-link-key';
    if (!is_file($f)) { @file_put_contents($f, bin2hex(random_bytes(32)), LOCK_EX); @chmod($f, 0600); }
    return (string)file_get_contents($f);
}
function dive_fail(int $code, string $msg): void { http_response_code($code); header('Content-Type: application/json'); echo json_encode(['error' => $msg]); exit; }

if (isset($_GET['fig'])) {
    $path = (string)$_GET['fig']; $exp = (int)($_GET['exp'] ?? 0);
    if (!preg_match('~^[A-Za-z0-9_./-]{1,200}$~', $path) || strpos($path, '..') !== false || $exp < time()) { dive_fail(403, 'Link expired.'); }
    if (!hash_equals(hash_hmac('sha256', "$path|$exp", dive_secret()), (string)($_GET['sig'] ?? ''))) { dive_fail(403, 'Bad link.'); }
    $f = dive_dir() . '/' . $path;
    if (!is_file($f)) { dive_fail(404, 'Not found.'); }
    $types = ['png' => 'image/png', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'svg' => 'image/svg+xml', 'webp' => 'image/webp', 'gif' => 'image/gif'];
    $ext = strtolower(pathinfo($f, PATHINFO_EXTENSION));
    if (!isset($types[$ext])) { dive_fail(403, 'Not an image.'); }
    header('Content-Type: ' . $types[$ext]); header('Cache-Control: private, max-age=3600'); header('X-Content-Type-Options: nosniff');
    if ($ext === 'svg') { header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'"); }
    readfile($f); exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { dive_fail(405, 'Use POST.'); }
header('Content-Type: application/json; charset=utf-8'); header('Cache-Control: no-store');
$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
$token = stripos($auth, 'bearer ') === 0 ? trim(substr($auth, 7)) : '';
if ($token === '' || !sh_user_from_token($token)) { dive_fail(401, 'Please sign in.'); }

$index = json_decode((string)@file_get_contents(dive_dir() . '/index.json'), true);
if (!is_array($index)) { dive_fail(503, 'The question bank is not available yet.'); }
$all = [];
foreach ((array_is_list($index) ? $index : ($index['files'] ?? [])) as $f) {
    $name = is_string($f) ? $f : ($f['file'] ?? '');
    if (!preg_match('~^[A-Za-z0-9_.-]+\.json$~', $name)) { continue; }
    $data = json_decode((string)@file_get_contents(dive_dir() . '/' . $name), true);
    if (!is_array($data)) { continue; }
    foreach ((array_is_list($data) ? $data : ($data['questions'] ?? [])) as $q) { $all[] = $q; }
}
$exp = time() + 6 * 3600;
foreach ($all as &$q) {
    $fig = $q['figure'] ?? null;
    if (is_string($fig) && $fig !== '' && !preg_match('~^[a-z]+:~i', $fig)) {
        $q['figure'] = 'https://study-hub.ch/api/dive-bank.php?fig=' . rawurlencode($fig) . "&exp=$exp&sig=" . hash_hmac('sha256', "$fig|$exp", dive_secret());
    }
}
unset($q);
echo json_encode(['questions' => $all], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
