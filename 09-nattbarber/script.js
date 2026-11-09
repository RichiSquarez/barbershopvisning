/* Nattbarber — opening state, today's slot in the slip, staggered entrances. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- opening hours, in Bergen time ---------- */

  var NAMES = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
  var OPEN_MIN = { 1: 18 * 60, 2: 18 * 60, 3: 18 * 60, 4: 18 * 60, 5: 18 * 60, 6: 16 * 60 };
  var CLOSE_MIN = 60; // 01:00

  function osloNow() {
    var parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Oslo',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date());
    var map = {};
    for (var i = 0; i < parts.length; i++) map[parts[i].type] = parts[i].value;
    var idx = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      day: idx[map.weekday],
      minutes: parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10)
    };
  }

  function isOpen(now) {
    var m = now.minutes;
    if (m < CLOSE_MIN && OPEN_MIN[(now.day + 6) % 7] !== undefined) return true;
    if (OPEN_MIN[now.day] !== undefined && m >= OPEN_MIN[now.day]) return true;
    return false;
  }

  function nextOpening(now) {
    for (var add = 0; add < 8; add++) {
      var day = (now.day + add) % 7;
      var open = OPEN_MIN[day];
      if (open === undefined) continue;
      if (add === 0 && now.minutes >= open) continue;
      return { day: day, open: open };
    }
    return null;
  }

  function hhmm(minutes) {
    var h = Math.floor(minutes / 60) % 24;
    var m = minutes % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }

  function sayStatus() {
    var el = document.getElementById('status');
    if (!el) return;
    var now = osloNow();

    if (isOpen(now)) {
      el.textContent = 'Åpent nå · stenger kl. 01:00 · siste klipp 00:15';
      markSlot(now);
      return;
    }

    var next = nextOpening(now);
    if (!next) {
      el.textContent = 'Stengt nå.';
      return;
    }
    var when = next.day === now.day ? 'i kveld' : (next.day === (now.day + 1) % 7 ? 'i morgen' : NAMES[next.day]);
    el.textContent = 'Stengt nå · åpner ' + when + ' kl. ' + hhmm(next.open) + '.';
  }

  function markSlot(now) {
    var groups = document.querySelectorAll('.slip-group');
    if (!groups.length) return;
    var m = now.minutes;
    var slot = m >= 18 * 60 && m < 20 * 60 ? 0 : m >= 20 * 60 && m < 23 * 60 ? 1 : 2;
    for (var i = 0; i < groups.length; i++) groups[i].classList.remove('is-today');
    if (groups[slot]) groups[slot].classList.add('is-today');
  }

  sayStatus();
  window.setInterval(sayStatus, 60000);

  /* ---------- entrances ---------- */

  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < targets.length; i++) targets[i].classList.add('is-in');
    return;
  }

  var siblings = {};
  for (var j = 0; j < targets.length; j++) {
    var parent = targets[j].parentNode;
    var key = parent ? Array.prototype.indexOf.call(parent.children, parent) : j;
    siblings[key] = (siblings[key] || 0) + 1;
    var n = siblings[key] - 1;
    if (n > 0) targets[j].style.setProperty('--d', String(Math.min(n, 4)));
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  for (var k = 0; k < targets.length; k++) io.observe(targets[k]);
})();
