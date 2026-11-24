/* Galerie : grille générée depuis js/data/galerie.js */
(() => {
  const grille = DD.$("#photos");
  grille.innerHTML = DD.galerie.map((p, i) => `
    <button type="button" class="photo${p.large ? " photo--large" : ""}" data-index="${i}">
      <img src="assets/img/photos/${p.img}" width="${p.w}" height="${p.h}" alt="${p.legende}" ${i > 2 ? 'loading="lazy"' : ""}>
      <span><strong>${p.legende}</strong>${p.lieu}</span>
    </button>`).join("");
  grille.addEventListener("click", (e) => {
    const b = e.target.closest("[data-index]");
    if (b) DD.visionneuse(DD.galerie, Number(b.dataset.index));
  });
})();
