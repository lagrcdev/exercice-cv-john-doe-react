import { useEffect } from 'react'

function Services() {
  useEffect(() => { document.title = 'Services - John Doe' }, [])
  return (
    <>
      <div className="image-banniere"></div>

      <section id="services">
        <div className="container">
          <div className="text-center mb-5">
            <h1><strong>MON OFFRE DE SERVICES</strong></h1>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="ligne-titre-centre"></div>
          </div>
          <div className="row justify-content-center align-items-stretch">
            <div className="col-md-4">
              <div className="bloc text-center p-4">
                <i className="fas fa-desktop fa-3x mb-3"></i>
                <h2><strong>UX DESIGN</strong></h2>
                <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bloc text-center p-4">
                <i className="fas fa-file-code fa-3x mb-3"></i>
                <h2><strong>DEVELOPPEMENT WEB</strong></h2>
                <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bloc text-center p-4">
                <i className="fas fa-search-dollar fa-3x mb-3"></i>
                <h2><strong>REFERENCEMENT</strong></h2>
                <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
