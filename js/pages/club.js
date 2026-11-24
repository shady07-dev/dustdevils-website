/* Le club : hiérarchie générée depuis les données + route qui avance au défilement. */
(() => {
  const grades = Object.entries(DD.site.grades).filter(([cle]) => cle !== "first-9");
  DD.$("#hierarchie").innerHTML = grades.map(([cle, g]) => {
    const titulaires = DD.membres.filter((m) => m.grades.includes(cle));
    const noms = titulaires.length
      ? titulaires.map((m) => `<a href="membre.html?id=${m.id}">${m.prenom} ${m.nom}</a>`).join(", ")
      : `<a href="rejoindre.html">Place à prendre</a>`;
    return `<li><div>${DD.patch(cle)}</div><p><strong>${g.titre}</strong> ${g.role}</p><p class="rang__nom">${noms}</p></li>`;
  }).join("");

  const route = DD.$(".route");
  const avancer = () => {
    const b = route.getBoundingClientRect();
    const part = (innerHeight * 0.6 - b.top) / b.height;
    route.style.setProperty("--avance", Math.min(1, Math.max(0, part)));
  };
  addEventListener("scroll", avancer, { passive: true });
  addEventListener("resize", avancer);
  avancer();
})();
