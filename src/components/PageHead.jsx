export default function PageHead({ titre, chapo }) {
  return (
    <div className="sheet-head">
      <h1>{titre}</h1>
      {chapo && <p className="lead">{chapo}</p>}
    </div>
  )
}
