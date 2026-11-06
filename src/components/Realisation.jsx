export default function Realisation({ item }) {
  return (
    <article className="realisation">
      <div className="realisation-head">
        <div>
          <h2>{item.titre}</h2>
          <div className="meta">
            {item.organisation ? `${item.organisation} · ` : ''}
            {item.periode} · {item.role}
          </div>
        </div>
      </div>

      <div className="block">
        <h4>Contexte</h4>
        <p>{item.contexte}</p>
      </div>

      <div className="grid grid-2 block">
        <div className="card">
          <h4>Objectifs</h4>
          <ul className="clean">
            {item.objectifs.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h4>Démarche</h4>
          <ul className="clean">
            {item.demarche.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block">
        <h4>Ma contribution</h4>
        <p>{item.contribution}</p>
      </div>

      <div className="block">
        <h4>Résultats</h4>
        <ul className="clean">
          {item.resultats.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="reflexion block">
        <h4 style={{ color: 'var(--accent)' }}>Démarche réflexive</h4>
        <div className="row">
          <h3>Ce qui a été réussi</h3>
          <p>{item.reflexion.reussi}</p>
        </div>
        <div className="row">
          <h3>Mes pistes d'amélioration</h3>
          <p>{item.reflexion.ameliorer}</p>
        </div>
        <div className="row">
          <h3>Ce que j'en ai appris</h3>
          <p>
            <strong>Savoirs :</strong> {item.reflexion.savoirs}
            <br />
            <strong>Savoir-faire :</strong> {item.reflexion.savoirFaire}
            <br />
            <strong>Savoir-être :</strong> {item.reflexion.savoirEtre}
          </p>
        </div>
      </div>

      {item.competences?.length > 0 && (
        <div>
          <h4>Compétences du référentiel mobilisées</h4>
          {item.competences.map((c, i) => (
            <span key={i} className="tag tag-accent">
              {c}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
