/* Kai 12 — the head takes the ink of the chapter beneath it (300ms), every section
   arrives once, the strip drifts, and the booking bar answers. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var head = document.getElementById('head');
  var chapters = Array.prototype.slice.call(document.querySelectorAll('[data-head]'));

  // Colour by chapter: the fixed head takes the ink of whatever field sits under it.
  var current = '';
  function paintHead() {
    var line = 40;
    var next = 'red';
    for (var i = 0; i < chapters.length; i++) {
      var box = chapters[i].getBoundingClientRect();
      if (box.top <= line && box.bottom > line) { next = chapters[i].getAttribute('data-head'); break; }
      if (box.top > line) { break; }
    }
    if (next !== current) {
      current = next;
      head.setAttribute('data-on', next);
    }
  }

  var queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () {
      queued = false;
      paintHead();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  paintHead();

  // Section entrances.
  var items = document.querySelectorAll(
    '.poster-row, .priser-foot, .veggen-title, .tile, .salon-lead, .salon-shot, .besok-title, .bar, .form-note, .where, .besok-foot .btn'
  );

  Array.prototype.forEach.call(items, function (el) {
    el.classList.add('reveal');
  });

  if (reduce.matches || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = 0;
        if (el.classList.contains('tile') || el.classList.contains('poster-row')) {
          delay = Math.min(Number(el.dataset.i || 0), 5) * 70;
        } else if (el.classList.contains('salon-shot')) {
          delay = 60;
        }
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(document.querySelectorAll('.poster-row'), function (el, n) {
      el.dataset.i = String(n);
    });
    Array.prototype.forEach.call(document.querySelectorAll('.tile'), function (el, n) {
      el.dataset.i = String(n);
    });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  // Booking bar.
  var form = document.getElementById('skjema');
  var note = document.getElementById('form-note');
  var nameField = document.getElementById('navn');
  var phoneField = document.getElementById('tlf');
  var baseNote = note.textContent;

  function say(text, state) {
    note.textContent = text;
    note.classList.remove('is-ok', 'is-bad');
    if (state) note.classList.add(state);
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = nameField.value.trim();
      var phone = phoneField.value.replace(/[^0-9]/g, '');

      if (name.length < 2) {
        say('Skriv inn navnet ditt, så vet vi hvem som kommer.', 'is-bad');
        nameField.focus();
        return;
      }
      if (phone.length < 8) {
        say('Telefonnummeret mangler noen sifre. Prøv igjen.', 'is-bad');
        phoneField.focus();
        return;
      }

      say('Takk, ' + name.split(' ')[0] + '. Vi ringer deg på ' + phoneField.value.trim() + ' i løpet av dagen.', 'is-ok');
      form.reset();
    });

    form.addEventListener('input', function () {
      if (note.classList.contains('is-bad')) say(baseNote, null);
    });
  }
})();
