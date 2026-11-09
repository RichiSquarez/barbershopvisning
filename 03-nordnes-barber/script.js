// Nordnes Barbersalong — the fixed photograph slowly changes, the sheet reveals itself,
// and the small status line tells you whether the door is open right now (Europe/Oslo).

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* — entrances: heading, then text, then picture, once — */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* — the signature move: a slow crossfade between four photographs — */
  var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  if (shots.length > 1 && !reduceMotion) {
    var current = 0;
    var timer = null;

    var advance = function () {
      var next = (current + 1) % shots.length;
      shots[next].classList.add('is-on');
      shots[current].classList.remove('is-on');
      current = next;
    };

    var start = function () {
      if (timer === null) { timer = window.setInterval(advance, 6200); }
    };
    var stop = function () {
      if (timer !== null) { window.clearInterval(timer); timer = null; }
    };

    // the first change comes a little sooner, so the window shows it is alive
    window.setTimeout(start, 2900);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { stop(); } else { start(); }
    });
  }

  /* — opening hours, read in Oslo time — */
  var live = document.querySelector('[data-live]');
  var liveRow = document.querySelector('.live');

  if (live) {
    var dayNames = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'];

    var openingMinute = function (day) {
      return (day >= 2 && day <= 6) ? 540 : null;
    };
    var closingMinute = function (day) {
      if (day >= 2 && day <= 5) { return 1080; }
      if (day === 6) { return 900; }
      return null;
    };
    var clock = function (minute) {
      var h = Math.floor(minute / 60);
      var m = minute % 60;
      return h + '.' + (m < 10 ? '0' + m : m);
    };

    var refresh = function () {
      var parts = new Intl.DateTimeFormat('nb-NO', {
        timeZone: 'Europe/Oslo',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
      }).formatToParts(new Date());

      var value = {};
      parts.forEach(function (part) { value[part.type] = part.value; });

      var weekday = String(value.weekday || '').toLowerCase();
      var day = 0;
      for (var i = 0; i < dayNames.length; i += 1) {
        if (weekday.indexOf(dayNames[i]) === 0) { day = i; }
      }

      var now = parseInt(value.hour, 10) * 60 + parseInt(value.minute, 10);
      var opens = openingMinute(day);
      var closes = closingMinute(day);
      var isOpen = opens !== null && closes !== null && now >= opens && now < closes;

      if (isOpen) {
        live.textContent = 'Åpent nå · stenger ' + clock(closes);
        if (liveRow) {
          liveRow.classList.add('is-open');
          liveRow.classList.remove('is-shut');
        }
        return;
      }

      var text;
      if (opens !== null && now < opens) {
        text = 'Stengt nå · åpner ' + clock(opens);
      } else {
        text = 'Stengt nå';
        for (var ahead = 1; ahead <= 7; ahead += 1) {
          var candidate = (day + ahead) % 7;
          if (openingMinute(candidate) !== null) {
            text += ' · åpner ' + dayNames[candidate] + ' ' + clock(openingMinute(candidate));
            break;
          }
        }
      }
      live.textContent = text;
      if (liveRow) {
        liveRow.classList.add('is-shut');
        liveRow.classList.remove('is-open');
      }
    };

    refresh();
    window.setInterval(refresh, 60000);
  }
}());
