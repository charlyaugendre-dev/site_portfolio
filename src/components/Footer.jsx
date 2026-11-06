import { profil } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} {profil.prenom} {profil.nom}. Portfolio de valorisation, BUT 3 GEA,
          IUT de l'Indre.
        </div>
        <div style={{ display: 'flex', gap: '18px' }}>
          <a href={`mailto:${profil.email}`}>{profil.email}</a>
          <a href={profil.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
