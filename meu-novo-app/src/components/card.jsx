import React, { useState } from 'react'

function Card({ titulo }) {
  const [aberto, setAberto] = useState(false);

  // Armazenamos as descrições aqui para elas aparecerem SÓ ao clicar
  const detalhesPorTitulo = {
    "EAD": "Educação a distância com metodologia prática, focada nas habilidades que o mercado de trabalho realmente exige hoje.",
    "Ligação com o Futuro": "Sua ponte direta para o sucesso profissional com educação de ponta e visão estratégica."
  };

  const textoDetalhado = detalhesPorTitulo[titulo];

  return (
    <div style={{ 
      background: 'white', 
      padding: '30px', 
      borderRadius: '15px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      width: '300px',
      borderLeft: '5px solid #007bff',
      textAlign: 'left',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{ color: '#1a1a1a', marginBottom: '20px' }}>{titulo}</h3>
      
      {/* Botão de Detalhes - Agora logo abaixo do Título */}
      <button 
        onClick={() => setAberto(!aberto)}
        style={{ 
          background: aberto ? '#007bff' : 'none', 
          border: '1px solid #007bff', 
          color: aberto ? 'white' : '#007bff', 
          padding: '8px 15px', 
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
      >
        {aberto ? 'Fechar' : 'Ver Detalhes'}
      </button>

      {/* A descrição só aparece aqui se 'aberto' for verdadeiro */}
      {aberto && textoDetalhado && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          borderLeft: '3px solid #007bff',
          fontSize: '0.95rem',
          color: '#444',
          lineHeight: '1.5',
          animation: 'fadeIn 0.3s ease-in'
        }}>
          {textoDetalhado}
        </div>
      )}
    </div>
  )
}

export default Card

