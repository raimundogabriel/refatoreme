import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
//paginas
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import Contato from './pages/contato/Contato';

function App (){
    return(
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>

                <Footer />
            </Router>
    )
}

export default App;