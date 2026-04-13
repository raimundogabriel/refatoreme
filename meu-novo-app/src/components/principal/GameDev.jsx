import './GameDev.css';

function GameDev() {
    const especialidadesFront = [
        {
        titulo: "IA e Algoritmos",
        descricao: "Implementação de redes neurais e máquinas de estado para comportamentos complexos de NPCs."
    },
    {
        titulo: "Geração Procedural",
        descricao: "Criação de mundos infinitos e dinâmicos através de algoritmos matemáticos avançados."
    },
    {
        titulo: "Otimização com IA",
        descricao: "Uso de inteligência artificial para predição de quadros e renderização de alta perfomance."
    }
];

 return (
    <section className="gamedev-section">
      <div className="gamedev-container">
        <div className="gamedev-header">
          <h2>Frontend para <span className="highlight">Games</span></h2>
          <p>Dominando as tecnologias que dão vida à interface dos jogos modernos.</p>
        </div>
        
        <div className="gamedev-grid-mini">
          {especialidadesFront.map((item, index) => (
            <div key={index} className="mini-card">
              <span className="mini-icon">{item.icone}</span>
              <h4>{item.titulo}</h4>
              <p>{item.descricao}</p>
              
              <div className="skill-container">
                <div className="skill-label">Nível de XP: {item.xp}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: item.xp }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gamedev-footer">
          <p>SISTEMA PRONTO: <span className="neon-text">AGUARDANDO INPUT DO JOGADOR...</span></p>
        </div>
        <div
        className="gamedev-sales-pitch">
          <h3>Sua ideia merece um mundo próprio.</h3>
          <p>Na TechNova, não apenas codificamos, também criamos experiências digitais inesquecíveis.</p>
          <button
          className="btn-venda">Solicitar Orçamento</button>
        </div>
      </div>
    </section>
  );
}


export default GameDev;