<?php
// StudyHub feedback form (replaces the old Google Form). Runs on the Infomaniak Web Hosting.
// What it does with a message:
//   1. starts a private conversation in the StudyHub database (Infomaniak MariaDB, see lib/feedback-lib.php) and
//      sends the student to their private link (feedback-chat.html#<token>), where the team's reply appears;
//      if the database is not reachable, the message is saved to a private file outside the website instead;
//   2. e-mails it to contact@study-hub.ch through the mailbox's own SMTP login.
// Nothing is sent to any other service. No cookies. The IP address is only used, hashed, to stop floods
// (at most 5 messages per hour) and is never stored in plain form.
// The form itself is feedback.html (and de/feedback.html).

declare(strict_types=1);

ini_set('display_errors', '0');   // never show server paths to visitors
require_once __DIR__ . '/lib/feedback-lib.php';

function back(string $lang, string $status): void {
    $page = ($lang === 'de' ? '/de/feedback.html' : '/feedback.html');
    header('Location: ' . $page . '?status=' . rawurlencode($status), true, 303);
    exit;
}

function one_line(string $s, int $max): string {
    $s = preg_replace('/[\r\n\t]+/', ' ', $s) ?? '';
    $s = trim(preg_replace('/[\x00-\x1F\x7F]/u', '', $s) ?? '');
    return mb_substr($s, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /feedback.html', true, 303);
    exit;
}

$lang = (($_POST['lang'] ?? '') === 'de') ? 'de' : 'en';

// Bots fill the hidden "website" field; people never see it.
if (trim((string)($_POST['website'] ?? '')) !== '') { back($lang, 'sent'); }

$kindKey = (string)($_POST['kind'] ?? 'other');
$kind    = FB_KINDS[$kindKey] ?? 'Other';
$message = fb_clean_text((string)($_POST['message'] ?? ''));
$page    = one_line((string)($_POST['page'] ?? ''), 200);
$email   = one_line((string)($_POST['email'] ?? ''), 200);

if ($message === '') { back($lang, 'empty'); }
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) { $email = ''; }
if ($page !== '' && !preg_match('~^/[A-Za-z0-9_./%#?=&-]*$~', $page)) { $page = ''; }

if (!fb_rate_ok()) { back($lang, 'limit'); }

$time  = gmdate('c');
$token = null;
try {
    $token = fb_create(sh_pdo(), $kind, $page, $lang, $email, $message);
} catch (Throwable $e) {
    error_log('studyhub feedback: ' . $e->getMessage());
}

$saved = $token !== null;
if (!$saved) {   // fallback: private file outside the website folder
    $dir = sh_data_dir('feedback');
    $entry = ['time' => $time, 'kind' => $kind, 'page' => $page, 'lang' => $lang, 'email' => $email, 'message' => $message];
    $saved = is_dir($dir) && @file_put_contents($dir . '/' . gmdate('Y-m') . '.jsonl',
        json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n", FILE_APPEND | LOCK_EX) !== false;
}

$subject = 'StudyHub feedback: ' . $kind . ($page !== '' ? ' (' . one_line($page, 60) . ')' : '');
$body = "Kind: $kind\nPage: " . ($page ?: '-') . "\nLanguage: $lang\nE-mail: " . ($email ?: '(none, anonymous)') .
        "\nTime (UTC): $time\n\n$message\n\n" .
        ($token !== null ? "Reply on the site (the student sees it on their private link):\n" . FB_SITE . "/account.html#my-feedback\n" .
                           ($email !== '' ? '' : "Please do not reply by e-mail: there is no address. Use the link above.\n") : '');
$mailed = fb_mail(FB_TEAM, $subject, $body, '');

if ($token !== null) {
    header('Location: /feedback-chat.html?new=1#' . $token, true, 303);
    exit;
}
back($lang, ($saved || $mailed) ? 'sent' : 'error');
