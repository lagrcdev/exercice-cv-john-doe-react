function Realisations() {
  return (
    <>
      <div className="image-banniere"></div>

      <section id="realisations">
        <div className="container">
          <div className="text-center mb-5">
            <h1><strong>MES RÉALISATIONS</strong></h1>
            <p>Découvrez quelques-uns de mes projets.</p>
            <div className="ligne-titre-centre"></div>
          </div>
          <div className="row justify-content-center align-items-stretch">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/legumes.png" className="card-img-top" alt="Fresh Food" />
                <div className="card-body">
                  <h2 className="card-title">Fresh Food</h2>
                  <p className="card-subtitle mb-2">Réalisation d'un site avec commande en ligne.</p>
                  <a href="#" className="btn btn-primary">Voir</a>
                  <p className="mt-2">Site réalisé en PHP et MySQL</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/sushis.png" className="card-img-top" alt="Restaurant Akira" />
                <div className="card-body">
                  <h2 className="card-title">Restaurant Akira</h2>
                  <p className="card-subtitle mb-2">Réalisation d'un site vitrine.</p>
                  <a href="#" className="btn btn-primary">Voir</a>
                  <p className="mt-2">Site réalisé avec WordPress</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/zen.png" className="card-img-top" alt="Espace bien-être" />
                <div className="card-body">
                  <h2 className="card-title">Espace bien-être</h2>
                  <p className="card-subtitle mb-2">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                  <a href="#" className="btn btn-primary">Voir</a>
                  <p className="mt-2">Site réalisé en HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Realisations
