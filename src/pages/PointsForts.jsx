import PageHead from '../components/PageHead.jsx'
import { pointsForts } from '../data/content.js'

export default function PointsForts() {
  return (
    <section className="page container">
      <PageHead
        eyebrow="Synthèse"
        titre="Mes points forts"
        chapo="Trois compétences issues du référentiel, transposées à un contexte professionnel, et trois savoir-être qui les accompagnent."
      />

      <div className="grid grid-3" style={{ marginBottom: '56px' }}>
        {pointsForts.competences.map((c, i) => (
          <div className="card card-accent" key={i}>
            <div className="eyebrow" style={{ marginBottom: '10px' }}>
              0{i + 1}
            </div>
            <h3>{c.titre}</h3>
            <p className="muted" style={{ fontSize: '13px', marginBottom: '12px' }}>
              {c.reference}
            </p>
            <p style={{ marginBottom: '14px' }}>{c.texte}</p>
            <span className="tag">{c.preuve}</span>
          </div>
        ))}
      </div>

      <h2>Mes savoir-être</h2>
      <div className="grid grid-3" style={{ marginTop: '24px', marginBottom: '56px' }}>
        {pointsForts.savoirEtre.map((s, i) => (
          <div className="card" key={i}>
            <h3>{s.titre}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {s.texte}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        <div>
          <h2>Mes outils</h2>
          <div style={{ marginTop: '20px' }}>
            {pointsForts.outils.map((o, i) => (
              <span className="tag" key={i}>
                {o}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2>Mes langues</h2>
          <div style={{ marginTop: '20px' }}>
            {pointsForts.langues.map((l, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
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
