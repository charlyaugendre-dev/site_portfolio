// =============================================================
//  TOUT LE CONTENU DU SITE EST DANS CE FICHIER.
//  Pour modifier un texte, tu modifies ici, pas dans les pages.
// =============================================================

export const profil = {
  prenom: 'Charly',
  nom: 'Augendre',
  titre: 'Étudiant en BUT 3 GEA, parcours gestion comptable, fiscale et financière',
  sousTitre: 'Fondateur d\'une application mobile iOS',
  accroche:
    'Je me forme à la gestion comptable, fiscale et financière à l\'IUT de l\'Indre, et en parallèle j\'ai conçu et publié ma propre application iOS. Deux terrains différents, une même logique : comprendre les chiffres, les rendre fiables et en tirer des décisions.',
  localisation: 'Neuvy-Saint-Sépulchre (36), mobile sur Châteauroux et alentours',
  email: 'charly.augendre@etu.univ-orleans.fr',
  telephone: '07 69 36 28 58',
  telephoneLien: '+33769362858',
  linkedin: 'https://www.linkedin.com/in/charly-augendre-289b22384/',
  // Dépose ton CV dans le dossier public/ et mets ici './cv-charly-augendre.pdf'
  // Laisse la chaîne vide pour masquer le bouton.
  cvUrl: './cv-charly-augendre.pdf',
  // Dépose ta photo dans public/ (par exemple photo.jpg) et mets './photo.jpg'
  photoUrl: '',
  disponibilite: 'Recherche un stage du 22 février au 15 mai 2027',
}

export const chiffresCles = [
  { valeur: '≈ 50', libelle: 'dossiers clients traités en cabinet d\'expertise comptable' },
  { valeur: '15', libelle: 'dossiers menés jusqu\'à la déclaration de TVA validée' },
  { valeur: '1', libelle: 'application iOS conçue, développée et publiée sur l\'App Store' },
]

// -------------------------------------------------------------
//  À PROPOS
// -------------------------------------------------------------
export const apropos = {
  intro:
    'J\'aime créer des choses par moi-même. Pas seulement apprendre une matière, mais en faire quelque chose de concret et le mener jusqu\'au bout. C\'est le fil rouge de mon parcours.',
  chapitres: [
    {
      cle: 'Le parcours',
      titre: 'La gestion comme socle',
      texte:
        'J\'ai commencé par une première année de BUT en génie électrique et informatique industrielle avant de me réorienter vers la gestion. Ce n\'était pas un échec mais une correction de trajectoire : j\'avais compris que ce qui m\'intéressait, ce n\'était pas la technique pour elle-même, c\'était ce qui fait tourner une entreprise. J\'ai donc choisi le BUT GEA puis le parcours gestion comptable, fiscale et financière, parce que c\'est la discipline qui explique comment une entreprise tient debout. La comptabilité n\'est pas un exercice administratif pour moi, c\'est la matière première de toute décision. Mon stage en cabinet d\'expertise comptable m\'a confirmé que je voulais maîtriser cette chaîne de bout en bout, de la pièce justificative à la déclaration fiscale.',
    },
    {
      cle: 'L\'entrepreneuriat',
      titre: 'Construire mes propres projets',
      texte:
        'En parallèle de mes études, j\'ai créé une micro-entreprise et lancé LUCIDE, une application de suivi nutritionnel destinée aux sportifs, aujourd\'hui publiée sur l\'App Store avec ses premiers abonnés payants. J\'ai tout mené moi-même : l\'idée, le positionnement, le développement, l\'image de marque et la mise en ligne.',
    },
    {
      cle: 'La méthode',
      titre: 'Apprendre vite, livrer vraiment',
      texte:
        'Je n\'avais presque aucune base en développement avant de commencer. J\'ai appris en construisant, en me trompant et en recommençant. C\'est la compétence dont je suis le plus fier : être capable de partir d\'un sujet que je ne maîtrise pas et d\'arriver à un résultat livré, utilisé par de vraies personnes.',
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
        'Je cherche un stage de fin de BUT du 22 février au 15 mai 2027, idéalement en cabinet, en direction financière ou en contrôle de gestion. Je veux une mission où l\'on produit de la donnée fiable et où l\'on s\'en sert pour conseiller. En parallèle, je compte continuer à développer mon application sur les prochaines années.',
    },
  ],
  motsCles: ['Comptabilité', 'Contrôle de gestion', 'Fiscalité', 'Entrepreneuriat', 'Produit', 'Autonomie'],
}

// -------------------------------------------------------------
//  MA PASSION
// -------------------------------------------------------------
export const passion = {
  titre: 'Le sport, de la chambre à la salle',
  chapo:
    'Le sport m\'accompagne depuis l\'enfance : sept ans de judo, trois ans de natation, puis la musculation. C\'est ce qui m\'a appris la régularité bien avant que je l\'applique à mes études et à mes projets.',
  recit: [
    'J\'ai arrêté le judo vers 12 ou 13 ans et j\'ai commencé à m\'entraîner chez moi, au poids du corps et avec quelques haltères. Pendant des années, c\'est resté une habitude de chambre, sans matériel et sans vraie méthode, mais je n\'ai jamais arrêté.',
    'Je suis entré en salle à 17 ans, en arrivant à Châteauroux pour mes études supérieures. J\'ai pris mes repères vite et je suis resté constant depuis, soit plus de trois ans de pratique régulière. Ce qui change entre la chambre et la salle, ce n\'est pas le matériel, c\'est le fait de mesurer ce qu\'on fait.',
    'C\'est en créant LUCIDE que je me suis mis à suivre précisément mes calories, mes macronutriments et mon hydratation. Je me sers tous les jours de l\'application que j\'ai construite, ce qui reste la façon la plus honnête de savoir si un produit tient la route.',
  ],
  madSkills: [
    {
      titre: 'Tenir dans la durée',
      texte:
        'Sept ans d\'entraînement sans interruption, dont plus de trois en salle, sans que personne ne me le demande. C\'est ce qui m\'a appris à ne pas lâcher un projet au premier mur, que ce soit un dossier ou une application.',
    },
    {
      titre: 'Mesurer au lieu de supposer',
      texte:
        'Suivre ses calories, ses macronutriments et sa progression, c\'est tenir un tableau de bord. Je raisonne de la même façon sur un dossier : tant que ce n\'est pas chiffré, ce n\'est qu\'une impression.',
    },
    {
      titre: 'Apprendre par moi-même',
      texte:
        'Personne ne m\'a appris à m\'entraîner, ni à développer une application. Dans les deux cas j\'ai avancé en cherchant, en testant et en corrigeant, et c\'est devenu ma façon d\'aborder un sujet que je ne maîtrise pas.',
    },
    {
      titre: 'Être mon propre utilisateur',
      texte:
        'Construire un outil que j\'utilise moi-même tous les jours oblige à l\'honnêteté : les défauts se voient immédiatement et ne peuvent pas être repoussés à plus tard.',
    },
  ],
}

// -------------------------------------------------------------
//  RÉALISATIONS À L'UNIVERSITÉ (SAÉ de BUT 2)
// -------------------------------------------------------------
export const realisationsUniversite = [
  {
    titre: 'SAÉ Créa Campus : création du restaurant PUMP',
    periode: 'BUT 2, semestre 3, projet rendu en décembre 2025',
    role: 'Membre d\'une équipe de cinq étudiants, intervenant sur l\'ensemble des volets',
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
      'J\'ai travaillé sur l\'ensemble des parties du dossier plutôt que sur un seul bloc : conduite et exploitation d\'entretiens, analyse de l\'environnement et de la concurrence, construction de l\'offre, et traitement des volets juridique et financier. Le choix de la SAS a été argumenté sur quatre critères : la souplesse statutaire, la limitation de la responsabilité aux apports, la flexibilité fiscale entre impôt sur les sociétés et option temporaire à l\'impôt sur le revenu, et la capacité d\'évolution vers un second établissement. J\'ai aussi veillé à la cohérence d\'ensemble du dossier, pour que le concept final découle réellement de ce que l\'enquête avait montré.',
    resultats: [
      'Dossier complet de 56 pages couvrant l\'étude de marché, le concept, le juridique et le financier',
      'Soutenance orale de 20 minutes devant le jury',
      'Note de 14,5 sur 20 pour l\'ensemble dossier et soutenance',
    ],
    reflexion: {
      reussi:
        'Avoir commencé par le terrain. Les sept entretiens ont fait émerger des attentes que nous n\'avions pas anticipées, notamment le fait que les gens ne cherchent pas des menus spécialisés mais de la lisibilité sur ce qu\'ils mangent. Cela a directement orienté le concept vers une carte courte et transparente au lieu d\'une offre large. Le travail en équipe de cinq a également tenu, chacun ayant pu intervenir sur plusieurs volets sans cloisonnement.',
      ameliorer:
        'La partie financière est restée au stade de l\'ébauche. Avec le recul, c\'est là que le dossier était le plus fragile : nous avons décrit le modèle économique de façon qualitative, sans jamais le chiffrer. Ni compte de résultat prévisionnel, ni seuil de rentabilité, ni plan de financement, alors que c\'est exactement ce qu\'on attend d\'un parcours comptable et financier, et ce qui aurait permis de dire si le projet tenait vraiment. C\'est ce que je traiterais en priorité aujourd\'hui. Nous aurions aussi gagné à nous répartir des rôles clairs dès le départ : à cinq, en avançant sans attribution précise, nous avons perdu en efficacité et certaines parties ont été reprises plusieurs fois.',
      savoirs:
        'Méthodologie de l\'étude de marché, analyse PESTE, formes juridiques des sociétés et régimes fiscaux associés, structure d\'un modèle économique en restauration.',
      savoirFaire:
        'Construction d\'un guide d\'entretien, conduite d\'entretiens semi-directifs, analyse thématique de données qualitatives, rédaction argumentée avec appareil bibliographique sourcé, prise de parole en soutenance.',
      savoirEtre:
        'Travail en équipe sur un projet long, écoute en situation d\'entretien face à des professionnels, capacité à défendre un choix argumenté à l\'oral.',
    },
    competences: [
      'AC 31.01 Intégrer l\'impact des enjeux sur l\'organisation',
      'AC 33.02 Mener un projet collaboratif',
      'AC 34.02 Appliquer les règles comptables, fiscales et sociales adaptées à l\'organisation',
    ],
  },
]

// -------------------------------------------------------------
//  RÉALISATIONS PROFESSIONNELLES (BUT 2)
// -------------------------------------------------------------
export const realisationsPro = [
  {
    titre: 'Stage en cabinet d\'expertise comptable',
    organisation: 'FIDUCIAL Expertise, La Châtre',
    periode: 'BUT 2, du 13 avril au 5 juin 2026, 8 semaines',
    role: 'Stagiaire en comptabilité',
    contexte:
      'Cabinet d\'expertise comptable de proximité accompagnant des TPE et PME locales. Le secteur vit une transformation numérique rapide, accélérée par la réforme de la facturation électronique, qui change la façon dont la donnée entre dans le cabinet. J\'y suis arrivé en pensant que la reconnaissance automatique avait déjà remplacé la saisie. La réalité est plus nuancée : dès qu\'une pièce n\'est pas correctement reconnue par le logiciel, elle est reprise entièrement à la main. Cette découverte a orienté tout mon stage et la problématique de mon rapport.',
    objectifs: [
      'Participer à la chaîne comptable complète sur des dossiers clients réels',
      'Comprendre comment le cabinet sécurise la fiabilité de l\'information produite',
    ],
    demarche: [
      'Saisie des factures d\'achat, de vente et des avoirs sur SIS-IA et Ex-Libris',
      'Traduction des relevés bancaires et suivi du compte d\'attente 471',
      'Lettrage des comptes clients et fournisseurs, avec détection et correction des erreurs d\'imputation',
      'Calcul de la TVA sur Excel puis vérification croisée avec les soldes du logiciel',
      'Travail sur des secteurs variés : BTP, restauration, artisanat, santé libérale et commerce',
    ],
    contribution:
      'J\'ai traité environ 50 dossiers clients de TPE, dont 15 menés de bout en bout jusqu\'à la déclaration de TVA validée. Le contrôle croisé entre mon calcul sur Excel et les soldes du logiciel est devenu mon réflexe systématique avant toute validation, c\'est ce qui m\'a permis de repérer plusieurs erreurs d\'imputation. J\'ai également rédigé un rapport d\'une quarantaine de pages dont la problématique portait sur la façon dont la maîtrise de la chaîne comptable conditionne la fiabilité de la donnée dans un secteur en transformation numérique.',
    resultats: [
      'Environ 50 dossiers traités, dont 15 jusqu\'à la déclaration de TVA validée',
      'Prise en charge autonome de dossiers après quelques semaines',
      'Rapport de stage d\'une quarantaine de pages et soutenance orale devant le jury',
    ],
    reflexion: {
      reussi:
        'Avoir posé beaucoup de questions plutôt que de deviner. Je suis arrivé avec le plan comptable général appris en cours, alors que le cabinet travaille avec des plans adaptés à chaque client, avec des comptes de classe 6 et 7 beaucoup plus détaillés. Plutôt que d\'imputer au jugé, j\'allais systématiquement demander à ma tutrice ou au collaborateur du dossier quel compte utiliser. Cela m\'a coûté du temps au début, mais c\'est ce qui a permis que mon travail soit fiable, et le cabinet a retenu de mon passage que j\'étais sérieux et rigoureux.',
      ameliorer:
        'J\'ai redemandé les mêmes informations plusieurs fois. Avec le recul, j\'aurais dû me constituer dès les premiers jours une fiche de correspondance par client, reprenant les comptes spécifiques et leur usage. J\'aurais gagné en autonomie plus vite et j\'aurais moins sollicité des collaborateurs déjà chargés. C\'est le réflexe que je prendrai dès le premier jour de mon prochain stage.',
      savoirs:
        'Plan comptable général et plans adaptés par client, mécanique de la TVA, obligations déclaratives, limites réelles de la reconnaissance automatique de pièces.',
      savoirFaire:
        'Saisie, rapprochement bancaire, lettrage, préparation d\'une CA3, contrôle croisé d\'un calcul de TVA entre tableur et logiciel métier, utilisation d\'une GED.',
      savoirEtre:
        'Discrétion sur des données confidentielles, rigueur, capacité à demander une validation au bon moment plutôt qu\'à avancer dans le doute.',
    },
    competences: [
      'AC 34.02 Appliquer les règles comptables, fiscales et sociales adaptées à l\'organisation',
      'AC 34.04 Sécuriser l\'information comptable, fiscale et sociale produite',
    ],
  },
  {
    titre: 'Création et lancement de LUCIDE, application iOS',
    organisation: 'Projet personnel, micro-entreprise',
    periode: 'Depuis 2025, lancement sur l\'App Store en 2026',
    role: 'Fondateur, de l\'idée à la commercialisation',
    contexte:
      'Le marché du suivi nutritionnel est dominé par quelques applications valorisées à plusieurs centaines de millions d\'euros, toutes positionnées sur le grand public. En tant que pratiquant régulier, je cherchais un outil simple, rapide et soigné pour suivre mes calories et mes macronutriments, et je ne le trouvais pas. Un besoin que je vivais moi-même, sur un marché dont la taille atteste la demande : les deux conditions qui m\'ont décidé à me lancer.',
    objectifs: [
      'Concevoir et publier une application de suivi nutritionnel premium sur l\'App Store',
      'Obtenir la validation d\'Apple, puis les premiers abonnés payants sans budget publicitaire',
    ],
    demarche: [
      'Définition du positionnement et de l\'identité de marque autour de l\'exactitude',
      'Développement de l\'application en m\'appuyant sur des outils d\'IA générative, chaque fonctionnalité et chaque choix d\'interface venant de moi',
      'Optimisation du coût par requête des fonctions d\'intelligence artificielle, pour concilier précision des réponses et viabilité du modèle économique',
      'Internationalisation complète de l\'application, bloc par bloc, pour l\'ouvrir au marché anglophone',
      'Soumission à Apple, corrections successives après quatre refus, puis mise en ligne',
    ],
    contribution:
      'J\'ai porté le projet seul, de l\'idée à la commercialisation : positionnement, conception de chaque écran, développement, identité visuelle, modèle d\'abonnement et mise en ligne. N\'étant pas développeur de formation, j\'ai construit l\'application avec des outils d\'IA générative, ce qui m\'a demandé de comprendre la structure de mon propre code plutôt que d\'appliquer aveuglément ce qu\'on me proposait. J\'ai exigé de savoir pourquoi chaque modification était faite avant de la valider.',
    resultats: [
      'Application publiée sur l\'App Store après quatre refus successifs d\'Apple',
      'Premiers abonnés payants acquis sans aucun budget publicitaire',
      'Application disponible en français et en anglais',
    ],
    reflexion: {
      reussi:
        'Avoir gardé la main sur un projet technique que je ne maîtrisais pas au départ. En vérifiant systématiquement la logique de ce que l\'outil me proposait, j\'ai repéré plusieurs fois des erreurs dans son raisonnement avant de les intégrer. J\'ai aussi fixé des règles écrites que l\'outil devait respecter, et procédé bloc par bloc sur les chantiers sensibles comme la traduction, pour qu\'aucune modification non souhaitée ne passe. C\'est exactement la posture qu\'on attend face à un logiciel comptable : l\'outil propose, c\'est à l\'humain de contrôler.',
      ameliorer:
        'La première version a été construite sans méthode. Je modifiais le code en bloc, sans outillage adapté, ce qui multipliait les anomalies : j\'ai passé plus de huit heures d\'affilée sur un seul bug de connexion. En adoptant un environnement de travail adapté et des règles claires, j\'ai avancé plusieurs fois plus vite sur la suite. La leçon est la même qu\'en gestion : le temps investi dans la méthode au départ se récupère largement ensuite.',
      savoirs:
        'Modèle économique par abonnement, cadre de la micro-entreprise et obligations déclaratives associées, conditions de publication sur l\'App Store, structure de coûts d\'un service faisant appel à l\'intelligence artificielle.',
      savoirFaire:
        'Conception d\'interface, pilotage d\'outils d\'IA générative avec des consignes contrôlées, optimisation du coût unitaire d\'un traitement automatisé, gestion de la synchronisation et de la sauvegarde de données utilisateurs, internationalisation d\'une application.',
      savoirEtre:
        'Patience et persévérance face à des refus successifs, esprit critique face à une réponse automatisée, rigueur dans les tests, refus de laisser un point incompris derrière moi.',
    },
    competences: [
      'AC 32.03 Participer à la prise de décision en fonction des contraintes identifiées',
      'AC 32.04 Élaborer des mesures préventives de minimisation des risques',
    ],
  },
]

// -------------------------------------------------------------
//  MES POINTS FORTS
// -------------------------------------------------------------
export const pointsForts = {
  competences: [
    {
      titre: 'Sécuriser l\'information comptable, fiscale et sociale produite',
      reference: 'C4, AC 34.04',
      texte:
        'Ne jamais transmettre un chiffre sans l\'avoir vérifié par un autre chemin. En cabinet, je recalculais la TVA sur tableur avant de la confronter aux soldes du logiciel, ce qui m\'a permis de repérer des erreurs d\'imputation avant qu\'elles ne partent dans une déclaration.',
      preuve: 'Stage chez FIDUCIAL Expertise, environ 50 dossiers clients',
    },
    {
      titre: 'Élaborer des mesures préventives de minimisation des risques',
      reference: 'C2, AC 32.04',
      texte:
        'Anticiper ce qui peut mal tourner plutôt que de le corriger après coup. Sur mon application, la sauvegarde et la synchronisation des données utilisateurs ont été refaites plusieurs fois, en cherchant à couvrir toutes les situations possibles plutôt que le cas nominal.',
      preuve: 'Conception et mise en ligne de LUCIDE',
    },
    {
      titre: 'Mener un projet collaboratif',
      reference: 'C3, AC 33.02',
      texte:
        'Faire avancer un projet long à plusieurs, en intervenant sur tous les volets plutôt qu\'en restant dans son couloir : enquête terrain, analyse de marché, cadrage juridique et financier, puis défense du travail à l\'oral.',
      preuve: 'SAÉ Créa Campus, projet PUMP en équipe de cinq',
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
    'Excel : tableaux de suivi automatisés',
    'Word : mise en forme avancée, modèles, sommaires',
    'PowerPoint',
    'Logiciels métiers : SIS-IA, Ex-Libris, GED',
    'Outils d\'IA générative : usage encadré et contrôle des résultats',
    'VS Code, React, Git',
  ],
  langues: [
    { langue: 'Français', niveau: 'Langue maternelle' },
    { langue: 'Anglais', niveau: 'Niveau B2' },
    { langue: 'Espagnol', niveau: 'Niveau B2' },
  ],
}

// -------------------------------------------------------------
//  PAGE BONUS : OUVERTURE
// -------------------------------------------------------------
export const ouverture = {
  chapo:
    'Concevoir un produit pour des gens que je ne connais pas m\'a obligé à sortir de mes repères. C\'est ce qui m\'a le plus fait progresser sur la façon de m\'adresser aux autres.',
  blocs: [
    {
      titre: 'Un produit accessible partout',
      texte:
        'Une application publiée sur l\'App Store n\'a pas de frontière. Dès la mise en ligne, LUCIDE pouvait être téléchargée par des gens dont je ne connais ni la langue, ni les habitudes alimentaires, ni les unités de mesure. On ne choisit pas son public, on le découvre.',
    },
    {
      titre: 'Mon usage n\'est pas la référence',
      texte:
        'J\'utilise moi-même l\'application tous les jours, ce qui est à la fois un avantage et un piège. Ce qui me paraît évident ne l\'est pas pour quelqu\'un qui ne s\'entraîne pas comme moi, ne mange pas comme moi et n\'a pas les mêmes repères chiffrés. Concevoir pour les autres, c\'est accepter de ne pas être le modèle.',
    },
    {
      titre: 'Travailler avec des profils éloignés du mien',
      texte:
        'En cabinet, les dossiers venaient du BTP, de la restauration, de l\'artisanat, de la santé libérale et du commerce, donc de gens dont je ne connaissais ni le métier ni le vocabulaire. En milieu industriel, j\'ai travaillé avec des personnes d\'âges et de parcours très différents du mien. Dans les deux cas, il a fallu adapter ma façon de parler plutôt qu\'attendre qu\'on s\'adapte à moi.',
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
    date: 'Avril - juin 2026',
    titre: 'Stage en cabinet d\'expertise comptable',
    lieu: 'FIDUCIAL Expertise, La Châtre',
  },
  {
    date: '2024 - 2025',
    titre: 'Opérateur en intérim pendant les vacances scolaires',
    lieu: 'Barilla, Montierchaume',
  },
  {
    date: 'Janvier - février 2025',
    titre: 'Stage en gestion, réorganisation des vestiaires du personnel',
    lieu: 'Leroy Merlin, Châteauroux',
  },
  {
    date: '2024 - 2026',
    titre: 'BUT 1 et BUT 2 GEA, parcours gestion comptable, fiscale et financière',
    lieu: 'IUT de l\'Indre, Université d\'Orléans',
  },
  {
    date: '2023 - 2024',
    titre: 'Première année de BUT GEII, puis réorientation vers la gestion',
    lieu: 'IUT de l\'Indre, Université d\'Orléans',
  },
  {
    date: '2023',
    titre: 'Baccalauréat général, spécialités mathématiques et physique-chimie',
    lieu: 'Lycée George Sand, La Châtre',
  },
]
