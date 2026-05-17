import { useEffect } from 'react'

function MentionsLegales() {
  useEffect(() => { document.title = 'Mentions légales - John Doe' }, [])

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])
  return (
    <section id="mentions-legales">
      <div className="container">
        <div className="text-center mb-5">
          <h1><strong>MENTIONS LÉGALES</strong></h1>
          <div className="ligne-titre-centre"></div>
        </div>

        <div className="accordion" id="accordionMentions">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEditeur">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditeur" aria-expanded="true" aria-controls="collapseEditeur">
                Éditeur du site
              </button>
            </h2>
            <div id="collapseEditeur" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <p><strong>John Doe</strong></p>
                <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                <p>Téléphone : 06 20 30 40 50</p>
                <p>Email : johndoe@email.com</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHebergeur">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHebergeur" aria-expanded="false" aria-controls="collapseHebergeur">
                Hébergeur du site
              </button>
            </h2>
            <div id="collapseHebergeur" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <p><strong>GitHub Pages</strong></p>
                <p>88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</p>
                <p>Site web : <a href="https://pages.github.com" target="_blank" rel="nofollow noopener">pages.github.com</a></p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCredits">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredits" aria-expanded="false" aria-controls="collapseCredits">
                Crédits
              </button>
            </h2>
            <div id="collapseCredits" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
              <div className="accordion-body">
                <p>Les images utilisées sur ce site proviennent de <a href="https://pixabay.com" target="_blank" rel="nofollow noopener">Pixabay</a>, banque d'images libres de droits.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MentionsLegales
