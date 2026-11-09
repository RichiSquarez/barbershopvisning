(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var targets = document.querySelectorAll('.method, .catalogue > h2, .rows > li, .closing h2, .facts > p, footer > *');
  for (var i = 0; i < targets.length; i++) targets[i].classList.add('reveal');

  if (!('IntersectionObserver' in window)) {
    for (var j = 0; j < targets.length; j++) targets[j].classList.add('is-in');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    var shown = 0;
    for (var k = 0; k < entries.length; k++) {
      var e = entries[k];
      if (!e.isIntersecting) continue;
      var el = e.target;
      var delay = 0;
      if (el.parentElement && el.parentElement.classList.contains('rows')) {
        var sibs = el.parentElement.children;
        for (var m = 0; m < sibs.length; m++) if (sibs[m] === el) { delay = Math.min(m, 4) * 70; }
      }
      el.style.transitionDelay = delay + 'ms';
      el.classList.add('is-in');
      io.unobserve(el);
      shown++;
    }
    return shown;
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  for (var n = 0; n < targets.length; n++) io.observe(targets[n]);
})();
