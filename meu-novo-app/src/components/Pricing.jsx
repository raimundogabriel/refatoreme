import React from 'react'

function Pricing() {
  const planos = [
    { nome: 'Inicial', preco: 'Grátis', cor: '#6c757d', destaque: false },
    { nome: 'Médio', preco: 'R$ 49/mês', cor: '#007bff', destaque: true }, // Destaque Azul
    { nome: 'Avançado', preco: 'R$ 99/mês', cor: '#28a745', destaque: false } // Verde
  ]

  return (
    <section style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '40px', flexWrap: 'wrap' }}>
      {planos.map((plano, index) => (
        <div key={index} style={{ 
          border: plano.destaque ? '2px solid ' + plano.cor : '1px solid #ccc', 
          borderRadius: '12px', 
          padding: '30px', 
          width: '250px', 
          textAlign: 'center',
          boxShadow: plano.destaque ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
          transform: plano.destaque ? 'scale(1.05)' : 'scale(1)', // Deixa o do meio um pouco maior
          transition: '0.3s'
        }}>
          {plano.destaque && <span style={{ background: plano.cor, color: 'white', padding: '2px 10px', borderRadius: '20px', fontSize: '12px' }}>MAIS POPULAR</span>}
          
          <h3 style={{ color: '#333', marginTop: '10px' }}>{plano.nome}</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: plano.cor }}>{plano.preco}</p>
          
          <ul style={{ listStyle: 'none', padding: '0 0 20px 0', color: '#666', lineHeight: '2' }}>
            <li>Recurso A</li>
            <li>Recurso B</li>
            {plano.nome !== 'Inicial' && <li>Recurso C</li>}
          </ul>

          <button style={{ 
            backgroundColor: plano.cor, 
            color: 'white', 
            border: 'none', 
            padding: '12px 25px', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%'
          }}>
            Assinar {plano.nome}
          </button>
        </div>
      ))}
    </section>
  )
}

export default Pricing