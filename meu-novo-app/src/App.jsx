import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css' 

function App() {
  // Dados dinâmicos para os cards (o que antes estava no seu script.js)
  const especialidades = [
    { id: 1, titulo: "Desenvolvimento Web", descricao: "Criação de sites modernos com React." },
    { id: 2, titulo: "Arquitetura Cloud", descricao: "Soluções escaláveis na nuvem." },
    { id: 3, titulo: "Consultoria TI", descricao: "Transformação digital para sua empresa." }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <section id="services" className="cards-section">
          <h2>Nossas Especialidades</h2>
          <div className="cards-grid">
            {especialidades.map(item => (
              <Card 
                key={item.id} 
                titulo={item.titulo} 
                descricao={item.descricao} 
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App