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
        <Card titulo="EFS" descricao="" />
        <Card titulo="Ligação com o Futuro." descricao="" />
        
        <h2 style={{ textAlign: 'center' }}>Nossos Planos</h2>
        <Pricing /> {/* 2. Coloque aqui */}
      </main>

      <Footer /> 
    </div>
  )
}

export default App