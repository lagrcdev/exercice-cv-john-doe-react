import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3><strong>John Doe</strong></h3>
            <p>40 rue Laure Diebold <br />69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <a href="https://github.com/github-john-doe" target="_blank" rel="nofollow noopener"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="nofollow noopener"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="nofollow noopener"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="col-md-3">
            <h3><strong>Liens utiles</strong></h3>
            <ul className="list-unstyled">
              <li><i className="fas fa-chevron-right"></i> <Link to="/">Accueil</Link></li>
              <li><i className="fas fa-chevron-right"></i> <Link to="/#apropos">À propos</Link></li>
              <li><i className="fas fa-chevron-right"></i> <Link to="/services">Services</Link></li>
              <li><i className="fas fa-chevron-right"></i> <Link to="/contact">Me contacter</Link></li>
              <li><i className="fas fa-chevron-right"></i> <Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3><strong>Mes dernières réalisations</strong></h3>
            <ul className="list-unstyled">
              <li><i className="fas fa-chevron-right"></i> <a href="#">Fresh food</a></li>
              <li><i className="fas fa-chevron-right"></i> <a href="#">Restaurant Akira</a></li>
              <li><i className="fas fa-chevron-right"></i> <a href="#">Espace bien-être</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3><strong>Mes derniers articles</strong></h3>
            <ul className="list-unstyled">
              <li><i className="fas fa-chevron-right"></i> <a href="#">Coder son site en HTML/CSS</a></li>
              <li><i className="fas fa-chevron-right"></i> <a href="#">Vendre ses produits sur le web</a></li>
              <li><i className="fas fa-chevron-right"></i> <a href="#">Se positionner sur google</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Designed by John Doe</p>
      </div>
    </footer>
  )
}

export default Footer
