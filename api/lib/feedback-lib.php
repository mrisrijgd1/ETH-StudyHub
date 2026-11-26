<?php
// StudyHub feedback conversations (shared by api/feedback.php, api/feedback-chat.php and the team inbox in lib/query.php).
// A student sends feedback without a name. They get a private link (feedback-chat.html#<token>) where the team's
// reply appears and they can answer back. The token is 32 random hex characters: whoever has the link can read
// that one conversation, nobody else can. An e-mail address is optional and only used to say "you have a reply".
// Tables live in the same MariaDB as the rest of StudyHub but are NOT in SH_TABLES, so the general data API
// (db.php) cannot reach them. Only these functions touch them.
declare(strict_types=1);
require_once __DIR__ . '/shdb.php';

const FB_TEAM   = 'contact@study-hub.ch';
const FB_SITE   = 'https://study-hub.ch';
const FB_MAX    = 4000;
const FB_PER_HOUR = 5;
const FB_KINDS  = ['idea' => 'Idea', 'mistake' => 'Something is wrong', 'question' => 'Question', 'other' => 'Other'];

function fb_ready(PDO $pdo): void {
    $marker = sh_data_dir() . '/.feedback-v1';
    if (is_file($marker)) { return; }
    $pdo->exec('CREATE TABLE IF NOT EXISTS fb_threads (
        id BIGINT NOT NULL AUTO_INCREMENT, token CHAR(32) NOT NULL, kind VARCHAR(40) NULL, page VARCHAR(200) NULL,
        lang VARCHAR(5) NULL, email VARCHAR(200) NULL, status VARCHAR(10) NOT NULL DEFAULT \'open\', last_from VARCHAR(10) NULL,
        created_at DATETIME(3) NULL, updated_at DATETIME(3) NULL,
        PRIMARY KEY (id), UNIQUE KEY by_token (token), KEY by_updated (updated_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin');
    $pdo->exec('CREATE TABLE IF NOT EXISTS fb_messages (
        id BIGINT NOT NULL AUTO_INCREMENT, thread_id BIGINT NOT NULL, author VARCHAR(10) NOT NULL, body MEDIUMTEXT NULL,
        created_at DATETIME(3) NULL, PRIMARY KEY (id), KEY by_thread (thread_id, id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin');
    @file_put_contents($marker, date('c'));
}

function fb_clean_text(string $s): string {
    $s = trim(str_replace("\r\n", "\n", $s));
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $s) ?? '';
    return mb_substr($s, 0, FB_MAX);
}

function fb_valid_token(string $t): bool { return (bool)preg_match('/^[0-9a-f]{32}$/', $t); }

// Flood limit: hashed IP, counted per hour, kept only in a small file that is overwritten. true = allowed.
function fb_rate_ok(): bool {
    $dir = sh_data_dir('feedback');
    if (!is_dir($dir) || !is_writable($dir)) { return true; }
    $ipHash = substr(hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . date('Y-m-d-H') . '|studyhub'), 0, 16);
    $limitFile = $dir . '/.limit-' . date('Y-m-d-H') . '.json';
    $counts = is_file($limitFile) ? (json_decode((string)@file_get_contents($limitFile), true) ?: []) : [];
    $counts[$ipHash] = ($counts[$ipHash] ?? 0) + 1;
    if ($counts[$ipHash] > FB_PER_HOUR) { return false; }
    @file_put_contents($limitFile, json_encode($counts), LOCK_EX);
    foreach (glob($dir . '/.limit-*.json') ?: [] as $old) { if ($old !== $limitFile) { @unlink($old); } }
    return true;
}

// Starts a conversation. Returns its private token.
function fb_create(PDO $pdo, string $kind, string $page, string $lang, string $email, string $message): string {
    fb_ready($pdo);
    $token = bin2hex(random_bytes(16));
    $pdo->prepare('INSERT INTO fb_threads (token, kind, page, lang, email, status, last_from, created_at, updated_at)
                   VALUES (?, ?, ?, ?, ?, \'open\', \'student\', UTC_TIMESTAMP(3), UTC_TIMESTAMP(3))')
        ->execute([$token, $kind, $page !== '' ? $page : null, $lang, $email !== '' ? $email : null]);
    $id = (int)$pdo->lastInsertId();
    fb_add($pdo, $id, 'student', $message);
    return $token;
}

function fb_add(PDO $pdo, int $threadId, string $author, string $body): void {
    $pdo->prepare('INSERT INTO fb_messages (thread_id, author, body, created_at) VALUES (?, ?, ?, UTC_TIMESTAMP(3))')
        ->execute([$threadId, $author, $body]);
    // A new message from the student reopens a conversation the team had marked done.
    $pdo->prepare('UPDATE fb_threads SET updated_at = UTC_TIMESTAMP(3), last_from = ?' . ($author === 'student' ? ', status = \'open\'' : '') . ' WHERE id = ?')
        ->execute([$author, $threadId]);
}

function fb_thread_by_token(PDO $pdo, string $token): ?array {
    if (!fb_valid_token($token)) { return null; }
    fb_ready($pdo);
    $s = $pdo->prepare('SELECT * FROM fb_threads WHERE token = ?');
    $s->execute([$token]);
    return $s->fetch() ?: null;
}

function fb_messages(PDO $pdo, int $threadId): array {
    $s = $pdo->prepare('SELECT author, body, created_at FROM fb_messages WHERE thread_id = ? ORDER BY id');
    $s->execute([$threadId]);
    return array_map(fn($r) => ['from' => $r['author'], 'body' => $r['body'], 'at' => sh_ts_out($r['created_at'])], $s->fetchAll());
}

// ---------------------------------------------------------------- e-mail
// Via Infomaniak SMTP. Infomaniak switches PHP mail() off, so we log in to the mailbox instead.
// The login lives ONLY on the server, outside the website folder, in <home>/studyhub-data/mail-config.php:
//   <?php return ['user' => 'contact@study-hub.ch', 'pass' => '...'];
// (created by hand in the Infomaniak File Manager; never in GitHub). Without that file, nothing is mailed.
function fb_mail(string $to, string $subject, string $body, string $replyTo = '', string $fromName = 'StudyHub feedback'): bool {
    $cfgFile = sh_home() . '/studyhub-data/mail-config.php';
    if (!is_file($cfgFile)) { return false; }
    $cfg = include $cfgFile;
    if (!is_array($cfg) || empty($cfg['user']) || empty($cfg['pass'])) { return false; }
    return smtp_send($cfg, $to, $subject, $body, $replyTo, $fromName);
}

// Tells a student who left an address that the team answered. The mail holds their private link, nothing else.
function fb_notify_student(array $thread): bool {
    if (empty($thread['email'])) { return false; }
    $body = "Hi,\n\nthe StudyHub team answered your feedback. You can read the reply and write back here:\n\n"
          . FB_SITE . '/feedback-chat.html#' . $thread['token'] . "\n\n"
          . "Keep this link private: anyone who has it can read the conversation.\n\nThe StudyHub team\n";
    return fb_mail((string)$thread['email'], 'StudyHub answered your feedback', $body, '', 'StudyHub');
}

function smtp_send(array $cfg, string $to, string $subject, string $body, string $replyTo, string $fromName = 'StudyHub feedback'): bool {
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
        $headers = 'From: ' . $fromName . ' <' . $user . ">\r\n" .
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
