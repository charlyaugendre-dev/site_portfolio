import { profil } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="colophon">
      <div className="wrap colophon-inner">
        <span>
          Portfolio de valorisation, BUT 3 GEA, IUT de l'Indre, {new Date().getFullYear()}
        </span>
        <span>
          <a href={`mailto:${profil.email}`}>{profil.email}</a>
          {'  '}
          <a href={profil.linkedin} target="_blank" rel="noreferrer" style={{ marginLeft: '20px' }}>
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}
