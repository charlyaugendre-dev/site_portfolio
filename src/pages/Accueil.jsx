import { Link } from 'react-router-dom'
import { profil, chiffresCles } from '../data/content.js'

export default function Accueil() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              <span className="dot" />
              {profil.disponibilite}
            </div>
            <h1>
              {profil.prenom} {profil.nom}
            </h1>
            <p className="lead">{profil.titre}</p>
            <p className="muted" style={{ marginTop: '-6px' }}>{profil.sousTitre}</p>
            <p style={{ marginTop: '24px', maxWidth: '620px' }}>{profil.accroche}</p>
            <div className="actions">
              <Link className="btn btn-primary" to="/realisations-professionnelles">
                Voir mes réalisations
              </Link>
              {profil.cvUrl && (
                <a className="btn" href={profil.cvUrl} download>
                  Télécharger mon CV
                </a>
              )}
              <a className="btn" href={`mailto:${profil.email}`}>
                Me contacter
              </a>
            </div>
          </div>

          <div>
            {profil.photoUrl ? (
              <img className="portrait" src={profil.photoUrl} alt={`${profil.prenom} ${profil.nom}`} />
            ) : (
              <div className="portrait">
                Dépose ta photo dans le dossier public/ puis renseigne photoUrl dans src/data/content.js
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '72px' }}>
        <div className="grid grid-3">
          {chiffresCles.map((c, i) => (
            <div className="card stat" key={i}>
              <div className="value">{c.valeur}</div>
              <div className="label">{c.libelle}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '72px' }}>
        <div className="grid grid-2">
          <Link className="card card-accent" to="/a-propos">
            <h3>À propos de moi</h3>
            <p className="muted" style={{ margin: 0 }}>
              Mon parcours, mes valeurs et ce que je cherche à construire.
            </p>
          </Link>
          <Link className="card card-accent" to="/passion">
            <h3>Ma passion</h3>
            <p className="muted" style={{ margin: 0 }}>
              Le sport, la création de contenu et ce que j'en ai tiré.
            </p>
          </Link>
          <Link className="card card-accent" to="/realisations-universite">
            <h3>Réalisations à l'université</h3>
            <p className="muted" style={{ margin: 0 }}>
              Mes travaux de BUT 2 et l'analyse que j'en fais.
            </p>
          </Link>
          <Link className="card card-accent" to="/points-forts">
            <h3>Mes points forts</h3>
            <p className="muted" style={{ margin: 0 }}>
              Trois compétences du référentiel et trois savoir-être.
            </p>
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <h2>Parlons-en</h2>
          <p className="muted">
            {profil.disponibilite}. {profil.localisation} et mobile.
          </p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href={`mailto:${profil.email}`}>
              {profil.email}
            </a>
            <a className="btn" href={profil.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
