import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BtnTop from './components/BtnTop'

import Accueil from './pages/Accueil'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import GithubProfile from './pages/GithubProfile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/github" element={<GithubProfile />} />
      </Routes>
      <Footer />
      <BtnTop />
    </BrowserRouter>
  )
}

export default App
