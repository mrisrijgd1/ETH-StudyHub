<?php
// The student's side of a feedback conversation (page: feedback-chat.html#<token>).
// POST JSON {"token": "...", "action": "get"}                 -> the conversation
// POST JSON {"token": "...", "action": "send", "message": ""} -> adds the student's answer, tells the team
// POST JSON {"token": "...", "action": "delete"}              -> deletes the whole conversation for good
// No login, no cookies: the private token is the only key, and it opens only its own conversation.
declare(strict_types=1);
ini_set('display_errors', '0');
require_once __DIR__ . '/lib/feedback-lib.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('Referrer-Policy: no-referrer');

function out($data, ?string $err = null, int $code = 200): void {
    http_response_code($code);
    echo json_encode(['data' => $data, 'error' => $err], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { out(null, 'Use POST.', 405); }
$q = json_decode((string)file_get_contents('php://input', false, null, 0, 64000), true);
if (!is_array($q)) { out(null, 'Bad request.', 400); }

try {
    $pdo = sh_pdo();
    $t = fb_thread_by_token($pdo, (string)($q['token'] ?? ''));
    if (!$t) { out(null, 'notfound', 404); }
    $action = (string)($q['action'] ?? 'get');
    if ($action === 'send') {
        $msg = fb_clean_text((string)($q['message'] ?? ''));
        if ($msg === '') { out(null, 'empty', 400); }
        if (!fb_rate_ok()) { out(null, 'limit', 429); }
        fb_add($pdo, (int)$t['id'], 'student', $msg);
        fb_mail(FB_TEAM, 'StudyHub feedback: new answer from a student',
            "A student answered in a feedback conversation.\n\n$msg\n\nReply on the site:\n" . FB_SITE . "/account.html#my-feedback\n");
    } elseif ($action === 'delete') {
        $pdo->prepare('DELETE FROM fb_messages WHERE thread_id = ?')->execute([(int)$t['id']]);
        $pdo->prepare('DELETE FROM fb_threads WHERE id = ?')->execute([(int)$t['id']]);
        out(['deleted' => true]);
    } elseif ($action !== 'get') {
        out(null, 'Bad request.', 400);
    }
    out(['kind' => $t['kind'], 'status' => $t['status'], 'email' => !empty($t['email']), 'messages' => fb_messages($pdo, (int)$t['id'])]);
} catch (Throwable $e) {
    error_log('studyhub feedback-chat: ' . $e->getMessage());
    out(null, 'error', 500);
}
