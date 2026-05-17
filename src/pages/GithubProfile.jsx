import { useState, useEffect } from 'react'

function ProfilInfo({ profil }) {
  return (
    <div className="bloc p-5">
      <div className="text-center mb-4">
        <img
          src={profil.avatar_url}
          alt={profil.name}
          className="rounded-circle mb-3"
          width="150"
          height="150"
        />
        <h2><strong>{profil.name}</strong></h2>
        <p className="text-muted">@{profil.login}</p>
        {profil.bio && <p>{profil.bio}</p>}
      </div>

      <div className="row text-center mb-4">
        <div className="col-md-4">
          <h4><strong>{profil.public_repos}</strong></h4>
          <p>Repos publics</p>
        </div>
        <div className="col-md-4">
          <h4><strong>{profil.followers}</strong></h4>
          <p>Followers</p>
        </div>
        <div className="col-md-4">
          <h4><strong>{profil.following}</strong></h4>
          <p>Following</p>
        </div>
      </div>

      <ul className="list-unstyled">
        {profil.location && (
          <li className="mb-2">
            <i className="fas fa-map-marker-alt me-2" style={{ color: '#0d6efd' }}></i>
            {profil.location}
          </li>
        )}
        {profil.blog && (
          <li className="mb-2">
            <i className="fas fa-link me-2" style={{ color: '#0d6efd' }}></i>
            <a href={profil.blog} target="_blank" rel="noopener noreferrer">{profil.blog}</a>
          </li>
        )}
        {profil.html_url && (
          <li className="mb-2">
            <i className="fab fa-github me-2" style={{ color: '#0d6efd' }}></i>
            <a href={profil.html_url} target="_blank" rel="noopener noreferrer">{profil.html_url}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

function GithubProfile() {
  const [profil, setProfil] = useState(null)
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => {
        if (!res.ok) throw new Error('Profil introuvable')
        return res.json()
      })
      .then((data) => {
        setProfil(data)
        setChargement(false)
      })
      .catch((err) => {
        setErreur(err.message)
        setChargement(false)
      })
  }, [])

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1><strong>PROFIL GITHUB</strong></h1>
          <div className="ligne-titre-centre"></div>
        </div>

        {chargement && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        )}

        {erreur && (
          <div className="alert alert-danger text-center">{erreur}</div>
        )}

        {profil && <ProfilInfo profil={profil} />}
      </div>
    </section>
  )
}

export default GithubProfile
