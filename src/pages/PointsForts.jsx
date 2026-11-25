import PageHead from '../components/PageHead.jsx'
import { pointsForts, espritEntreprendre } from '../data/content.js'

export default function PointsForts() {
  return (
    <section className="sheet wrap">
      <PageHead
        titre="Mes points forts"
        chapo="Trois apprentissages critiques du référentiel BUT 3 GC2F sur lesquels je me sens le plus solide, chacun adossé à une réalisation concrète, et trois savoir-être qui les accompagnent."
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

      <div className="esprit">
        <h2>Esprit d'entreprendre</h2>
        <p className="prose muted" style={{ marginBottom: '10px' }}>
          {espritEntreprendre.intro}
        </p>
        <div className="echelle">
          Échelle du référentiel : {espritEntreprendre.echelle.join(', ').toLowerCase()}.
        </div>

        {espritEntreprendre.items.map((it, i) => (
          <div className="meta" key={i}>
            <div>
              <div className="meta-cat">{it.categorie}</div>
              <h3>{it.nom}</h3>
              <p className="muted" style={{ margin: 0, fontSize: '15px' }}>
                {it.preuve}
              </p>
            </div>
            <div className="jauge" title={espritEntreprendre.echelle[it.niveau - 1]}>
              {[1, 2, 3, 4].map((n) => (
                <i className="pip" key={n} data-on={n <= it.niveau ? 'x' : undefined} />
              ))}
              <span>{espritEntreprendre.echelle[it.niveau - 1]}</span>
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
