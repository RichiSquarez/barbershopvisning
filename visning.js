/* Visning — browsing stand for the ten salon pages.
   One index in the URL hash, one device toggle, arrows and keys. */

(function () {
  'use strict';

  var PAGES = [
    { slug: '01-bryggen-barber', name: 'Bryggen Barber' },
    { slug: '02-regn-og-barber', name: 'Regn & Barber' },
    { slug: '03-nordnes-barber', name: 'Nordnes Barbersalong' },
    { slug: '04-fjell-fade', name: 'Fjell & Fade' },
    { slug: '05-sandviken-skjegg', name: 'Sandviken Skjegg' },
    { slug: '06-barberskolen', name: 'Barberskolen' },
    { slug: '07-kai-12', name: 'Kai 12' },
    { slug: '08-asane-barber', name: 'Åsane Barber' },
    { slug: '09-nattbarber', name: 'Nattbarber' },
    { slug: '10-sjo-og-saks', name: 'Sjø & Saks' }
  ];

  var stage = document.getElementById('scenen');
  var frame = document.getElementById('ramme');
  var view = document.getElementById('side');
  var nameEl = document.getElementById('navn');
  var countEl = document.getElementById('teller');
  var prevBtn = document.getElementById('forrige');
  var nextBtn = document.getElementById('neste');
  var openLink = document.getElementById('apne');
  var mobilBtn = document.getElementById('mobil');
  var bredBtn = document.getElementById('bred');
  var hint = document.getElementById('hint');
  var track = document.getElementById('track');
  var chips = Array.prototype.slice.call(track.querySelectorAll('.chip'));

  var index = 0;
  var device = 'mobile';
  var hinted = false;

  try {
    var saved = localStorage.getItem('visning-device');
    if (saved === 'wide' || saved === 'mobile') device = saved;
  } catch (err) { /* private mode */ }

  function page(i) {
    return PAGES[((i % PAGES.length) + PAGES.length) % PAGES.length];
  }

  function layout() {
    var wide = window.innerWidth >= 1100;
    var pad = wide ? 44 : 0;
    var sw = Math.max(240, stage.clientWidth - pad);
    var sh = Math.max(240, stage.clientHeight - pad);

    if (device === 'mobile') {
      var mw = Math.min(390, sw);
      var mh = Math.min(844, sh);
      frame.style.width = mw + 'px';
      frame.style.height = mh + 'px';
      frame.style.borderRadius = mw < sw ? '12px' : '0';
      frame.style.setProperty('--scale', '1');
    } else {
      var scale = Math.min(sw / 1440, sh / 900);
      frame.style.width = 1440 * scale + 'px';
      frame.style.height = 900 * scale + 'px';
      frame.style.borderRadius = scale < 0.98 ? '8px' : '0';
      frame.style.setProperty('--scale', String(scale));
    }
  }

  function setDevice(next, remember) {
    device = next;
    frame.setAttribute('data-device', device);
    mobilBtn.setAttribute('aria-pressed', String(device === 'mobile'));
    bredBtn.setAttribute('aria-pressed', String(device === 'wide'));
    layout();
    if (remember) {
      try { localStorage.setItem('visning-device', device); } catch (err) { /* ignore */ }
    }
  }

  function dismissHint() {
    if (hinted) return;
    hinted = true;
    hint.classList.add('is-gone');
    window.setTimeout(function () { hint.hidden = true; }, 400);
  }

  function show(i, push) {
    index = ((i % PAGES.length) + PAGES.length) % PAGES.length;
    var p = page(index);

    nameEl.textContent = p.name;
    countEl.textContent = (index + 1) + ' av ' + PAGES.length;
    openLink.href = p.slug + '/index.html';
    document.title = p.name + ' · Barberbergen';

    chips.forEach(function (chip, n) {
      if (n === index) chip.setAttribute('aria-current', 'true');
      else chip.removeAttribute('aria-current');
    });

    var active = chips[index];
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    frame.classList.add('is-loading');
    view.src = p.slug + '/index.html';

    if (push !== false) {
      var hash = '#' + p.slug;
      if (location.hash !== hash) {
        try { history.replaceState(null, '', hash); } catch (err) { location.hash = hash; }
      }
    }
  }

  function step(delta) {
    dismissHint();
    show(index + delta);
  }

  prevBtn.addEventListener('click', function () { step(-1); });
  nextBtn.addEventListener('click', function () { step(1); });

  chips.forEach(function (chip) {
    chip.addEventListener('click', function (event) {
      event.preventDefault();
      dismissHint();
      show(parseInt(chip.getAttribute('data-i'), 10));
    });
  });

  mobilBtn.addEventListener('click', function () { setDevice('mobile', true); });
  bredBtn.addEventListener('click', function () { setDevice('wide', true); });

  view.addEventListener('load', function () {
    frame.classList.remove('is-loading');
  });

  document.addEventListener('keydown', function (event) {
    if (event.target && /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.key === 'ArrowLeft') { step(-1); event.preventDefault(); }
    else if (event.key === 'ArrowRight') { step(1); event.preventDefault(); }
    else if (event.key === 'Home') { show(0); event.preventDefault(); }
    else if (event.key === 'End') { show(PAGES.length - 1); event.preventDefault(); }
    else if (/^[0-9]$/.test(event.key)) {
      var n = event.key === '0' ? 9 : parseInt(event.key, 10) - 1;
      if (n < PAGES.length) { dismissHint(); show(n); }
    }
  });

  // Swipe along the top bar — the only strip the preview does not cover.
  var startX = 0, startY = 0, tracking = false;
  var bar = document.querySelector('.bar');

  bar.addEventListener('pointerdown', function (event) {
    if (event.target.closest('button, a')) return;
    tracking = true;
    startX = event.clientX;
    startY = event.clientY;
  });

  bar.addEventListener('pointerup', function (event) {
    if (!tracking) return;
    tracking = false;
    var dx = event.clientX - startX;
    var dy = event.clientY - startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      step(dx < 0 ? 1 : -1);
    }
  });

  bar.addEventListener('pointercancel', function () { tracking = false; });

  window.addEventListener('resize', layout);

  window.addEventListener('hashchange', function () {
    var slug = location.hash.replace('#', '');
    var n = PAGES.findIndex(function (p) { return p.slug === slug; });
    if (n >= 0 && n !== index) show(n, false);
  });

  var fromHash = PAGES.findIndex(function (p) {
    return '#' + p.slug === location.hash;
  });

  setDevice(device, false);
  show(fromHash >= 0 ? fromHash : 0, false);
  layout();

  window.setTimeout(dismissHint, 7000);
})();
