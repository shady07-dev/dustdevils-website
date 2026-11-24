/* Dossier d'un membre : membre.html?id=rick
   L'histoire est chargée à la demande depuis js/data/histoires/<id>.js */
(() => {
  const id = new URLSearchParams(location.search).get("id") || DD.membres[0].id;
  const m = DD.trouverMembre(id);
  const racine = DD.$("#dossier");

  if (!m) {
    racine.innerHTML = `<section class="introuvable conteneur"><h1>Membre introuvable</h1><p>Personne ne porte ce nom au club.</p><a class="bouton" href="membres.html">Voir les membres</a></section>`;
    return;
  }

  const rang = DD.membres.indexOf(m);
  const suivant = DD.membres[(rang + 1) % DD.membres.length];
  document.title = `${m.prenom} ${m.nom} | Dust Devils MC`;

  racine.innerHTML = `
    <section class="dossier">
      <div class="conteneur dossier__grille">
        <div class="dossier__photo">${DD.photoMembre(m, `${m.prenom} ${m.nom}`)}</div>
        <div class="dossier__texte">
          <a class="retour" href="membres.html">Tous les membres</a>
          <h1>${m.prenom}<br>${m.nom}</h1>
          <div class="dossier__patchs">${m.grades.map(DD.patch).join("")}</div>
          <p class="chapo">${m.accroche}</p>
          <dl>${Object.entries(m.infos).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
          <ul class="traits">${m.traits.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
    <section class="histoire clair">
      <div class="conteneur histoire__grille">
        <nav class="sommaire" aria-label="Chapitres"><ol></ol></nav>
        <div class="histoire__texte"></div>
      </div>
    </section>
    <section class="citation-bande"><blockquote class="conteneur">« ${m.citation} »</blockquote></section>
    <section class="section">
      <div class="conteneur">
        <h2>Ses liens</h2>
        <ul class="liens">${Object.entries(m.liens).map(([cle, lien]) => {
          const ami = DD.trouverMembre(cle);
          return `<li><a href="membre.html?id=${cle}">${DD.photoMembre(ami)}<span><strong>${ami.prenom} ${ami.nom}</strong>${lien}</span></a></li>`;
        }).join("")}</ul>
        <p class="suite"><a class="bouton" href="membre.html?id=${suivant.id}">Dossier suivant : ${suivant.prenom}</a></p>
      </div>
    </section>`;

  const bloc = (b) => {
    if (typeof b === "string") return `<p>${b}</p>`;
    if (b.type === "citation") return `<blockquote>${b.texte}</blockquote>`;
    if (b.type === "sous-titre") return `<h3>${b.texte}</h3>`;
    return `<ul>${b.items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  };

  const afficherHistoire = () => {
    const chapitres = DD.histoires[m.id];
    DD.$(".sommaire ol").innerHTML = chapitres.map((c, i) => `<li><a href="#chapitre-${i + 1}">${c.titre}</a></li>`).join("");
    DD.$(".histoire__texte").innerHTML = chapitres.map((c, i) =>
      `<article id="chapitre-${i + 1}"><h2>${c.titre}</h2>${c.contenu.map(bloc).join("")}</article>`).join("");
    if (location.hash) DD.$(location.hash)?.scrollIntoView();

    // Surligne le chapitre en cours de lecture
    const obs = new IntersectionObserver((entrees) => entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      DD.$$(".sommaire a").forEach((a) => a.toggleAttribute("aria-current", a.hash === `#${e.target.id}`));
    }), { rootMargin: "-25% 0px -65% 0px" });
    DD.$$(".histoire article").forEach((a) => obs.observe(a));
  };

  const script = document.createElement("script");
  script.src = `js/data/histoires/${m.id}.js`;
  script.onload = afficherHistoire;
  script.onerror = () => { DD.$(".histoire__texte").innerHTML = "<p>Son histoire n'est pas encore écrite.</p>"; };
  document.head.append(script);
})();
