import PageHead from '../components/PageHead.jsx'
import { ouverture } from '../data/content.js'

export default function Ouverture() {
  return (
    <section className="page container">
      <PageHead
        eyebrow="Page bonus"
        titre="Diversité, inclusion et autres cultures"
        chapo={ouverture.chapo}
      />
      <div className="grid grid-2">
        {ouverture.blocs.map((b, i) => (
          <div className="card" key={i}>
            <h3>{b.titre}</h3>
            <p style={{ margin: 0 }}>{b.texte}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
