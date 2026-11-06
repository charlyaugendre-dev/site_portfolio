import PageHead from '../components/PageHead.jsx'
import { passion } from '../data/content.js'

export default function Passion() {
  return (
    <section className="sheet wrap">
      <PageHead titre={passion.titre} chapo={passion.chapo} />

      <div className="prose" style={{ marginBottom: '64px' }}>
        {passion.recit.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2>Ce que cette passion m'a appris</h2>
      <p className="prose muted" style={{ marginBottom: '28px' }}>
        Les compétences qui ne viennent pas d'un cours et que je réutilise pourtant tous les jours.
      </p>

      <div>
        {passion.madSkills.map((s, i) => (
          <div className="row" key={i}>
            <div className="side">{s.titre}</div>
            <div className="body">
              <p>{s.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
