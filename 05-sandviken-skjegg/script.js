(function () {
  var doc = document;
  var root = doc.documentElement;
  root.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* section entrances: one rise per part, staggered, once */
  var reveals = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"));
  if ("IntersectionObserver" in window && !reduced) {
    var observer = new IntersectionObserver(function (entries) {
      var order = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(order, 8) * 70 + "ms";
        order += 1;
        el.classList.add("is-in");
        observer.unobserve(el);
        el.addEventListener(
          "transitionend",
          function () {
            el.style.transitionDelay = "";
          },
          { once: true }
        );
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* the row of moments: buttons, progress bar, live bounds */
  var row = doc.querySelector(".moments__row");
  var fill = doc.querySelector(".moments__fill");
  var navs = Array.prototype.slice.call(doc.querySelectorAll(".moments__nav"));

  if (row && fill && navs.length) {
    var step = function () {
      var card = row.querySelector(".moment");
      if (!card) return 312;
      var styles = window.getComputedStyle(row);
      var gap = parseFloat(styles.columnGap || styles.gap || "32") || 32;
      return card.getBoundingClientRect().width + gap;
    };

    var update = function () {
      var max = row.scrollWidth - row.clientWidth;
      var progress = max > 0 ? row.scrollLeft / max : 0;
      fill.style.transform = "scaleX(" + (0.14 + 0.86 * progress).toFixed(4) + ")";
      navs.forEach(function (btn) {
        var dir = Number(btn.getAttribute("data-dir"));
        var atEnd = dir < 0 ? row.scrollLeft <= 2 : row.scrollLeft >= max - 2;
        btn.disabled = atEnd;
      });
    };

    navs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = Number(btn.getAttribute("data-dir"));
        row.scrollBy({
          left: dir * step(),
          behavior: reduced ? "auto" : "smooth"
        });
      });
    });

    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        update();
      });
    };

    row.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", update);
    update();
  }
})();
