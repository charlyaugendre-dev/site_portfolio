import PageHead from '../components/PageHead.jsx'
import { pointsForts } from '../data/content.js'

export default function PointsForts() {
  return (
    <section className="sheet wrap">
      <PageHead
        titre="Mes points forts"
        chapo="Trois compétences issues du référentiel, transposées à un contexte professionnel, et trois savoir-être qui les accompagnent."
      />

      <div style={{ marginBottom: '64px' }}>
        {pointsForts.competences.map((c, i) => (
          <div className="row" key={i}>
            <div className="side">{c.reference}</div>
            <div className="body">
              <h3>{c.titre}</h3>
              <p>{c.texte}</p>
              <p className="meta">Mis en pratique : {c.preuve}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Mes savoir-être</h2>
      <div style={{ marginTop: '22px', marginBottom: '64px' }}>
        {pointsForts.savoirEtre.map((s, i) => (
          <div className="row" key={i}>
            <div className="side">{s.titre}</div>
            <div className="body">
              <p>{s.texte}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cols">
        <div>
          <h2>Mes outils</h2>
          <div className="inline-list" style={{ marginTop: '16px' }}>
            {pointsForts.outils.map((o, i) => (
              <span key={i}>{o}</span>
            ))}
          </div>
        </div>
        <div>
          <h2>Mes langues</h2>
          <div style={{ marginTop: '16px' }}>
            {pointsForts.langues.map((l, i) => (
              <div className="pair" key={i}>
                <span>{l.langue}</span>
                <span className="muted">{l.niveau}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
