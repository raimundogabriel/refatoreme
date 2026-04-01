import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Principal from './components/principal/Principal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Principal />
      <Footer />
    </>
  )
}

export default App
