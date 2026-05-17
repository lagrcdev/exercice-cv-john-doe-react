import { useEffect } from 'react'

function Blog() {

  useEffect(() => {
    document.title = 'Blog - John Doe'
  }, [])

  return (
    <>
      <div className="image-banniere"></div>

      <section id="blog">
        <div className="container">
          <div className="text-center mb-5">
            <h1><strong>BLOG</strong></h1>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
            <div className="ligne-titre-centre"></div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog1.png" className="card-img-top" alt="Article 1" />
                <div className="card-body">
                  <h2 className="card-title">Coder son site en HTML/CSS</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 22 août 2022</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog2.png" className="card-img-top" alt="Article 2" />
                <div className="card-body">
                  <h2 className="card-title">Vendre ses produits sur le web</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 20 août 2022</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog3.png" className="card-img-top" alt="Article 3" />
                <div className="card-body">
                  <h2 className="card-title">Se positionner sur Google</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 1 août 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog4.png" className="card-img-top" alt="Article 4" />
                <div className="card-body">
                  <h2 className="card-title">Coder en responsive design</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 31 juillet 2022</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog5.png" className="card-img-top" alt="Article 5" />
                <div className="card-body">
                  <h2 className="card-title">Techniques de référencement</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 30 juillet 2022</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/images/imageblog6.png" className="card-img-top" alt="Article 6" />
                <div className="card-body">
                  <h2 className="card-title">Apprendre à coder</h2>
                  <p className="card-subtitle mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                  <p className="mt-2">Publié le 12 juillet 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
