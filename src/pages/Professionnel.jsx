import PageHead from '../components/PageHead.jsx'
import Realisation from '../components/Realisation.jsx'
import { realisationsPro } from '../data/content.js'

export default function Professionnel() {
  return (
    <section className="sheet wrap">
      <PageHead
        titre="Mes réalisations professionnelles"
        chapo="Mon stage en cabinet et les projets que je mène en dehors de l'université, avec le même niveau d'analyse."
      />
      {realisationsPro.map((item, i) => (
        <Realisation key={i} item={item} />
      ))}
    </section>
  )
}
