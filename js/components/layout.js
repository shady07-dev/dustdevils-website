/* En-tête et pied de page communs. La page active vient de <body data-page="...">. */
(() => {
  const active = document.body.dataset.page;
  const liens = DD.site.menu.map((l) => `
    <li><a href="${l.page}.html" class="${l.patch ? "nav__patch" : ""}"${l.page === active ? ' aria-current="page"' : ""}>${l.titre}</a></li>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="evitement" href="#contenu">Aller au contenu</a>
    <header class="entete">
      <div class="entete__barre">
        <a class="entete__logo" href="index.html"><img src="assets/img/logos/banniere.webp" width="900" height="167" alt="Dust Devil, accueil"></a>
        <button class="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Menu"><span></span><span></span></button>
        <nav class="nav" id="menu" aria-label="Menu principal"><ul>${liens}</ul></nav>
      </div>
    </header>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="pied">
      <div class="conteneur pied__grille">
        <img src="assets/img/logos/patch-complet.webp" width="1000" height="1028" alt="Patch Dust Devils MC Grapeseed" loading="lazy">
        <div><p class="pied__titre">Dust Devils MC</p><p>Grapeseed, Blaine County, San Andreas</p>${DD.site.discord ? `<p><a href="${DD.site.discord}" target="_blank" rel="noopener">Discord du club</a></p>` : ""}</div>
        <ul>${DD.site.menu.map((l) => `<li><a href="${l.page}.html">${l.titre}</a></li>`).join("")}</ul>
      </div>
      <p class="conteneur pied__note">Projet de jeu de rôle. Personnages et événements fictifs. Site de fans sans lien avec Rockstar Games ni Take-Two Interactive.</p>
    </footer>`);

  const entete = DD.$(".entete");
  const burger = DD.$(".burger");
  const ouvrir = (etat) => {
    entete.classList.toggle("est-ouverte", etat);
    burger.setAttribute("aria-expanded", etat);
  };
  burger.addEventListener("click", () => ouvrir(!entete.classList.contains("est-ouverte")));
  addEventListener("keydown", (e) => { if (e.key === "Escape") ouvrir(false); });

  const auDefilement = () => entete.classList.toggle("est-pleine", scrollY > 40);
  addEventListener("scroll", auDefilement, { passive: true });
  auDefilement();

  DD.$$("[data-discord]").forEach((el) => { el.innerHTML = DD.boutonDiscord(el.dataset.discord); });
})();
