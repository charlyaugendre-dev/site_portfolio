import { NavLink } from 'react-router-dom'
import { profil } from '../data/content.js'

const liens = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/passion', label: 'Ma passion' },
  { to: '/realisations-universite', label: 'Université' },
  { to: '/realisations-professionnelles', label: 'Professionnel' },
  { to: '/points-forts', label: 'Points forts' },
  { to: '/ouverture', label: 'Ouverture' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          {profil.prenom} {profil.nom} <span>/ portfolio</span>
        </NavLink>
        <nav className="nav">
          {liens.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
