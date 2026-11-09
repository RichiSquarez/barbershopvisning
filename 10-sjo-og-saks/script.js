/* Sjø & Saks — hero rise, section entrances, card drawer, coupon form. */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function loaded() {
    document.body.classList.add("is-loaded");
  }
  if (document.readyState === "complete") {
    requestAnimationFrame(loaded);
  } else {
    window.addEventListener("load", function () {
      requestAnimationFrame(loaded);
    });
    /* never leave the headline hidden if load stalls */
    setTimeout(loaded, 1200);
  }

  /* ---------- entrances ---------- */

  var revealTargets = [
    ".about-state",
    ".about-shot",
    ".about-right > *",
    ".sheet",
    ".gallery-note",
    ".faq h2",
    ".card",
    ".coupon-left > *",
    ".coupon-form > *",
    ".contact-line",
    ".foot-grid > *"
  ];

  var items = [];
  revealTargets.forEach(function (sel) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) {
      el.classList.add("reveal");
      items.push(el);
    });
  });

  if (!reduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var sibs = el.parentElement ? el.parentElement.children : [el];
          var i = Array.prototype.indexOf.call(sibs, el);
          el.style.transitionDelay = Math.min(Math.max(i, 0), 4) * 70 + "ms";
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- the drawer ---------- */

  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  var buttons = cards.map(function (card) {
    return card.querySelector(".card-btn");
  });

  function setOpen(card, open) {
    var btn = card.querySelector(".card-btn");
    var body = card.querySelector(".card-a-body");
    card.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (body) {
      if (open) {
        body.removeAttribute("inert");
      } else {
        body.setAttribute("inert", "");
      }
    }
  }

  function closeAll(except) {
    cards.forEach(function (card) {
      if (card !== except) setOpen(card, false);
    });
  }

  cards.forEach(function (card) {
    var btn = card.querySelector(".card-btn");
    setOpen(card, card.classList.contains("is-open"));

    btn.addEventListener("click", function () {
      var isOpen = card.classList.contains("is-open");
      if (isOpen) {
        setOpen(card, false);
      } else {
        closeAll(card);
        setOpen(card, true);
      }
    });

    btn.addEventListener("keydown", function (event) {
      var i = buttons.indexOf(btn);
      var next = null;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        next = buttons[(i + 1) % buttons.length];
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        next = buttons[(i - 1 + buttons.length) % buttons.length];
      } else if (event.key === "Home") {
        next = buttons[0];
      } else if (event.key === "End") {
        next = buttons[buttons.length - 1];
      }
      if (next) {
        event.preventDefault();
        next.focus();
      }
    });
  });

  /* ---------- the coupon ---------- */

  var form = document.getElementById("skjema");
  var note = document.getElementById("form-note");

  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.querySelector("#navn");
      var phone = form.querySelector("#tlf");
      var value = name && name.value ? name.value.trim() : "";
      var tel = phone && phone.value ? phone.value.replace(/\s+/g, "") : "";

      if (value.length < 2) {
        note.textContent = "Skriv navnet ditt først.";
        if (name) name.focus();
        return;
      }
      if (tel.length < 8) {
        note.textContent = "Vi trenger et telefonnummer med minst åtte siffer.";
        if (phone) phone.focus();
        return;
      }

      note.textContent =
        "Takk, " + value.split(" ")[0] + ". Vi ringer deg innen en time i åpningstiden.";
      form.reset();
    });
  }
})();
