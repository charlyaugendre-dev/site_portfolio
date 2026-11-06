import { Link } from 'react-router-dom'
import { profil, chiffresCles } from '../data/content.js'

const pages = [
  { to: '/a-propos', name: 'À propos de moi', desc: 'Mon parcours, mes valeurs et ce que je cherche à construire' },
  { to: '/passion', name: 'Ma passion', desc: 'Le sport, la création de contenu et ce que j\'en ai tiré' },
  { to: '/realisations-universite', name: 'Réalisations à l\'université', desc: 'Mes travaux de BUT 2 et l\'analyse que j\'en fais' },
  { to: '/realisations-professionnelles', name: 'Réalisations professionnelles', desc: 'Mon stage en cabinet et mes projets personnels' },
  { to: '/points-forts', name: 'Mes points forts', desc: 'Trois compétences du référentiel et trois savoir-être' },
  { to: '/ouverture', name: 'Ouverture', desc: 'Travailler et s\'adresser à des gens qui ne me ressemblent pas' },
]

export default function Accueil() {
  return (
    <>
      <section className="hero fade">
        <div className="wrap">
          <div className="statement">{profil.disponibilite}</div>
          <h1 className="hero-name">
            {profil.prenom}
            <br />
            {profil.nom}
          </h1>
          <p className="hero-role">{profil.titre}</p>
          <p className="hero-sub">{profil.sousTitre}</p>

          <div className="hero-grid">
            <p className="hero-note">{profil.accroche}</p>
            {profil.photoUrl ? (
              <img className="portrait" src={profil.photoUrl} alt={`${profil.prenom} ${profil.nom}`} />
            ) : (
              <div className="portrait portrait-vide">
                Photo à déposer dans public/ puis à renseigner dans content.js
              </div>
            )}
          </div>

          <div className="actions">
            {profil.cvUrl && (
              <a className="action action-solid" href={profil.cvUrl} download>
                Télécharger mon CV
              </a>
            )}
            <a className="action" href={`mailto:${profil.email}`}>
              M'écrire
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-title">En quelques chiffres</div>
          {chiffresCles.map((c, i) => (
            <div className="releve-line" key={i}>
              <span className="figure">{c.valeur}</span>
              <span className="what">{c.libelle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap">
        <nav className="index">
          {pages.map((p) => (
            <Link className="index-item" to={p.to} key={p.to}>
              <span className="name">{p.name}</span>
              <span className="desc">{p.desc}</span>
            </Link>
          ))}
        </nav>

        <div className="closing">
          <h2>Me contacter</h2>
          <p className="prose muted">
            {profil.localisation}. Je réponds à toutes les propositions de stage et aux questions sur
            mes projets.
          </p>
          <div className="actions">
            <a className="action action-solid" href={`mailto:${profil.email}`}>
              {profil.email}
            </a>
            <a className="action" href={profil.linkedin} target="_blank" rel="noreferrer">
              Mon profil LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
