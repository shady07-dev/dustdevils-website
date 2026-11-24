/* Réglages généraux : menu, grades, lien Discord. */
window.DD = window.DD || {};

DD.site = {
  nom: "Dust Devils MC",
  // Invitation Discord. Vide = bouton désactivé.
  discord: "https://discord.gg/R6D7M2tH7t",
  menu: [
    { page: "index", titre: "Accueil" },
    { page: "club", titre: "Le club" },
    { page: "lois", titre: "Les lois" },
    { page: "membres", titre: "Membres" },
    { page: "tumbleweed", titre: "Tumbleweed" },
    { page: "galerie", titre: "Galerie" },
    { page: "rejoindre", titre: "Rejoindre", patch: true }
  ],
  // Grades dans l'ordre hiérarchique. Sans "img", le patch est dessiné en CSS.
  grades: {
    "president": { titre: "Président", patch: "President", img: "president.webp", role: "Donne la direction et parle au nom du club." },
    "vice-president": { titre: "Vice-président", patch: "Vice-President", img: "vice-president.webp", role: "Aux côtés du président, prêt à prendre le relais." },
    "secretary": { titre: "Secrétaire", patch: "Secretary", img: "secretary.webp", role: "Garde un œil sur les affaires et la mémoire du MC." },
    "sergeant": { titre: "Sergent d'armes", patch: "Sgt at Arms", role: "Veille sur la sécurité et fait respecter les règles." },
    "road-captain": { titre: "Road captain", patch: "Road Captain", img: "road-captain.webp", role: "Ouvre la route pendant les virées." },
    "prospect": { titre: "Prospect", patch: "Prospect", img: "prospect.webp", role: "Doit encore mériter ses couleurs." },
    "first-9": { titre: "First 9", patch: "First 9", img: "first-9.webp", role: "Membre fondateur du club." }
  }
};
