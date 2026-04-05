import React from 'react'

function Footer() {
  return (
    <footer style={{ 
      background: '#1a1a1a', 
      color: 'gray', 
      padding: '30px', 
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '0.9rem'
    }}>
      <p>© 2026 - Todos os direitos reservados | Desenvolvido no SENAI</p>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <span style={{ color: '#007bff' }}>● React</span>
        <span style={{ color: '#007bff' }}>● Vite</span>
        <span style={{ color: '#007bff' }}>● JavaScript</span>
      </div>
    </footer>
  )
}

export default Footer