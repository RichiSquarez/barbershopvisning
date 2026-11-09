/* Barberskolen — student/vanlig price toggle, section entrances, coupon form. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Price toggle: each row carries both prices.
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.toggle-btn'));
  var items = Array.prototype.slice.call(document.querySelectorAll('.item'));

  function setMode(mode) {
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    items.forEach(function (row) {
      var price = row.getAttribute(mode === 'student' ? 'data-student' : 'data-full');
      var cell = row.querySelector('.item-price');
      if (cell && price) cell.textContent = price;
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setMode(btn.getAttribute('data-mode'));
    });
  });

  // Section entrances.
  var parts = document.querySelectorAll(
    '.hero-copy > *, .hero-art, .panel, .slik-name, .step, .priser-head, .priser-note, .item, .priser-hours, .sporsmal-name, .qa p, .coupon, .booking-where, .foot > *'
  );
  Array.prototype.forEach.call(parts, function (el) { el.classList.add('reveal'); });

  if (reduce.matches || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(parts, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var n = 0;
        if (el.classList.contains('item')) {
          var siblings = Array.prototype.slice.call(el.parentElement.children);
          n = Math.min(siblings.indexOf(el), 5);
        } else if (el.classList.contains('step')) {
          n = Math.min(Array.prototype.slice.call(el.parentElement.children).indexOf(el), 3);
        }
        el.style.transitionDelay = (n * 70) + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(parts, function (el) { io.observe(el); });
  }

  // Coupon form.
  var form = document.getElementById('skjema');
  var note = document.getElementById('form-note');
  var base = note ? note.textContent : '';

  if (form && note) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = document.getElementById('navn');
      var phone = document.getElementById('tlf');
      var digits = phone.value.replace(/[^0-9]/g, '');
      if (name.value.trim().length < 2) {
        note.textContent = 'Skriv inn navnet ditt først.';
        name.focus();
        return;
      }
      if (digits.length < 8) {
        note.textContent = 'Telefonnummeret mangler noen sifre.';
        phone.focus();
        return;
      }
      note.textContent = 'Takk, ' + name.value.trim().split(' ')[0] + '. Vi ringer deg i åpningstiden.';
      form.reset();
    });
    form.addEventListener('input', function () {
      if (note.textContent !== base) note.textContent = base;
    });
  }
})();
