import React, { useState } from 'react';
import { Check, Zap, Star, ShieldCheck } from 'lucide-react';

// --- COMPONENTE: HEADER ---
const Header = () => (
  <header style={{ 
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
    color: 'white', padding: '15px 5px', textAlign: 'center', 
    borderBottom: '2px solid #007bff', boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ margin: '0', fontSize: '1.8rem' }}>Escola Virtual <span style={{ color: '#007bff' }}>Fronteiras</span></h1>
      <p style={{ opacity: 0.6, margin: '5px 0', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Seu futuro começa aqui.</p>
      <nav style={{ marginTop: '20px' }}>
        <ul style={{ display: 'flex', justifyContent: 'flex-start', gap: '25px', listStyle: 'none', padding: 0, fontWeight: 'bold', fontSize: '0.8rem' }}>
          <li><a href="#ead-futuro" style={{ color: '#007bff', textDecoration: 'none' }}>MENU</a></li>
          <li><a href="#noticias" style={{ color: 'white', textDecoration: 'none' }}>NOTÍCIAS</a></li>
          <li><a href="#planos" style={{ color: 'white', textDecoration: 'none' }}>NOSSOS PLANOS</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// --- COMPONENTE: SEÇÃO EXPANSÍVEL ---
const ExpandableSection = ({ title, shortText, fullText, isCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = isCard ? {
    background: '#2c3e50', padding: '20px', borderRadius: '12px', border: '1px solid #007bff', flex: '1', minWidth: '250px', textAlign: 'center'
  } : { padding: '30px 0', textAlign: 'center' };

  return (
    <div style={style}>
      <h2 style={{ color: '#007bff', fontSize: isCard ? '1.3rem' : '1.5rem' }}>{title}</h2>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{shortText}</p>
      {isOpen && (
        <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'left', lineHeight: '1.4' }}>
          {fullText}
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} style={{ marginTop: '10px', background: 'none', border: '1px solid #007bff', color: '#007bff', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer', fontSize: '0.75rem' }}>
        {isOpen ? 'Ver menos ↑' : 'Ler mais ↓'}
      </button>
    </div>
  );
};

// --- NOVO COMPONENTE: PRICING CARD (MODERNO) ---
const PricingCard = ({ title, price, features, isHighlighted, badge, color, icon: Icon }) => {
  return (
    <div style={{
      flex: '1', minWidth: '300px', backgroundColor: isHighlighted ? '#1e293b' : '#263238',
      borderRadius: '24px', padding: '40px 30px', border: isHighlighted ? '2px solid #007bff' : '1px solid #444',
      position: 'relative', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column',
      transform: isHighlighted ? 'scale(1.05)' : 'scale(1)', zIndex: isHighlighted ? 2 : 1,
      boxShadow: isHighlighted ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
    }}>
      {badge && (
        <span style={{
          position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#007bff', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold'
        }}>{badge}</span>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ color: color, margin: 0, fontWeight: '800' }}>{title}</h3>
        <Icon size={24} color={color} />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-2px' }}>R$ {price}</span>
        <span style={{ fontSize: '1rem', opacity: 0.5 }}>/mês</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flexGrow: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', fontSize: '0.9rem', color: f.disabled ? '#546e7a' : '#eceff1', textDecoration: f.disabled ? 'line-through' : 'none' }}>
            <Check size={18} color={f.disabled ? '#546e7a' : '#007bff'} strokeWidth={3} />
            {f.text}
          </li>
        ))}
      </ul>
      <button style={{
        width: '100%', padding: '16px', borderRadius: '12px', border: 'none',
        backgroundColor: isHighlighted ? '#007bff' : '#37474f', color: 'white',
        fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: 'filter 0.2s'
      }} onMouseOver={(e) => e.target.style.filter = 'brightness(1.2)'} onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}>
        Assinar {title}
      </button>
    </div>
  );
};

function App() {
  const [isAnnual, setIsAnnual] = useState(true);
  const calcPrice = (val) => isAnnual ? (val * 0.8).toFixed(2) : val.toFixed(2);

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <section id="noticias"><ExpandableSection title="NOTÍCIAS" shortText="A IA está mudando a produtividade nas IDEs." fullText="A integração profunda da inteligência artificial diretamente nos editores de código está permitindo que desenvolvedores foquem na lógica de alto nível..." /></section>
        
        <div id="ead-futuro" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '40px 0' }}>
          <ExpandableSection isCard title="EAD" shortText="Sua sala de aula em qualquer lugar." fullText="Nossa plataforma utiliza tecnologia de streaming de baixa latência..." />
          <ExpandableSection isCard title="Conexão" shortText="Onde o talento encontra a oportunidade." fullText="Mais que um curso, somos uma ponte para startups..." />
        </div>

        {/* SEÇÃO PLANOS REFORMULADA */}
        <section id="planos" style={{ padding: '60px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#007bff', fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px' }}>NOSSOS PLANOS</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <span style={{ opacity: isAnnual ? 0.5 : 1 }}>Mensal</span>
              <div onClick={() => setIsAnnual(!isAnnual)} style={{ width: '50px', height: '26px', background: '#007bff', borderRadius: '15px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: isAnnual ? '27px' : '3px', transition: '0.3s' }} />
              </div>
              <span>Anual <small style={{ color: '#10b981', fontWeight: 'bold' }}>-20% OFF</small></span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
            <PricingCard title="BRONZE" color="#cd7f32" icon={Zap} price={calcPrice(49.90)} features={[{text: "20 Cursos de Base"}, {text: "Certificados Digitais"}, {text: "Suporte via Fórum"}, {text: "Mentoria", disabled: true}]} />
            
            <PricingCard isHighlighted badge="RECOMENDADO" title="PRATA" color="#fff" icon={Star} price={calcPrice(89.90)} features={[{text: "Acesso Vitalício"}, {text: "Grupo VIP Telegram"}, {text: "Lives Semanais"}, {text: "Projetos Reais SENAI"}, {text: "Mentoria Individual", disabled: true}]} />
            
            <PricingCard title="OURO" color="#ffd700" icon={ShieldCheck} price={calcPrice(149.90)} features={[{text: "Tudo do Prata"}, {text: "Mentoria 1 para 1"}, {text: "Review de Código"}, {text: "Vagas Exclusivas"}]} />
          </div>
        </section>
      </main>

      <footer style={{ background: '#111', color: 'gray', padding: '30px', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p>© 2026 - Todos os direitos reservados | Desenvolvido no SENAI</p>
      </footer>
    </div>
  );
}

export default App;
