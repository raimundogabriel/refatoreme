import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import Principal from './components/principal/Principal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Principal />


    {/* <Footer /> */}
  </StrictMode>,
)
