/* Åsane barber — the folder stack is the index and the live element;
   the price cards fold into spines as you scroll. */

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wide = window.matchMedia('(min-width: 1100px)');

  const folders = Array.from(document.querySelectorAll('.folder'));
  const zone = document.getElementById('zone');
  const tabs = folders.map((folder) => folder.querySelector('.tab'));

  function openFolder(index, moveFocus) {
    folders.forEach((folder, j) => {
      const open = j === index;
      const tab = folder.querySelector('.tab');
      const panel = folder.querySelector('.panel');
      folder.classList.toggle('is-open', open);
      tab.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (panel) panel.hidden = !open;
    });
    if (zone) zone.dataset.tone = folders[index].dataset.tone;
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => openFolder(i, false));
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      openFolder(next, true);
    });
  });

  folders.forEach((folder, i) => {
    folder.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      openFolder(i, false);
    });
  });

  if (folders.length) openFolder(folders.length - 1, false);

  const pin = document.getElementById('pin');
  const deck = document.getElementById('deck');
  const cards = deck ? Array.from(deck.querySelectorAll('.card')) : [];
  let state = 0;
  let queued = 0;

  function metrics() {
    const cardWidth = cards[0] ? cards[0].getBoundingClientRect().width : 0;
    const spineWidth = Math.min(120, Math.max(96, window.innerWidth * 0.083));
    return { cardWidth, spineWidth, deckWidth: deck ? deck.clientWidth : 0 };
  }

  function placeDeck() {
    if (!cards.length) return;
    const { cardWidth, spineWidth, deckWidth } = metrics();
    cards.forEach((card, j) => {
      let x;
      if (j <= state) {
        x = j * spineWidth;
      } else {
        x = deckWidth - 22 * (cards.length - j);
      }
      card.style.transform = 'translateX(' + Math.round(x) + 'px)';
      card.classList.toggle('is-on', j === state);
      card.classList.toggle('is-folded', j < state);
      card.classList.toggle('is-pile', j > state);
    });
  }

  function clearDeck() {
    cards.forEach((card) => {
      card.style.transform = '';
      card.classList.remove('is-on', 'is-folded', 'is-pile');
    });
  }

  function pinned() {
    return Boolean(pin && deck) && wide.matches && !reduce.matches;
  }

  function onScroll() {
    if (!pinned()) return;
    const span = pin.offsetHeight - window.innerHeight;
    if (span <= 0) return;
    const progress = Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / span));
    const next = Math.min(cards.length - 1, Math.floor(progress * cards.length));
    if (next !== state) {
      state = next;
      placeDeck();
    }
  }

  function updateDeck() {
    if (pinned()) {
      placeDeck();
      onScroll();
    } else {
      state = 0;
      clearDeck();
    }
  }

  if (deck) {
    deck.addEventListener('focusin', (event) => {
      const card = event.target.closest('.card');
      if (!card || !pinned()) return;
      const index = cards.indexOf(card);
      if (index > -1 && index !== state) {
        state = index;
        placeDeck();
      }
    });
    deck.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (!card || !pinned()) return;
      const index = cards.indexOf(card);
      if (index > -1 && index !== state) {
        event.preventDefault();
        state = index;
        placeDeck();
      }
    });
    window.addEventListener('scroll', () => {
      if (queued) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        onScroll();
      });
    }, { passive: true });
    window.addEventListener('resize', updateDeck);
    if (wide.addEventListener) wide.addEventListener('change', updateDeck);
    if (reduce.addEventListener) reduce.addEventListener('change', updateDeck);
    updateDeck();
  }

  const reveals = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }
})();
