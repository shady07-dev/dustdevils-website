/* Membres : cartes générées depuis js/data/membres.js */
(() => {
  DD.$("#equipe").innerHTML = DD.membres.map(DD.carteMembre).join("");
})();
