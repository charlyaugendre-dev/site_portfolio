import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Accueil from './pages/Accueil.jsx'
import APropos from './pages/APropos.jsx'
import Passion from './pages/Passion.jsx'
import Universite from './pages/Universite.jsx'
import Professionnel from './pages/Professionnel.jsx'
import PointsForts from './pages/PointsForts.jsx'
import Ouverture from './pages/Ouverture.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/realisations-universite" element={<Universite />} />
          <Route path="/realisations-professionnelles" element={<Professionnel />} />
          <Route path="/points-forts" element={<PointsForts />} />
          <Route path="/ouverture" element={<Ouverture />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
