/* Bryggen Barber: wordmark fit, slow crossfade, section entrances, live opening hours. */

(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  root.classList.add("js");

  /* --- the wide wordmark is fitted to the page width by measurement --- */
  var wordmark = document.querySelector(".wordmark");
  var wordmarkSpan = wordmark ? wordmark.querySelector("span") : null;
  var hero = document.querySelector(".hero");

  function fitWordmark() {
    if (!wordmark || !wordmarkSpan || !hero) return;
    var heroStyle = window.getComputedStyle(hero);
    var available =
      hero.clientWidth -
      parseFloat(heroStyle.paddingLeft) -
      parseFloat(heroStyle.paddingRight);
    if (!available || available < 40) return;

    wordmarkSpan.style.transform = "none";
    var natural = wordmarkSpan.getBoundingClientRect().width;
    if (!natural) return;

    var share = window.innerWidth < 640 ? 0.94 : 0.72;
    var scale = (available * share) / natural;
    scale = Math.max(0.7, Math.min(2.9, scale));
    wordmarkSpan.style.transform = "scaleX(" + scale.toFixed(4) + ")";
  }

  fitWordmark();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitWordmark).catch(function () {});
  }
  window.addEventListener("load", fitWordmark);
  var resizeFrame = null;
  window.addEventListener("resize", function () {
    if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(fitWordmark);
  });

  /* --- signature move: the hero photograph changes with a slow crossfade --- */
  var shots = Array.prototype.slice.call(document.querySelectorAll(".hero__shot"));
  var shotTimer = null;
  var shotIndex = 0;

  function advanceShot() {
    if (shots.length < 2) return;
    shots[shotIndex].classList.remove("is-active");
    shotIndex = (shotIndex + 1) % shots.length;
    shots[shotIndex].classList.add("is-active");
  }

  function startShots() {
    if (reduced.matches || shots.length < 2 || shotTimer || document.hidden) return;
    shotTimer = window.setInterval(advanceShot, 6500);
  }

  function stopShots() {
    if (shotTimer) {
      window.clearInterval(shotTimer);
      shotTimer = null;
    }
  }

  startShots();
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopShots();
    else startShots();
  });

  /* --- one entrance per section part, once, staggered by 70ms --- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  reveals.forEach(function (el) {
    var scope = el.closest("section, footer") || document.body;
    var peers = Array.prototype.slice.call(scope.querySelectorAll("[data-reveal]"));
    var index = peers.indexOf(el);
    var delay = Math.min(Math.max(index, 0) * 70, 210);
    el.style.setProperty("--d", delay + "ms");
  });

  function showAll() {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  if (reduced.matches || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 15% 0px", threshold: 0.05 }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
    /* Never leave content hidden if the observer misses it. */
    window.setTimeout(showAll, 3500);
  }

  /* --- live opening hours in Europe/Oslo --- */
  var hoursEl = document.getElementById("hours-status");
  var opening = {
    1: [600, 1140],
    2: [600, 1140],
    3: [600, 1140],
    4: [600, 1140],
    5: [600, 1140],
    6: [600, 960]
  };
  var dayNames = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];

  function clockText(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return h + "." + (m < 10 ? "0" + m : String(m));
  }

  function osloNow() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Oslo",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(new Date());
    var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var weekday = "Mon";
    var hour = 0;
    var minute = 0;
    parts.forEach(function (part) {
      if (part.type === "weekday") weekday = part.value;
      if (part.type === "hour") hour = parseInt(part.value, 10);
      if (part.type === "minute") minute = parseInt(part.value, 10);
    });
    return { day: map[weekday] === undefined ? 1 : map[weekday], minutes: hour * 60 + minute };
  }

  function updateHours() {
    if (!hoursEl) return;
    try {
      var now = osloNow();
      var today = opening[now.day];
      var nextDay = null;
      var next = null;

      if (today && now.minutes >= today[0] && now.minutes < today[1]) {
        hoursEl.textContent = "Åpent nå · stenger " + clockText(today[1]);
      } else {
        if (today && now.minutes < today[0]) {
          nextDay = now.day;
          next = today[0];
        } else {
          for (var step = 1; step <= 7; step += 1) {
            var day = (now.day + step) % 7;
            if (opening[day]) {
              nextDay = day;
              next = opening[day][0];
              break;
            }
          }
        }
        if (next !== null) {
          var when = nextDay === now.day ? "i dag" : dayNames[nextDay];
          hoursEl.textContent = "Stengt nå · åpner " + when + " " + clockText(next);
        }
      }

      var todayRow = document.querySelector('.hours__row[data-day="' + now.day + '"]');
      if (todayRow) todayRow.classList.add("is-today");
    } catch (error) {
      /* Keep the plain fallback sentence. */
    }
  }

  updateHours();
  window.setInterval(updateHours, 60000);
})();
