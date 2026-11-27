<?php
// Live occupancy of ETH study spaces for the planner's study-places map (planner/places/).
// Source: ETH Zürich's public traffic light, https://ethz.ch/studierende/de/campus/arbeitsplaetze-studierende/auslastung-studierendenarbeitsplaetze.html
// ETH's feed sends no CORS header, so browsers cannot read it directly. This endpoint fetches it at most
// once every 5 minutes (ETH updates every 5 min), keeps only room id, status, percentage, trend and time,
// and passes that on. No user data is involved.
//   GET -> {"source": "...", "page": "...", "fetched": "...", "rooms": {"HGH30.1": {"s": "green", "p": 20, "t": "steady", "at": "..."}}}
declare(strict_types=1);
ini_set('display_errors', '0');

const OCC_FEED = 'https://ethz.ch/bin/ethz/studyspaces/availability.json';
const OCC_PAGE = 'https://ethz.ch/studierende/de/campus/arbeitsplaetze-studierende/auslastung-studierendenarbeitsplaetze.html';
const OCC_TTL = 300;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') { http_response_code(405); echo '{"error":"Use GET."}'; exit; }

$cache = sys_get_temp_dir() . '/studyhub-eth-occupancy.json';
$fresh = is_file($cache) && (time() - (int)filemtime($cache)) < OCC_TTL;

if (!$fresh) {
    $raw = false;
    $ctx = stream_context_create(['http' => ['timeout' => 6, 'header' => "Accept: application/json\r\nUser-Agent: StudyHub study planner (study-hub.ch)\r\n"]]);
    if (ini_get('allow_url_fopen')) { $raw = @file_get_contents(OCC_FEED, false, $ctx); }
    if ($raw === false && function_exists('curl_init')) {
        $c = curl_init(OCC_FEED);
        curl_setopt_array($c, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 6, CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_HTTPHEADER => ['Accept: application/json'], CURLOPT_USERAGENT => 'StudyHub study planner (study-hub.ch)']);
        $raw = curl_exec($c);
        if (curl_getinfo($c, CURLINFO_HTTP_CODE) !== 200) { $raw = false; }
        curl_close($c);
    }
    $j = $raw !== false ? json_decode($raw, true) : null;
    if (is_array($j) && isset($j['data']) && is_array($j['data'])) {
        $rooms = [];
        foreach ($j['data'] as $r) {
            $a = $r['attributes'] ?? [];
            $id = (string)($a['roomGlobalIdentifier'] ?? '');
            if ($id === '' || !preg_match('~^[A-Za-z0-9._-]{1,40}$~', $id)) continue;
            $s = (string)($a['status'] ?? 'unknown');
            if (!in_array($s, ['green', 'yellow', 'red'], true)) continue;   // rooms without a measurement are left out
            $rooms[$id] = ['s' => $s, 'p' => isset($a['occupancyPercentage']) ? (int)$a['occupancyPercentage'] : null,
                           't' => in_array($a['trend'] ?? '', ['rising', 'falling', 'steady'], true) ? $a['trend'] : null,
                           'at' => isset($a['timestamp']) ? substr((string)$a['timestamp'], 0, 32) : null];
        }
        $out = ['source' => 'ETH Zürich', 'page' => OCC_PAGE, 'fetched' => gmdate('c'), 'rooms' => (object)$rooms];
        @file_put_contents($cache . '.tmp', json_encode($out, JSON_UNESCAPED_SLASHES), LOCK_EX);
        @rename($cache . '.tmp', $cache);
    } elseif (is_file($cache)) {
        touch($cache, time() - OCC_TTL + 60);   // ETH unreachable: keep serving the last copy, retry in a minute
    }
}

if (!is_file($cache)) { http_response_code(503); echo json_encode(['error' => 'ETH occupancy not available right now.', 'page' => OCC_PAGE], JSON_UNESCAPED_SLASHES); exit; }
header('Cache-Control: public, max-age=120');
readfile($cache);
