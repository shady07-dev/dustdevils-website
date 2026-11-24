/* Visionneuse plein écran : DD.visionneuse(photos, index). Flèches et Échap au clavier. */
DD.visionneuse = (() => {
  let boite, photos, i;

  const afficher = (n) => {
    i = (n + photos.length) % photos.length;
    const p = photos[i];
    const img = DD.$("img", boite);
    img.src = `assets/img/photos/${p.img}`;
    img.alt = p.legende;
    DD.$("figcaption", boite).textContent = `${p.legende}, ${p.lieu}`;
  };

  const creer = () => {
    document.body.insertAdjacentHTML("beforeend", `
      <dialog class="visionneuse" aria-label="Photo en grand">
        <figure><img src="data:," alt=""><figcaption></figcaption></figure>
        <button type="button" class="visionneuse__fermer" aria-label="Fermer">×</button>
        <button type="button" class="visionneuse__prec" aria-label="Photo précédente">‹</button>
        <button type="button" class="visionneuse__suiv" aria-label="Photo suivante">›</button>
      </dialog>`);
    boite = DD.$(".visionneuse");
    DD.$(".visionneuse__fermer", boite).onclick = () => boite.close();
    DD.$(".visionneuse__prec", boite).onclick = () => afficher(i - 1);
    DD.$(".visionneuse__suiv", boite).onclick = () => afficher(i + 1);
    boite.addEventListener("click", (e) => { if (e.target === boite) boite.close(); });
    boite.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") afficher(i - 1);
      if (e.key === "ArrowRight") afficher(i + 1);
    });
  };

  return (liste, index) => {
    if (!boite) creer();
    photos = liste;
    afficher(index);
    boite.showModal();
  };
})();
