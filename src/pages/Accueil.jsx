import { useEffect } from 'react'

function Accueil() {

  useEffect(() => {
    document.title = 'Accueil - John Doe'
  }, [])

  return (
    <>
      <section id="accueil">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1>John Doe</h1>
          <h2>Développeur web</h2>
          <a href="#apropos" className="btn btn-primary">En savoir plus</a>
        </div>
      </section>

      <section id="apropos">
        <div className="container">
          <div className="row bloc">
            <div className="col-md-6">
              <h3><strong>À propos</strong></h3>
              <div className="ligne-sous-titre"></div>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.<br /><br />
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.<br /><br />
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid rounded mb-3" src="/images/johndoe.jpg" alt="John Doe" />
              <h3>Mes compétences</h3>

              <p>HTML5 <span>90%</span></p>
              <div className="progress mb-3">
                <div className="progress-bar barre-html" style={{ width: '90%' }}></div>
              </div>

              <p>CSS3 <span>80%</span></p>
              <div className="progress mb-3">
                <div className="progress-bar barre-css" style={{ width: '80%' }}></div>
              </div>

              <p>JavaScript <span>70%</span></p>
              <div className="progress mb-3">
                <div className="progress-bar barre-js" style={{ width: '70%' }}></div>
              </div>

              <p>PHP <span>60%</span></p>
              <div className="progress mb-3">
                <div className="progress-bar barre-php" style={{ width: '60%' }}></div>
              </div>

              <p>React <span>50%</span></p>
              <div className="progress mb-3">
                <div className="progress-bar barre-react" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accueil
