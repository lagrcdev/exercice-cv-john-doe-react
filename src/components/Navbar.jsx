import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">John Doe</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${menuOuvert ? 'show' : 'collapse'}`} id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={() => setMenuOuvert(false)}>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" onClick={() => setMenuOuvert(false)}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/realisations" onClick={() => setMenuOuvert(false)}>Réalisations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" onClick={() => setMenuOuvert(false)}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={() => setMenuOuvert(false)}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/github" onClick={() => setMenuOuvert(false)}>GitHub</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
