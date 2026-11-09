(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = Array.from(document.querySelectorAll('[data-reveal]'));

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const groups = new Map();
    reveals.forEach((el) => {
      const section = el.closest('section, footer, header') || document.body;
      const index = groups.get(section) || 0;
      el.style.transitionDelay = (Math.min(index, 8) * 70) + 'ms';
      groups.set(section, index + 1);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-in');
        el.addEventListener('transitionend', function clearDelay(event) {
          if (event.propertyName !== 'opacity') return;
          el.style.transitionDelay = '';
          el.removeEventListener('transitionend', clearDelay);
        });
        observer.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Opening hours in Bergen, updated live.
  const statusEl = document.querySelector('[data-open-status]');
  const hourRows = Array.from(document.querySelectorAll('[data-hours] li[data-days]'));

  if (statusEl) {
    const schedule = {
      0: null,
      1: [600, 1080],
      2: [600, 1080],
      3: [600, 1080],
      4: [600, 1080],
      5: [600, 1080],
      6: [600, 960],
    };
    const dayNames = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
    const dayNumbers = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 };

    const pad = (value) => (value < 10 ? '0' : '') + value;
    const clock = (minutes) => pad(Math.floor(minutes / 60)) + '.' + pad(minutes % 60);

    const osloNow = () => {
      try {
        const format = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Oslo',
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23',
        });
        const parts = {};
        format.formatToParts(new Date()).forEach((part) => {
          parts[part.type] = part.value;
        });
        return {
          day: dayNumbers[parts.weekday],
          minutes: Number(parts.hour) * 60 + Number(parts.minute),
        };
      } catch (error) {
        const now = new Date();
        return { day: now.getDay(), minutes: now.getHours() * 60 + now.getMinutes() };
      }
    };

    const render = () => {
      const now = osloNow();
      const today = schedule[now.day];
      let text;
      let isOpen = false;

      if (today && now.minutes >= today[0] && now.minutes < today[1]) {
        isOpen = true;
        text = 'Åpent nå · stenger ' + clock(today[1]);
      } else if (today && now.minutes < today[0]) {
        text = 'Stengt nå · åpner ' + clock(today[0]);
      } else {
        let nextDay = null;
        let daysAhead = 0;
        for (let i = 1; i <= 7; i += 1) {
          const candidate = (now.day + i) % 7;
          if (schedule[candidate]) {
            nextDay = candidate;
            daysAhead = i;
            break;
          }
        }
        if (nextDay === null) {
          text = 'Stengt nå';
        } else if (daysAhead === 1) {
          text = 'Stengt nå · åpner i morgen ' + clock(schedule[nextDay][0]);
        } else {
          text = 'Stengt nå · åpner ' + dayNames[nextDay] + ' ' + clock(schedule[nextDay][0]);
        }
      }

      statusEl.textContent = text;
      statusEl.classList.toggle('is-open', isOpen);

      hourRows.forEach((row) => {
        const days = row.dataset.days.split(',').map(Number);
        row.classList.toggle('is-today', days.indexOf(now.day) !== -1);
      });
    };

    render();
    window.setInterval(render, 30000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) render();
    });
  }
})();
