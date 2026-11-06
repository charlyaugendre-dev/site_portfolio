// =============================================================
//  TOUT LE CONTENU DU SITE EST DANS CE FICHIER.
//  Pour modifier un texte, tu modifies ici, pas dans les pages.
//  Les marqueurs [À COMPLÉTER] signalent ce qu'il te reste à remplir.
// =============================================================

export const profil = {
  prenom: 'Charly',
  nom: 'Augendre',
  titre: 'Étudiant en BUT 3 GEA, parcours gestion comptable, fiscale et financière',
  sousTitre: 'Fondateur d\'applications mobiles et créateur de contenu',
  accroche:
    'Je me forme à la gestion comptable, fiscale et financière à l\'IUT de l\'Indre, et en parallèle je conçois et je lance mes propres applications iOS. Deux terrains différents, une même logique : comprendre les chiffres, les rendre fiables et en tirer des décisions.',
  localisation: 'Châteauroux, Indre (36)',
  email: 'charlyaugendre36@gmail.com',
  linkedin: 'https://www.linkedin.com/in/[À COMPLÉTER]',
  // Dépose ton CV dans le dossier public/ et mets ici './cv-charly-augendre.pdf'
  // Laisse la chaîne vide pour masquer le bouton.
  cvUrl: '',
  // Dépose ta photo dans public/ (par exemple photo.jpg) et mets './photo.jpg'
  photoUrl: '',
  disponibilite: 'Recherche un stage du 25 février au 15 mai 2027',
}

export const chiffresCles = [
  { valeur: '2', libelle: 'applications iOS conçues et développées' },
  { valeur: '10 sem.', libelle: 'de stage en cabinet d\'expertise comptable' },
  { valeur: '3 ans', libelle: 'de pratique sportive assidue et de discipline' },
]

// -------------------------------------------------------------
//  À PROPOS
// -------------------------------------------------------------
export const apropos = {
  intro:
    'Je suis quelqu\'un qui a besoin de construire. Pas seulement d\'apprendre une matière, mais d\'en faire quelque chose de concret. C\'est le fil rouge de mon parcours depuis trois ans.',
  chapitres: [
    {
      cle: 'Le parcours',
      titre: 'La gestion comme socle',
      texte:
        'J\'ai choisi le BUT GEA puis le parcours gestion comptable, fiscale et financière parce que c\'est la discipline qui explique comment une entreprise tient debout. La comptabilité n\'est pas un exercice administratif pour moi, c\'est la matière première de toute décision. Mon stage en cabinet d\'expertise comptable m\'a confirmé que je voulais maîtriser cette chaîne de bout en bout, de la pièce justificative à la déclaration fiscale.',
    },
    {
      cle: 'L\'entrepreneuriat',
      titre: 'Construire mes propres projets',
      texte:
        'En parallèle de mes études, j\'ai créé une micro-entreprise et lancé deux applications iOS. LUCIDE, une application de suivi nutritionnel destinée aux sportifs, est publiée sur l\'App Store et compte ses premiers abonnés payants. SKAN, une application d\'analyse physique, est en cours de développement. J\'ai tout mené moi-même : l\'idée, le positionnement, le développement, l\'image de marque et l\'acquisition.',
    },
    {
      cle: 'La méthode',
      titre: 'Apprendre vite, livrer vraiment',
      texte:
        'Je n\'avais aucune base en développement avant de commencer. J\'ai appris en construisant, en me trompant et en recommençant. C\'est la compétence dont je suis le plus fier : être capable de partir d\'un sujet que je ne maîtrise pas et d\'arriver à un résultat livré, utilisé par de vraies personnes.',
    },
    {
      cle: 'Les valeurs',
      titre: 'Exactitude, autonomie, constance',
      texte:
        'L\'exactitude parce qu\'un chiffre faux fait prendre une mauvaise décision. L\'autonomie parce que j\'ai pris l\'habitude d\'aller chercher l\'information plutôt que de l\'attendre. La constance parce que mes résultats, en sport comme en projet, viennent toujours de la répétition sur la durée plutôt que d\'un coup d\'éclat.',
    },
    {
      cle: 'La suite',
      titre: 'Où je vais',
      texte:
        'Je cherche un stage de fin de BUT du 25 février au 15 mai 2027, idéalement en cabinet, en direction financière ou en contrôle de gestion. Je veux une mission où l\'on produit de la donnée fiable et où l\'on s\'en sert pour conseiller. À plus long terme, je continuerai à développer mes projets en parallèle.',
    },
  ],
  motsCles: ['Comptabilité', 'Contrôle de gestion', 'Fiscalité', 'Entrepreneuriat', 'Produit', 'Autonomie'],
}

// -------------------------------------------------------------
//  MA PASSION
// -------------------------------------------------------------
export const passion = {
  titre: 'Le sport et la création de contenu',
  chapo:
    'La musculation m\'accompagne depuis bientôt trois ans. Elle m\'a appris la régularité avant de m\'apprendre quoi que ce soit d\'autre. De cette passion est née une activité de créateur de contenu, puis une application, puis un vrai sujet professionnel.',
  recit: [
    'J\'ai commencé à m\'entraîner sans méthode, comme tout le monde. Ce qui a changé les choses, c\'est le moment où j\'ai arrêté d\'improviser : suivi des séances, suivi de l\'alimentation, mesure des progrès. Le même réflexe que celui qu\'on applique à un tableau de bord d\'entreprise, appliqué à soi.',
    'J\'ai ensuite voulu partager cette méthode. J\'ai lancé un compte de contenu sportif où je publie des formats courts sur la progression et les erreurs de débutant. J\'ai appris à écrire des accroches, à tester, à lire mes statistiques et à corriger. Certaines publications dépassent les dizaines de milliers de vues, d\'autres non, et c\'est précisément en comparant les deux que j\'ai compris ce qui fonctionne.',
    'Cette activité m\'a amené à travailler avec une marque dans le cadre d\'un partenariat, et surtout à créer LUCIDE pour répondre au besoin que je constatais chez les gens qui me suivaient.',
  ],
  madSkills: [
    {
      titre: 'Lire une donnée d\'audience',
      texte:
        'Taux de likes, taux d\'enregistrement, rétention. J\'ai pris l\'habitude de décider à partir de chiffres plutôt qu\'à l\'instinct, et de tester une variable à la fois.',
    },
    {
      titre: 'Écrire pour être compris',
      texte:
        'Faire passer une idée en trois phrases, sans jargon. Une compétence que je réutilise directement pour présenter un travail ou une analyse.',
    },
    {
      titre: 'Tenir dans la durée',
      texte:
        'Publier et s\'entraîner quand ça ne donne pas de résultat immédiat. C\'est ce qui m\'a appris à ne pas abandonner un projet au premier mur.',
    },
    {
      titre: 'S\'adresser à une autre culture',
      texte:
        'Mon audience principale est américaine. J\'ai dû adapter mes codes, mon rythme et mes références pour être lu par des gens qui ne partagent pas les miens.',
    },
  ],
}

// -------------------------------------------------------------
//  RÉALISATIONS À L'UNIVERSITÉ (SAÉ de BUT 2)
//  ⚠️ À compléter avec la SAÉ de BUT 2 que tu veux mettre en avant.
// -------------------------------------------------------------
export const realisationsUniversite = [
  {
    titre: 'SAÉ Créa Campus : création du restaurant PUMP',
    periode: 'BUT 2, semestre 3, projet rendu en décembre 2025',
    role: 'Membre d\'une équipe de 5 étudiants, intervenant sur l\'ensemble des volets',
    contexte:
      'La SAÉ Créa Campus nous demandait de construire un projet de création d\'entreprise complet, de l\'étude de marché jusqu\'aux aspects juridiques et financiers. En équipe de cinq, nous avons monté PUMP, un restaurant de bowls implanté à Tours, centré sur la transparence nutritionnelle. L\'idée est partie d\'un constat que nous vivions nous-mêmes : manger équilibré quand on est étudiant et sportif demande un temps et une information que personne n\'a vraiment.',
    objectifs: [
      'Vérifier qu\'un besoin réel existait avant de dessiner l\'offre, plutôt que l\'inverse',
      'Construire un concept différenciant et cohérent avec le marché local',
      'Sécuriser le projet sur le plan juridique et démontrer la viabilité du modèle économique',
    ],
    demarche: [
      'Analyse macro-environnementale du secteur de la restauration par la méthode PESTE',
      'Enquête terrain qualitative : guide d\'entretien commun, sept entretiens semi-directifs de vingt à trente-six minutes, dont deux auprès de professionnels, une diététicienne et un chef cuisinier',
      'Retranscription, analyse thématique et synthèse comparative des entretiens',
      'Étude de la concurrence directe et indirecte, puis identification des facteurs clés de succès',
      'Construction de l\'offre et des personas, puis choix de la forme juridique et cadrage du modèle économique',
    ],
    contribution:
      'J\'ai travaillé sur l\'ensemble des parties du dossier plutôt que sur un seul bloc : conduite et exploitation d\'entretiens, analyse de l\'environnement et de la concurrence, construction de l\'offre, et traitement des volets juridique et financier. Le choix de la SAS a été argumenté sur quatre critères, la souplesse statutaire, la limitation de la responsabilité aux apports, la flexibilité fiscale entre impôt sur les sociétés et option temporaire à l\'impôt sur le revenu, et la capacité d\'évolution vers un second établissement. J\'ai aussi veillé à la cohérence d\'ensemble du dossier, pour que le concept final découle réellement de ce que l\'enquête avait montré.',
    resultats: [
      'Dossier complet de 56 pages couvrant l\'étude de marché, le concept, le juridique et le financier',
      'Soutenance orale de 20 minutes devant le jury',
      'Note de 14 à 15 sur 20 pour l\'ensemble dossier et oral',
    ],
    reflexion: {
      reussi:
        'Avoir commencé par le terrain. Les sept entretiens ont fait émerger des attentes que nous n\'avions pas anticipées, notamment le fait que les gens ne cherchent pas des menus spécialisés mais de la lisibilité sur ce qu\'ils mangent. Cela a directement orienté le concept vers une carte courte et transparente au lieu d\'une offre large. Le travail en équipe de cinq a également tenu, chacun ayant pu intervenir sur plusieurs volets sans cloisonnement.',
      ameliorer:
        'La partie financière est restée au stade de l\'ébauche. Avec le recul, c\'est là que le dossier était le plus fragile : nous avons décrit un modèle économique de façon qualitative sans aller jusqu\'au chiffrage, compte de résultat prévisionnel, seuil de rentabilité et plan de financement. C\'est précisément ce qu\'un jury attend d\'un parcours comptable et financier, et c\'est ce que je traiterais en priorité aujourd\'hui. À cinq, nous aurions aussi gagné à répartir plus tôt des responsabilités claires sur chaque partie.',
      savoirs:
        'Méthodologie de l\'étude de marché, analyse PESTE, formes juridiques des sociétés et régimes fiscaux associés, structure d\'un modèle économique en restauration.',
      savoirFaire:
        'Construction d\'un guide d\'entretien, conduite d\'entretiens semi-directifs, analyse thématique de données qualitatives, rédaction argumentée avec appareil bibliographique sourcé, prise de parole en soutenance.',
      savoirEtre:
        'Travail en équipe sur un projet long, écoute en situation d\'entretien face à des professionnels, capacité à défendre un choix argumenté à l\'oral.',
    },
    competences: [
      'Analyser : intégrer l\'impact des enjeux sur l\'organisation',
      'Décider : exploiter les données pour accompagner la prise de décision',
      'Piloter : mener un projet collaboratif',
    ],
  },
  {
    titre: 'Cas de contrôle de gestion : Ateliers Roche',
    periode: 'BUT 2, année universitaire 2025-2026',
    role: 'Travail individuel',
    contexte:
      'Étude de cas de contrôle de gestion portant sur une entreprise industrielle fictive, les Ateliers Roche, utilisée en travaux dirigés pour mettre en application les méthodes de prévision et de budgétisation.',
    objectifs: [
      'Construire les budgets d\'exploitation à partir des données prévisionnelles',
      'Produire les documents de synthèse prévisionnels et les commenter',
    ],
    demarche: [
      'Analyse des données de départ et choix des méthodes de prévision adaptées',
      'Construction des budgets puis du compte de résultat et du bilan prévisionnels',
      'Contrôle de la cohérence d\'ensemble et interprétation des écarts',
    ],
    contribution:
      'J\'ai traité l\'intégralité du cas, de la prévision des ventes jusqu\'aux documents de synthèse, en vérifiant systématiquement l\'équilibre des résultats produits.',
    resultats: [
      'Jeu complet de budgets et de documents prévisionnels cohérents',
      'Lecture des écarts et des points de tension de trésorerie',
    ],
    reflexion: {
      reussi:
        'La rigueur du bouclage : j\'ai pris l\'habitude de ne jamais passer à l\'étape suivante sans avoir vérifié que la précédente s\'équilibrait.',
      ameliorer:
        'J\'ai passé trop de temps sur le calcul et pas assez sur le commentaire. Un contrôleur de gestion est jugé sur son analyse, pas sur sa capacité à poser un tableau.',
      savoirs: 'Méthodes de prévision, construction budgétaire, articulation des documents de synthèse.',
      savoirFaire: 'Modélisation sur tableur, contrôle de cohérence, lecture d\'écarts.',
      savoirEtre: 'Méthode, patience, vérification systématique.',
    },
    competences: ['Évaluer : outils d\'analyse et de prévision de l\'activité'],
  },
]

// -------------------------------------------------------------
//  RÉALISATIONS PROFESSIONNELLES (BUT 2)
// -------------------------------------------------------------
export const realisationsPro = [
  {
    titre: 'Stage en cabinet d\'expertise comptable',
    organisation: 'FIDUCIAL Expertise, La Châtre',
    periode: 'BUT 2, [À COMPLÉTER : dates exactes du stage]',
    role: 'Stagiaire en comptabilité',
    contexte:
      'Cabinet d\'expertise comptable de proximité accompagnant des TPE et PME locales. Le secteur vit une transformation numérique rapide, accélérée par la réforme de la facturation électronique, qui change la façon dont la donnée entre dans le cabinet.',
    objectifs: [
      'Participer à la chaîne comptable complète sur des dossiers clients réels',
      'Comprendre comment le cabinet sécurise la fiabilité de l\'information produite',
    ],
    demarche: [
      'Numérisation et classement des pièces, puis saisie des écritures',
      'Rapprochements bancaires et lettrage des comptes de tiers',
      'Préparation des déclarations de TVA (CA3)',
      'Prise en main des outils du cabinet : SIS-IA, Espace GED et Facilia',
    ],
    contribution:
      'J\'ai pris en charge des dossiers de A à Z sous la supervision de ma tutrice, en traitant la chaîne du document jusqu\'à la déclaration. J\'ai également rédigé un rapport d\'une quarantaine de pages dont la problématique portait sur la façon dont la maîtrise de la chaîne comptable conditionne la fiabilité de la donnée dans un secteur en transformation numérique.',
    resultats: [
      'Dossiers traités et validés par la tutrice',
      'Rapport de stage d\'une quarantaine de pages et soutenance orale devant le jury',
    ],
    reflexion: {
      reussi:
        'Mon autonomie est montée vite. Au bout de quelques semaines, je traitais mes dossiers sans avoir besoin qu\'on repasse derrière chaque écriture.',
      ameliorer:
        'J\'ai d\'abord cherché à aller vite plutôt qu\'à comprendre la logique du dossier. J\'ai compris qu\'en comptabilité, une saisie rapide mais mal rattachée coûte bien plus de temps à corriger.',
      savoirs:
        'Plan comptable, mécanique de la TVA, obligations déclaratives, enjeux de la facturation électronique.',
      savoirFaire:
        'Saisie, rapprochement bancaire, lettrage, préparation d\'une CA3, utilisation d\'un logiciel métier et d\'une GED.',
      savoirEtre:
        'Discrétion sur des données confidentielles, rigueur, capacité à demander une validation au bon moment.',
    },
    competences: [
      'Produire : contrôler et sécuriser l\'information comptable et fiscale',
      'Analyser : identifier et évaluer les processus de l\'organisation',
    ],
  },
  {
    titre: 'Création et lancement de LUCIDE, application iOS',
    organisation: 'Projet personnel, micro-entreprise',
    periode: 'Depuis 2025, lancement sur l\'App Store en 2026',
    role: 'Fondateur, de l\'idée à la commercialisation',
    contexte:
      'Les applications de suivi nutritionnel existantes visent le grand public. J\'ai identifié un besoin non couvert chez les pratiquants réguliers de musculation, qui cherchent de la précision et une expérience soignée plutôt qu\'un outil généraliste.',
    objectifs: [
      'Concevoir et publier une application de suivi nutritionnel premium sur l\'App Store',
      'Acquérir les premiers utilisateurs payants sans budget publicitaire',
    ],
    demarche: [
      'Définition du positionnement et de l\'identité de marque autour de l\'exactitude',
      'Développement de l\'application et conception de l\'interface',
      'Publication sur l\'App Store et mise en place du modèle d\'abonnement',
      'Acquisition par le contenu, en intégrant l\'application à ma ligne éditoriale',
    ],
    contribution:
      'J\'ai porté le projet seul : positionnement, développement, identité visuelle, mise en ligne et acquisition.',
    resultats: [
      'Application publiée et disponible sur l\'App Store',
      'Premiers abonnés payants acquis uniquement par le contenu organique',
    ],
    reflexion: {
      reussi:
        'Le fait d\'avoir une audience avant d\'avoir un produit. J\'ai pu valider le besoin auprès de vraies personnes plutôt que de supposer.',
      ameliorer:
        'J\'ai passé trop de temps sur des détails d\'identité visuelle avant d\'avoir confronté le produit aux utilisateurs. La prochaine fois, je sortirai une version plus tôt.',
      savoirs:
        'Modèle économique par abonnement, cadre de la micro-entreprise et obligations déclaratives associées.',
      savoirFaire:
        'Développement mobile, conception d\'interface, suivi d\'indicateurs d\'acquisition.',
      savoirEtre:
        'Prise d\'initiative, acceptation de l\'incertitude, capacité à décider sans avoir toutes les informations.',
    },
    competences: [
      'Décider : exploiter les données pour accompagner la prise de décision',
      'Piloter : améliorer les relations entre les parties prenantes',
    ],
  },
]

// -------------------------------------------------------------
//  MES POINTS FORTS
// -------------------------------------------------------------
export const pointsForts = {
  competences: [
    {
      titre: 'Production et fiabilisation de l\'information comptable et fiscale',
      reference: 'Compétence « Produire », niveau 2 du référentiel GC2F',
      texte:
        'Traiter la chaîne complète, de la pièce justificative à la déclaration de TVA, en contrôlant la cohérence à chaque étape. Acquis en cabinet sur des dossiers clients réels.',
      preuve: 'Stage chez FIDUCIAL Expertise',
    },
    {
      titre: 'Exploitation des données pour aider à décider',
      reference: 'Compétence « Décider », niveau 3 du référentiel',
      texte:
        'Construire des prévisions et des budgets, lire des écarts, suivre des indicateurs et en tirer une recommandation plutôt qu\'un simple constat.',
      preuve: 'Cas de contrôle de gestion et pilotage de mes propres projets',
    },
    {
      titre: 'Conduite de projet de bout en bout',
      reference: 'Compétence « Piloter », niveau 3 du référentiel',
      texte:
        'Mener un projet de l\'idée au livrable : cadrer le besoin, planifier, arbitrer, livrer et mesurer. En groupe comme en autonomie complète.',
      preuve: 'Projet tutoré en équipe et lancement de deux applications',
    },
  ],
  savoirEtre: [
    {
      titre: 'Rigueur',
      texte: 'Je vérifie avant de transmettre. Un chiffre que je donne, je sais d\'où il vient.',
    },
    {
      titre: 'Autonomie',
      texte: 'J\'avance sans qu\'on ait à me relancer, et je sais à quel moment une validation est nécessaire.',
    },
    {
      titre: 'Persévérance',
      texte: 'Je ne lâche pas un sujet parce qu\'il résiste. La plupart de mes résultats viennent de là.',
    },
  ],
  outils: [
    'Excel et tableur avancé',
    'SIS-IA et Espace GED',
    'Facilia',
    'VS Code, React, Git',
    'Suite de création visuelle',
  ],
}

// -------------------------------------------------------------
//  PAGE BONUS : OUVERTURE
// -------------------------------------------------------------
export const ouverture = {
  chapo:
    'Travailler pour une audience et des utilisateurs qui ne sont pas les miens m\'a obligé à sortir de mes repères. C\'est sans doute ce qui m\'a le plus fait progresser sur la façon de m\'adresser aux autres.',
  blocs: [
    {
      titre: 'S\'adresser à une audience étrangère',
      texte:
        'La majorité des gens qui me suivent sont américains. Les codes ne sont pas les mêmes : le rapport au discours direct, les références culturelles, le rythme attendu, les unités de mesure. J\'ai dû réapprendre à écrire pour eux plutôt que de traduire ce que j\'aurais dit en français.',
    },
    {
      titre: 'Un produit utilisé dans plusieurs pays',
      texte:
        'Une application publiée sur l\'App Store est accessible partout. Cela impose de penser l\'interface, les unités et le vocabulaire pour des gens dont je ne connais ni la langue ni les habitudes, et d\'accepter que mon usage personnel ne soit pas la référence.',
    },
    {
      titre: 'Travailler avec des profils différents',
      texte:
        'En cabinet comme en intérim en milieu industriel, j\'ai travaillé avec des personnes de parcours, d\'âges et de métiers très éloignés du mien. J\'y ai appris à adapter mon niveau de langage et à ne jamais supposer que mon interlocuteur partage mes références.',
    },
    {
      titre: 'Ce que j\'en retiens',
      texte:
        'La diversité n\'est pas une case à cocher dans un projet, c\'est une contrainte de conception. Dès qu\'on s\'adresse à quelqu\'un qui n\'est pas soi, il faut vérifier ses hypothèses au lieu de les appliquer.',
    },
  ],
}

// -------------------------------------------------------------
//  PARCOURS (timeline affichée sur la page À propos)
// -------------------------------------------------------------
export const parcours = [
  {
    date: '2026 - 2027',
    titre: 'BUT 3 GEA, parcours gestion comptable, fiscale et financière',
    lieu: 'IUT de l\'Indre, Université d\'Orléans',
  },
  {
    date: '2026',
    titre: 'Lancement de LUCIDE sur l\'App Store',
    lieu: 'Projet personnel',
  },
  {
    date: '2026',
    titre: 'Stage en cabinet d\'expertise comptable',
    lieu: 'FIDUCIAL Expertise, La Châtre',
  },
  {
    date: 'Depuis 2024',
    titre: 'Opérateur en intérim pendant les vacances scolaires',
    lieu: 'Barilla, Montierchaume',
  },
  {
    date: '2024 - 2026',
    titre: 'BUT 1 et BUT 2 GEA',
    lieu: 'IUT de l\'Indre, Université d\'Orléans',
  },
]
