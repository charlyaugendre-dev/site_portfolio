import PageHead from '../components/PageHead.jsx'
import { apropos, parcours } from '../data/content.js'

export default function APropos() {
  return (
    <section className="sheet wrap">
      <PageHead titre="À propos de moi" chapo={apropos.intro} />

      <div style={{ marginBottom: '64px' }}>
        {apropos.chapitres.map((c, i) => (
          <div className="row" key={i}>
            <div className="side">{c.cle}</div>
            <div className="body">
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Mon parcours</h2>
      <div style={{ marginTop: '22px' }}>
        {parcours.map((p, i) => (
          <div className="step" key={i}>
            <div className="when">{p.date}</div>
            <div>
              <div className="what">{p.titre}</div>
              <div className="where">{p.lieu}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
