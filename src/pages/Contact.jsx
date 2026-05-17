import { useEffect } from 'react'

function Contact() {
  useEffect(() => { document.title = 'Contact - John Doe' }, [])
  return (
    <section id="contact">
      <div className="container">
        <div className="bloc p-5">
          <div className="text-center mb-2">
            <h1><strong>ME CONTACTER</strong></h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className="ligne-titre-centre"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Formulaire de contact</h2>
              <div className="ligne-sous-titre"></div>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Votre Nom" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Votre adresse e-mail" required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Sujet" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Votre message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
            <div className="col-md-6">
              <h2>Mes coordonnées</h2>
              <div className="ligne-sous-titre"></div>
              <p><i className="fas fa-map-marker-alt"></i> 40 rue Laure Diebold, 69009 Lyon, France</p>
              <p><i className="fas fa-phone"></i> 06 20 30 40 50</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.4!2d4.8357!3d45.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb79dffa0001%3A0x206793e4e2c99570!2sLyon!5e0!3m2!1sfr!2sfr!4v1234567890"
                style={{ border: 0, width: '100%', height: '250px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
