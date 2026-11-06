# Portfolio de valorisation, BUT 3 GEA

Site personnel de Charly Augendre. React + Vite, déployé automatiquement sur GitHub Pages.

## Lancer le site en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:5173

## Mettre le site en ligne sur GitHub Pages

1. Créer un dépôt vide sur GitHub, par exemple `portfolio`.
2. Dans le dossier du projet :

```bash
git init
git add .
git commit -m "Base du portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

3. Sur GitHub : `Settings` puis `Pages`, et dans `Build and deployment`, choisir la source **GitHub Actions**.
4. Chaque `git push` sur `main` redéploie le site automatiquement.
5. L'adresse finale est `https://TON-PSEUDO.github.io/portfolio/`

## Où modifier le contenu

Tout le texte du site est dans un seul fichier : **`src/data/content.js`**.
Les pages ne font que l'afficher, donc il n'y a jamais besoin de toucher au code pour changer un texte.

Les mentions `[À COMPLÉTER]` signalent ce qui reste à renseigner.

## Ce qu'il reste à faire

- [ ] Renseigner l'URL LinkedIn dans `src/data/content.js`
- [ ] Déposer la photo de profil dans `public/` et renseigner `photoUrl`
- [ ] Déposer le CV en PDF dans `public/` et renseigner `cvUrl`
- [ ] Choisir et rédiger la SAÉ de BUT 2 de la page « Réalisations à l'université »
- [ ] Compléter les dates exactes du stage
- [ ] Relire l'orthographe de l'ensemble, c'est un critère noté
- [ ] Envoyer le lien à Mme Bardin avant le lundi 14 décembre 2026

## Structure

```
src/
  data/content.js     tout le contenu éditorial
  components/         en-tête, pied de page, bloc réalisation
  pages/              une page par rubrique attendue
  styles.css          thème et mise en page
public/               photo, CV, favicon
.github/workflows/    déploiement automatique
```
