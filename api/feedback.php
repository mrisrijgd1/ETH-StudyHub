<?php
// StudyHub feedback form (replaces the old Google Form). Runs on the Infomaniak Web Hosting.
// What it does with a message:
//   1. saves it to a private file OUTSIDE the public website folder (studyhub-data/feedback/ in the hosting home), and
//   2. e-mails it to contact@study-hub.ch, so the team sees it in the shared inbox.
// Nothing is sent to any other service. No cookies. The IP address is only used, hashed, to stop floods
// (at most 5 messages per hour) and is never stored in plain form.
// The form itself is feedback.html (and de/feedback.html).

declare(strict_types=1);

const TO      = 'contact@study-hub.ch';
const FROM    = 'StudyHub feedback <noreply@study-hub.ch>';
const MAX_LEN = 4000;
const PER_HOUR = 5;

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

// Where private data lives: <home>/studyhub-data/feedback (home = three folders up from sites/study-hub.ch/api).
function data_dir(): ?string {
    $candidates = [dirname(__DIR__, 3) . '/studyhub-data/feedback', dirname(__DIR__) . '/_private/feedback'];
    foreach ($candidates as $dir) {
        if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
        if (is_dir($dir) && is_writable($dir)) {
            if (strpos($dir, '/_private/') !== false && !is_file(dirname($dir) . '/.htaccess')) {
                @file_put_contents(dirname($dir) . '/.htaccess', "Require all denied\n");   // never served
            }
            return $dir;
        }
    }
    return null;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /feedback.html', true, 303);
    exit;
}

$lang = (($_POST['lang'] ?? '') === 'de') ? 'de' : 'en';

// Bots fill the hidden "website" field; people never see it.
if (trim((string)($_POST['website'] ?? '')) !== '') { back($lang, 'sent'); }

$kinds   = ['idea' => 'Idea', 'mistake' => 'Something is wrong', 'question' => 'Question', 'other' => 'Other'];
$kindKey = (string)($_POST['kind'] ?? 'other');
$kind    = $kinds[$kindKey] ?? 'Other';
$message = trim(str_replace("\r\n", "\n", (string)($_POST['message'] ?? '')));
$message = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $message) ?? '';
$page    = one_line((string)($_POST['page'] ?? ''), 200);
$email   = one_line((string)($_POST['email'] ?? ''), 200);

if ($message === '' ) { back($lang, 'empty'); }
if (mb_strlen($message) > MAX_LEN) { $message = mb_substr($message, 0, MAX_LEN); }
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) { $email = ''; }
if ($page !== '' && !preg_match('~^/[A-Za-z0-9_./%#?=&-]*$~', $page)) { $page = ''; }

$dir = data_dir();

// Flood limit: hashed IP, counted per hour, kept only in a small file that is overwritten.
if ($dir !== null) {
    $ipHash = substr(hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . date('Y-m-d-H') . '|studyhub'), 0, 16);
    $limitFile = $dir . '/.limit-' . date('Y-m-d-H') . '.json';
    $counts = is_file($limitFile) ? (json_decode((string)@file_get_contents($limitFile), true) ?: []) : [];
    $counts[$ipHash] = ($counts[$ipHash] ?? 0) + 1;
    if ($counts[$ipHash] > PER_HOUR) { back($lang, 'limit'); }
    @file_put_contents($limitFile, json_encode($counts), LOCK_EX);
    foreach (glob($dir . '/.limit-*.json') ?: [] as $old) {   // tidy up older hours
        if ($old !== $limitFile) { @unlink($old); }
    }
}

$entry = [
    'time'    => gmdate('c'),
    'kind'    => $kind,
    'page'    => $page,
    'lang'    => $lang,
    'email'   => $email,
    'message' => $message,
];

$saved = false;
if ($dir !== null) {
    $saved = @file_put_contents($dir . '/' . gmdate('Y-m') . '.jsonl',
        json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n", FILE_APPEND | LOCK_EX) !== false;
}

$subject = 'StudyHub feedback: ' . $kind . ($page !== '' ? ' (' . one_line($page, 60) . ')' : '');
$body = "Kind: $kind\nPage: " . ($page ?: '-') . "\nLanguage: $lang\nReply to: " . ($email ?: '(no address given)') .
        "\nTime (UTC): {$entry['time']}\n\n$message\n";
$headers = [
    'From: ' . FROM,
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];
if ($email !== '') { $headers[] = 'Reply-To: ' . $email; }
$mailed = @mail(TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

back($lang, ($saved || $mailed) ? 'sent' : 'error');
