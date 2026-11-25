export default function Realisation({ item }) {
  return (
    <article className="entry">
      <h2 className="entry-title">{item.titre}</h2>
      <div className="entry-meta">
        {item.organisation ? `${item.organisation}, ` : ''}
        {item.periode}. {item.role}.
      </div>

      {item.visuels?.length > 0 && (
        <div className={item.visuelsPortrait ? 'visuels visuels-portrait' : 'visuels'}>
          {item.visuels.map((v, i) => (
            <figure key={i}>
              <img
                src={v.src}
                alt={v.legende}
                loading="lazy"
                style={v.position ? { objectPosition: v.position } : undefined}
              />
              <figcaption>{v.legende}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="row">
        <div className="side">Contexte</div>
        <div className="body">
          <p>{item.contexte}</p>
        </div>
      </div>

      <div className="row">
        <div className="side">Objectifs</div>
        <div className="body">
          <ul className="list">
            {item.objectifs.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="side">Démarche</div>
        <div className="body">
          <ul className="list">
            {item.demarche.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="side">Ma contribution</div>
        <div className="body">
          <p>{item.contribution}</p>
        </div>
      </div>

      <div className="row">
        <div className="side">Résultats</div>
        <div className="body">
          <ul className="list">
            {item.resultats.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="aside">
        <h2>Ce que j'en retiens</h2>
        <div className="part">
          <h3>Ce qui a été réussi</h3>
          <p>{item.reflexion.reussi}</p>
        </div>
        <div className="part">
          <h3>Mes pistes d'amélioration</h3>
          <p>{item.reflexion.ameliorer}</p>
        </div>
        <div className="part">
          <h3>Mes acquis</h3>
          <dl className="acquis">
            <dt>Savoirs</dt>
            <dd>{item.reflexion.savoirs}</dd>
            <dt>Savoir-faire</dt>
            <dd>{item.reflexion.savoirFaire}</dd>
            <dt>Savoir-être</dt>
            <dd>{item.reflexion.savoirEtre}</dd>
          </dl>
        </div>
      </div>

      {item.competences?.length > 0 && (
        <div className="refs">
          Compétences du référentiel mobilisées
          {item.competences.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      )}
    </article>
  )
}
