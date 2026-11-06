import PageHead from '../components/PageHead.jsx'
import { ouverture } from '../data/content.js'

export default function Ouverture() {
  return (
    <section className="sheet wrap">
      <PageHead titre="Diversité, inclusion et autres cultures" chapo={ouverture.chapo} />
      <div>
        {ouverture.blocs.map((b, i) => (
          <div className="row" key={i}>
            <div className="side">{b.titre}</div>
            <div className="body">
              <p>{b.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
