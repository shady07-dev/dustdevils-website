/* Les lois : liste générée depuis js/data/lois.js. Lien direct possible : lois.html#loi-4 */
(() => {
  DD.$("#lois").innerHTML = DD.lois.map((l, i) => `
    <li id="loi-${i + 1}" data-apparait>
      <span class="loi__numero" aria-hidden="true">${i + 1}</span>
      <div><h2>${l.titre}</h2>${l.textes.map((t) => `<p>${t}</p>`).join("")}</div>
    </li>`).join("");
  if (location.hash) DD.$(location.hash)?.scrollIntoView();
})();
