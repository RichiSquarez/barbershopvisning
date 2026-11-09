(function () {
  "use strict";

  var root = document.documentElement;
  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  /* ---------- hero reel: the sentence holds, the frames pass ---------- */
  var heroRun = $(".hero-run");
  var hero = $(".hero");
  var reelTrack = $(".hero__reel-track");
  var reelWindow = $(".hero__reel-window");
  var reelFrames = $$(".hero__frame");
  var reelGap = reelTrack ? parseFloat(window.getComputedStyle(reelTrack).rowGap || window.getComputedStyle(reelTrack).gap) || 0 : 0;
  var reelIndex = 0;

  function measureReel() {
    if (!reelTrack || !reelWindow || !reelFrames.length) return;
    var style = window.getComputedStyle(reelTrack);
    reelGap = parseFloat(style.rowGap || style.gap) || 0;
    var height = reelFrames[0].getBoundingClientRect().height;
    reelWindow.style.height = height + "px";
    reelTrack.style.transform = "translateY(" + (-reelIndex * (height + reelGap)) + "px)";
  }

  function updateReel() {
    if (!heroRun || !hero || !reelTrack || reduceQuery.matches) return;
    var distance = heroRun.offsetHeight - hero.offsetHeight;
    if (distance <= 0) return;
    var progress = clamp(-heroRun.getBoundingClientRect().top / distance, 0, 1);
    var nextIndex = Math.min(reelFrames.length - 1, Math.floor(progress * (reelFrames.length - 1) + 0.0001));
    if (nextIndex !== reelIndex) {
      reelIndex = nextIndex;
      var height = reelFrames[0].getBoundingClientRect().height;
      reelTrack.style.transform = "translateY(" + (-reelIndex * (height + reelGap)) + "px)";
    }
  }

  measureReel();
  updateReel();

  /* ---------- the live list: choose a treatment, the photo changes ---------- */
  var services = $$(".service");
  var listShots = $$(".list__shot");
  var activeService = 0;

  function selectService(index) {
    var next = services[index];
    if (!next || index === activeService) return;
    activeService = index;
    services.forEach(function (button, i) {
      var on = i === index;
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var shot = next.getAttribute("data-shot");
    listShots.forEach(function (figure) {
      figure.classList.toggle("is-active", figure.getAttribute("data-shot") === shot);
    });
  }

  services.forEach(function (button, i) {
    button.addEventListener("click", function () { selectService(i); });
    button.addEventListener("focus", function () { selectService(i); });
    if (finePointer.matches) {
      button.addEventListener("pointerenter", function () { selectService(i); });
    }
  });

  function serviceNearestMiddle() {
    if (!services.length || reduceQuery.matches) return;
    var middle = window.innerHeight * 0.5;
    for (var i = 0; i < services.length; i++) {
      var rect = services[i].getBoundingClientRect();
      if (rect.top <= middle && rect.bottom >= middle) {
        selectService(i);
        return;
      }
    }
  }

  /* ---------- the one frame gallery ---------- */
  var gallery = $("[data-gallery]");
  var slides = $$(".gallery__slide", gallery || document);
  var galleryIndex = 0;
  var galleryTimer = null;

  function showSlide(index) {
    if (!slides.length) return;
    slides[galleryIndex].classList.remove("is-active");
    galleryIndex = (index + slides.length) % slides.length;
    slides[galleryIndex].classList.add("is-active");
    var caption = slides[galleryIndex].querySelector("figcaption");
    if (gallery && caption) {
      gallery.setAttribute("aria-label", caption.textContent.trim() + ". Trykk eller trykk mellomrom for neste bilete.");
    }
  }

  function stopGallery() {
    if (galleryTimer) {
      window.clearInterval(galleryTimer);
      galleryTimer = null;
    }
  }

  function startGallery() {
    if (!gallery || reduceQuery.matches || slides.length < 2) return;
    stopGallery();
    galleryTimer = window.setInterval(function () { showSlide(galleryIndex + 1); }, 3000);
  }

  if (gallery && slides.length) {
    showSlide(0);
    startGallery();
    gallery.addEventListener("click", function () {
      stopGallery();
      showSlide(galleryIndex + 1);
      startGallery();
    });
    gallery.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        stopGallery();
        showSlide(galleryIndex + 1);
        startGallery();
      }
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopGallery();
      else startGallery();
    });
  }

  /* ---------- fitted email ---------- */
  var contact = $(".contact");
  var email = $(".contact__email");
  var emailLink = email ? email.querySelector("a") : null;

  function fitEmail() {
    if (!contact || !email || !emailLink) return;
    if (window.innerWidth <= 700) {
      email.style.removeProperty("font-size");
      email.style.removeProperty("white-space");
      return;
    }
    var styles = window.getComputedStyle(contact);
    var targetWidth = contact.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    email.style.setProperty("white-space", "nowrap");
    email.style.setProperty("font-size", "100px");
    var natural = emailLink.getBoundingClientRect().width;
    if (!natural) {
      email.style.removeProperty("font-size");
      return;
    }
    var fitted = clamp((targetWidth / natural) * 100 * 0.97, 34, 190);
    email.style.setProperty("font-size", fitted.toFixed(2) + "px");
    var width = emailLink.getBoundingClientRect().width;
    if (width > targetWidth) {
      fitted = Math.max(28, fitted * (targetWidth / width) * 0.995);
      email.style.setProperty("font-size", fitted.toFixed(2) + "px");
    }
  }

  /* ---------- staggered section entrances ---------- */
  var reveals = $$("[data-reveal]");
  reveals.forEach(function (el) {
    var section = el.closest("section") || el.parentNode;
    var group = $$("[data-reveal]", section);
    var order = group.indexOf(el);
    el.style.setProperty("--d", Math.min(order, 6) * 70 + "ms");
  });

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
    window.setTimeout(function () {
      reveals.forEach(function (el) {
        if (!el.classList.contains("is-in")) el.classList.add("is-in");
      });
    }, 5000);
  }

  /* ---------- shared scroll / resize loop ---------- */
  var ticking = false;

  function onFrame() {
    ticking = false;
    updateReel();
    serviceNearestMiddle();
  }

  function requestFrame() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onFrame);
    }
  }

  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", function () {
    measureReel();
    fitEmail();
    requestFrame();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      measureReel();
      fitEmail();
      requestFrame();
    });
  }

  fitEmail();
  requestFrame();
  window.addEventListener("load", fitEmail);
  window.setTimeout(fitEmail, 400);
})();
