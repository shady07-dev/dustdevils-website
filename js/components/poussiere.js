/* Poussière animée sur <canvas data-poussiere="vent|tourbillon">.
   vent : rafales horizontales, soulevées par la souris.
   tourbillon : un dust devil qui tourne sur lui-même. */
(() => {
  if (DD.mouvementReduit) return;

  DD.$$("canvas[data-poussiere]").forEach((canvas) => {
    const ctx = canvas.getContext("2d");
    const mode = canvas.dataset.poussiere;
    const souris = { x: -999, y: -999 };
    let w, h, grains, actif = false;
    const hasard = (a, b) => a + Math.random() * (b - a);

    const creer = () => mode === "vent"
      ? { x: hasard(0, w), y: h * (1 - Math.random() ** 2 * 0.8), r: hasard(0.5, 2.1), v: hasard(0.5, 2.6), vy: 0, p: hasard(0, 6.3), a: hasard(0.15, 0.6) }
      : { t: Math.random(), p: hasard(0, 6.3), v: hasard(0.015, 0.04), r: hasard(0.6, 2.2), e: hasard(0.75, 1.15), m: hasard(0.0008, 0.0026), a: hasard(0.2, 0.75) };

    const taille = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      grains = Array.from({ length: mode === "vent" ? Math.min(220, w / 6) : 420 }, creer);
    };

    const dessiner = (temps) => {
      if (!actif) return;
      ctx.clearRect(0, 0, w, h);
      for (const g of grains) {
        let x, y, a = g.a;
        if (mode === "vent") {
          const dx = g.x - souris.x, dy = g.y - souris.y, d = Math.hypot(dx, dy);
          if (d < 130) { g.vy += (dy / (d || 1)) * 0.25; g.x += (dx / (d || 1)) * 1.5; }
          g.vy *= 0.94;
          g.x += g.v;
          g.y += g.vy + Math.sin(temps / 900 + g.p) * 0.25;
          if (g.x > w + 5 || g.y < -20 || g.y > h + 20) Object.assign(g, creer(), { x: -5 });
          x = g.x; y = g.y;
        } else {
          g.p += g.v; g.t += g.m;
          if (g.t > 1) g.t = 0;
          const rayon = (0.04 + g.t ** 1.7 * 0.42) * Math.min(w, 760) * g.e;
          x = w / 2 + Math.cos(g.p) * rayon + Math.sin(temps / 1400 + g.t * 4) * 26 * g.t;
          y = h * (0.97 - g.t * 0.94) + Math.sin(g.p) * rayon * 0.16;
          a *= Math.sin(g.t * Math.PI) * (0.55 + 0.45 * Math.sin(g.p));
        }
        ctx.globalAlpha = Math.max(0, a);
        ctx.fillStyle = "#e2b98a";
        ctx.beginPath(); ctx.arc(x, y, g.r, 0, 6.3); ctx.fill();
      }
      requestAnimationFrame(dessiner);
    };

    taille();
    addEventListener("resize", taille);
    canvas.parentElement.addEventListener("pointermove", (e) => {
      const b = canvas.getBoundingClientRect();
      souris.x = e.clientX - b.left; souris.y = e.clientY - b.top;
    });
    canvas.parentElement.addEventListener("pointerleave", () => { souris.x = souris.y = -999; });
    // On ne calcule rien quand le canvas est hors écran.
    new IntersectionObserver(([e]) => {
      const avant = actif;
      actif = e.isIntersecting;
      if (actif && !avant) requestAnimationFrame(dessiner);
    }).observe(canvas);
  });
})();
