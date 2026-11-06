import PageHead from '../components/PageHead.jsx'
import Realisation from '../components/Realisation.jsx'
import { realisationsUniversite } from '../data/content.js'

export default function Universite() {
  return (
    <section className="page container">
      <PageHead
        eyebrow="Réalisations"
        titre="Mes travaux à l'université"
        chapo="Les projets menés en BUT 2 que je retiens, avec le contexte, ma contribution réelle et ce que j'en ai tiré."
      />
      {realisationsUniversite.map((item, i) => (
        <Realisation key={i} item={item} />
      ))}
    </section>
  )
}
