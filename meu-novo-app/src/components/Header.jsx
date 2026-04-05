import React from 'react'

function Header() {
  return (
    <header style={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
      color: 'white', 
      padding: '40px 20px', 
      textAlign: 'center', // MANTÉM OS TEXTOS NO CENTRO
      borderBottom: '4px solid #007bff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '3.5rem', 
          fontWeight: '500',      
          lineHeight: '1',        
          color: '#ffffff' 
        }}>
          Escola Virtual <br /> 
          <span style={{ 
            color: 'rgba(0, 123, 255, 0.85)', 
            display: 'block',                 
            marginTop: '5px' 
          }}>
            Fronteiras.
          </span>
        </h1>

        <p style={{ 
          opacity: 0.6,             
          margin: '20px 0', 
          fontSize: '0.9rem', 
          fontWeight: '200',
          letterSpacing: '5px',     
          textTransform: 'uppercase',
          color: '#ffffff'
        }}>
          Seu futuro começa aqui.
        </p>

        {/* NAVEGAÇÃO ALINHADA À ESQUERDA */}
        <nav style={{ marginTop: '50px' }}>
          <ul style={{ 
            display: 'flex', 
            justifyContent: 'flex-start', // SÓ OS LINKS VÃO PARA A ESQUERDA
            gap: '40px', 
            listStyle: 'none', 
            padding: 0,
            fontSize: '0.85rem',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            <li><a href="#menu" className="nav-link-modern" style={{ color: '#007bff', textDecoration: 'none' }}>MENU</a></li>
            <li><a href="#noticias" className="nav-link-modern" style={{ color: 'white', textDecoration: 'none' }}>NOTÍCIAS</a></li>
            <li><a href="#planos" className="nav-link-modern" style={{ color: 'white', textDecoration: 'none' }}>NOSSOS PLANOS</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
