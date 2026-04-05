import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Certifique-se de que este arquivo existe para os estilos globais
import App from './App.jsx'

// Seleciona o elemento 'root' definido no seu index.html
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
