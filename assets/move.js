/* StudyHub has moved to https://study-hub.ch (24 Nov 2026).
   On the old github.io address: take this browser's StudyHub data (progress, notes,
   settings saved in localStorage) along in the link, then go to the same page on study-hub.ch.
   On study-hub.ch: read that data from the link once, keep anything already saved here,
   and remove it from the address bar. Loaded (not deferred) before assets/account.js. */
(function () {
  var NEW = 'https://study-hub.ch';
  var TAG = 'shmove=';
  var MAX = 60000; // keep the link short enough for every browser

  if (/\.github\.io$/.test(location.hostname)) {
    var path = location.pathname.replace(/^\/ETH-StudyHub/i, '') || '/';
    var data = {};
    try {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
      keys.forEach(function (k) {
        if (!k || /^sb-/.test(k)) return;            // login tokens never travel; people log in again
        var v = localStorage.getItem(k);
        if (v != null && v.length < MAX) data[k] = v;
      });
    } catch (e) {}
    var packed = '';
    try {
      var keysBySize = Object.keys(data).sort(function (a, b) { return data[a].length - data[b].length; });
      while (keysBySize.length) {
        var obj = {};
        keysBySize.forEach(function (k) { obj[k] = data[k]; });
        packed = encodeURIComponent(JSON.stringify(obj));
        if (packed.length <= MAX) break;
        keysBySize.pop();                             // drop the biggest item until it fits
        packed = '';
      }
    } catch (e) { packed = ''; }
    var hash = location.hash || '';
    if (packed) hash = '#' + TAG + packed + (hash ? '&h=' + encodeURIComponent(hash.slice(1)) : '');
    location.replace(NEW + path + location.search + hash);
    return;
  }

  var h = location.hash || '';
  if (h.indexOf('#' + TAG) === 0) {
    var rest = h.slice(1 + TAG.length);
    var orig = '';
    var amp = rest.indexOf('&h=');
    if (amp >= 0) { orig = decodeURIComponent(rest.slice(amp + 3)); rest = rest.slice(0, amp); }
    try {
      var incoming = JSON.parse(decodeURIComponent(rest));
      Object.keys(incoming).forEach(function (k) {
        if (localStorage.getItem(k) == null) localStorage.setItem(k, incoming[k]);
      });
    } catch (e) {}
    try { history.replaceState(null, '', location.pathname + location.search + (orig ? '#' + orig : '')); } catch (e) {}
  }
})();
