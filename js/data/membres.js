/* Fiches des membres, dans l'ordre d'affichage.
   Ajouter un membre : 1) une fiche ici  2) une photo dans assets/img/membres/
   3) son histoire dans js/data/histoires/<id>.js */
window.DD = window.DD || {};

DD.membres = [
  {
    id: "rick", prenom: "Rick", nom: "Anderson", grades: ["president"],
    photo: "rick.webp",
    accroche: "Le fils de Marty reprend le club de son père. Méfiant, rancunier, bon vivant, et fidèle à la parole donnée.",
    citation: "Nos pères ont écrit les premières pages. À nous de faire en sorte que leur histoire ne s'arrête jamais.",
    infos: { "Âge": "32 ans", "Famille": "Fils de Marty Anderson, cousin de Mike Armstrong", "Grade": "Président" },
    traits: ["Imprévisible", "Méfiant", "Loyal", "Bon vivant", "Rancunier"],
    liens: { travis: "Frère de cœur", mike: "Cousin", earl: "Frère d'armes de son père" }
  },
  {
    id: "travis", prenom: "Travis", nom: "Cooper", grades: ["vice-president"],
    photo: "travis.webp",
    accroche: "Grande gueule, voix grave, toujours une connerie en tête. La moto est sa thérapie, le club la famille qu'il n'a pas eue.",
    citation: "C'est loin d'être un homme parfait. Mais c'est mon vieux. Tant qu'il sera là, je ferai en sorte qu'il manque de rien.",
    infos: { "Âge": "30 ans", "Origine": "Sandy Shores / Paleto Bay", "Famille": "Fils d'Earl Cooper", "Grade": "Vice-président" },
    traits: ["Grande gueule", "Provocateur", "Déconneur", "Fidèle", "Impulsif"],
    liens: { earl: "Son père", rick: "Frère de cœur", mike: "Ami d'enfance" }
  },
  {
    id: "earl", prenom: "Earl", nom: "Cooper", grades: ["secretary", "first-9"],
    photo: "earl.webp",
    accroche: "Ancien Marine, fondateur du club, patron du Tumbleweed. Un cigare au coin des lèvres et peu de patience pour les excuses.",
    citation: "Un frère ne se laisse jamais tomber.",
    infos: { "Âge": "56 ans", "Naissance": "25 mars 1970, Sandy Shores", "Métier": "Propriétaire du Tumbleweed", "Grade": "Secrétaire, ancien vice-président" },
    traits: ["Bourru", "Vieille école", "Loyal", "Protecteur", "Rancunier"],
    liens: { travis: "Son fils", rick: "Presque un neveu", mike: "Lui a appris la mécanique" }
  },
  {
    id: "mike", prenom: "Mike", nom: "Armstrong", grades: ["sergeant"],
    photo: "", // pas encore de photo : le diable du club s'affiche à la place
    accroche: "Le sang chaud des Anderson sous un autre nom. Il répare les machines du club et règle ses problèmes.",
    citation: "Mon oncle m'a appris à réparer ce qui est cassé. Le Dust Devil, on va le remettre sur la route.",
    infos: { "Âge": "29 ans", "Origine": "Sandy Shores / Paleto Bay", "Famille": "Neveu de Marty Anderson, cousin de Rick", "Grade": "Sergent d'armes" },
    traits: ["Nerveux", "Méfiant", "Mécano", "Têtu", "Pince-sans-rire"],
    liens: { rick: "Cousin", travis: "Comme un grand frère", earl: "Son mentor au garage" }
  }
];
