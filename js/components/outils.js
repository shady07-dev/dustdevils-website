/* Petites fonctions partagées par toutes les pages. */
window.DD = window.DD || {};

DD.$ = (selecteur, racine = document) => racine.querySelector(selecteur);
DD.$$ = (selecteur, racine = document) => [...racine.querySelectorAll(selecteur)];
DD.mouvementReduit = matchMedia("(prefers-reduced-motion: reduce)").matches;

DD.trouverMembre = (id) => DD.membres.find((m) => m.id === id);

/* Patch de grade : image si elle existe, sinon version CSS. */
DD.patch = (cle) => {
  const g = DD.site.grades[cle];
  return g.img
    ? `<img class="patch" src="assets/img/patchs/${g.img}" width="520" height="108" alt="${g.patch}">`
    : `<span class="patch patch--texte">${g.patch}</span>`;
};

/* Photo d'un membre, ou le diable du club s'il n'en a pas encore. */
DD.photoMembre = (m, alt = "") => m.photo
  ? `<img src="assets/img/membres/${m.photo}" alt="${alt}" loading="lazy">`
  : `<img class="sans-photo" src="assets/img/logos/diable.webp" alt="${alt && `${alt}, photo à venir`}" loading="lazy">`;

DD.carteMembre = (m) => `
  <a class="carte-membre" href="membre.html?id=${m.id}">
    <span class="carte-membre__photo">${DD.photoMembre(m)}</span>
    <span class="carte-membre__patchs">${m.grades.map(DD.patch).join("")}</span>
    <span class="carte-membre__nom">${m.prenom} ${m.nom}</span>
    <span class="carte-membre__texte">${m.accroche}</span>
  </a>`;

/* Bouton Discord, désactivé tant que l'invitation n'est pas renseignée. */
DD.boutonDiscord = (texte) => DD.site.discord
  ? `<a class="bouton" href="${DD.site.discord}" target="_blank" rel="noopener">${texte}</a>`
  : `<span class="bouton bouton--inactif">Discord bientôt ouvert</span>`;
