import { useState, useEffect } from 'react'

function BtnTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="#"
      id="btn-top"
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  )
}

export default BtnTop
