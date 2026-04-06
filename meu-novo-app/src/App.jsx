import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home/Home'
import Servico from './pages/servico/Servico'
import Contato from './pages/contato/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servico' element={<Servico />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
