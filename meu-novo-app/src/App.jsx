import Header from './components/Header'
import Card from './components/card'
import Pricing from './components/Pricing' // 1. Importe aqui
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header /> 
      
      <main>
        <h2>Nossos Projetos</h2>
        <div className="card-container">
          <Card titulo="EAD" descricao="Educação a distância com metodologia prática, focada nas habilidades que o mercado de trabalho realmente exige hoje." />
          <Card titulo="Ligação com o Futuro" descricao="Sua ponte direta para o sucesso profissional com educação de ponta e visão estratégica." />
        </div>

        <h2>Nossos Planos</h2>
        <Pricing />
      </main>

      <Footer /> 
    </div>
  )
}

export default App 