/* Accueil : cartes des membres et léger effet de profondeur sur le hero. */
(() => {
  DD.$("#equipe").innerHTML = DD.membres.map(DD.carteMembre).join("");
  if (DD.mouvementReduit) return;
  const photo = DD.$(".hero__photo");
  addEventListener("scroll", () => {
    if (scrollY < innerHeight) photo.style.translate = `0 ${scrollY * 0.18}px`;
  }, { passive: true });
})();
