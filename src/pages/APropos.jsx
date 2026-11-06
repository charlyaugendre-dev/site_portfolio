import PageHead from '../components/PageHead.jsx'
import { apropos, parcours } from '../data/content.js'

export default function APropos() {
  return (
    <section className="page container">
      <PageHead eyebrow="Découvrez-moi" titre="À propos de moi" chapo={apropos.intro} />

      <div style={{ marginBottom: '40px' }}>
        {apropos.motsCles.map((m, i) => (
          <span className="tag" key={i}>
            {m}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: '64px' }}>
        {apropos.chapitres.map((c, i) => (
          <div className="chapter" key={i}>
            <div className="key">{c.cle}</div>
            <div>
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Mon parcours</h2>
      <div className="timeline" style={{ marginTop: '28px' }}>
        {parcours.map((p, i) => (
          <div className="timeline-item" key={i}>
            <div className="date">{p.date}</div>
            <div className="what">{p.titre}</div>
            <div className="where">{p.lieu}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
