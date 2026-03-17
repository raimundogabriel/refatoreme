import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import Principal from './components/principal/Principal'
import Footer from './components/footer/Footer'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home />
  </StrictMode>,
)
