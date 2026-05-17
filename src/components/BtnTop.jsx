import { useState, useEffect } from 'react'

function BtnTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (
    <a href="#" id="btn-top" style={{ display: visible ? 'flex' : 'none' }}>
      <i className="fas fa-chevron-up"></i>
    </a>
  )
}

export default BtnTop
