import React from 'react'

function Header() {
  return (
    <header style={{ padding: '20px', background: '#282c34', color: 'white', textAlign: 'center' }}>
      <h1>Escola Fronteira Sul</h1>
      
      <nav>
        <ul style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          listStyle: 'none', 
          padding: 0 
        }}>
          <li><a href="#menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</a></li>
          <li><a href="#noticias" style={{ color: 'white', textDecoration: 'none' }}>Notícias</a></li>
          <li><a href="#planos" style={{ color: 'white', textDecoration: 'none' }}>Nossos Planos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header