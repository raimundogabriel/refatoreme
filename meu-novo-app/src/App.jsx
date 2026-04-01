import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header /> 
      
      <main>
        <Card titulo="Projeto FrontEnd" descricao="concluída!" />
        <Card titulo="SENAI" descricao="sucesso." />
      </main>

      <Footer /> 
    </div>
  )
}

export default App