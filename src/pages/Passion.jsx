import PageHead from '../components/PageHead.jsx'
import { passion } from '../data/content.js'

export default function Passion() {
  return (
    <section className="page container">
      <PageHead eyebrow="Ma passion" titre={passion.titre} chapo={passion.chapo} />

      <div style={{ maxWidth: '740px', marginBottom: '64px' }}>
        {passion.recit.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2>Ce que cette passion m'a appris</h2>
      <p className="muted" style={{ maxWidth: '640px', marginBottom: '28px' }}>
        Les compétences qui ne viennent pas d'un cours et que je réutilise pourtant tous les jours.
      </p>
      <div className="grid grid-2">
        {passion.madSkills.map((s, i) => (
          <div className="card card-accent" key={i}>
            <h3>{s.titre}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {s.texte}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
