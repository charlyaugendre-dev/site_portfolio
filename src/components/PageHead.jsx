export default function PageHead({ eyebrow, titre, chapo }) {
  return (
    <div className="page-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{titre}</h1>
      {chapo && <p className="lead">{chapo}</p>}
    </div>
  )
}
