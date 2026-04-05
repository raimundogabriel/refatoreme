import React from 'react'

function Pricing() {
  const planos = [
    { nome: 'Inicial', preco: 'Grátis', recursos: ['Recurso A', 'Recurso B'] },
    { nome: 'Médio', preco: 'R$ 49/mês', recursos: ['Recurso A', 'Recurso B', 'Recurso C'] },
    { nome: 'Avançado', preco: 'R$ 99/mês', recursos: ['Todos os Recursos', 'Suporte 24h'] }
  ]

  return (
    <section style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '40px' }}>
      {planos.map((plano, index) => (
        <div key={index} style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '20px', 
          width: '200px', 
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3>{plano.nome}</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{plano.preco}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {plano.recursos.map((rec, i) => <li key={i}>{rec}</li>)}
          </ul>
          <button style={{ marginTop: '15px', padding: '10px 20px', cursor: 'pointer' }}>Assinar</button>
        </div>
      ))}
    </section>
  )
}

export default Pricing