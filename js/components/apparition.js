/* Fait monter les éléments [data-apparait] à l'entrée dans l'écran. */
(() => {
  if (DD.mouvementReduit || !("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.remove("a-venir");
      obs.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  /* À rappeler après avoir injecté du contenu. */
  DD.observer = () => DD.$$("[data-apparait]:not([data-suivi])").forEach((el) => {
    el.dataset.suivi = "";
    if (el.getBoundingClientRect().top < innerHeight) return; // déjà visible
    el.classList.add("a-venir");
    obs.observe(el);
  });
  DD.observer();
})();
