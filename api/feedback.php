<?php
// StudyHub feedback form (replaces the old Google Form). Runs on the Infomaniak Web Hosting.
// What it does with a message:
//   1. saves it to a private file OUTSIDE the public website folder (studyhub-data/feedback/ in the hosting home), and
//   2. e-mails it to contact@study-hub.ch through the mailbox's own SMTP login (see smtp_send below).
// Nothing is sent to any other service. No cookies. The IP address is only used, hashed, to stop floods
// (at most 5 messages per hour) and is never stored in plain form.
// The form itself is feedback.html (and de/feedback.html).

declare(strict_types=1);

ini_set('display_errors', '0');   // never show server paths to visitors

const TO      = 'contact@study-hub.ch';
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
// E-mail via Infomaniak SMTP. Infomaniak switches PHP mail() off, so we log in to the mailbox instead.
// The login lives ONLY on the server, outside the website folder, in <home>/studyhub-data/mail-config.php:
//   <?php return ['user' => 'contact@study-hub.ch', 'pass' => '...'];
// (created by hand in the Infomaniak File Manager; never in GitHub). Without that file, nothing is mailed.
function smtp_send(array $cfg, string $to, string $subject, string $body, string $replyTo): bool {
    $host = $cfg['host'] ?? 'mail.infomaniak.com';
    $fp = @stream_socket_client('ssl://' . $host . ':465', $errno, $errstr, 10);
    if (!$fp) { return false; }
    stream_set_timeout($fp, 10);
    $read = function () use ($fp): string {
        $out = '';
        while (($line = fgets($fp, 515)) !== false) { $out .= $line; if (isset($line[3]) && $line[3] === ' ') { break; } }
        return $out;
    };
    $cmd = function (string $c, string $expect) use ($fp, $read): bool {
        fwrite($fp, $c . "\r\n");
        return strncmp($read(), $expect, 3) === 0;
    };
    $user = (string)$cfg['user'];
    $ok = strncmp($read(), '220', 3) === 0
        && $cmd('EHLO study-hub.ch', '250')
        && $cmd('AUTH LOGIN', '334')
        && $cmd(base64_encode($user), '334')
        && $cmd(base64_encode((string)$cfg['pass']), '235')
        && $cmd('MAIL FROM:<' . $user . '>', '250')
        && $cmd('RCPT TO:<' . $to . '>', '250')
        && $cmd('DATA', '354');
    if ($ok) {
        $headers = 'From: StudyHub feedback <' . $user . ">\r\n" .
                   'To: <' . $to . ">\r\n" .
                   ($replyTo !== '' ? 'Reply-To: <' . $replyTo . ">\r\n" : '') .
                   'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n" .
                   'Date: ' . date('r') . "\r\n" .
                   "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n";
        $ok = $cmd($headers . "\r\n" . chunk_split(base64_encode($body)) . '.', '250');
    }
    @fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $ok;
}

$mailed = false;
$cfgFile = dirname(__DIR__, 3) . '/studyhub-data/mail-config.php';
if (is_file($cfgFile)) {
    $cfg = include $cfgFile;
    if (is_array($cfg) && !empty($cfg['user']) && !empty($cfg['pass'])) {
        $mailed = smtp_send($cfg, TO, $subject, $body, $email);
    }
}

back($lang, ($saved || $mailed) ? 'sent' : 'error');
