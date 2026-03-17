import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import './Header.css';
import Home from '../../pages/Home';

function Header() {
    const [count, setCount] = useState(0)
    return (
     

            <Router>
                <nav>
                    <h1>TechNova</h1>
                    <ul>
                        <li><Link path="/">Início</Link></li>
                        <li><Link path="/servicos">Serviços</Link></li>
                        <li><Link path="/contato">Contato</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" emelemt={<Home />}></Route>
                    <Route path="/servicos" element={<Services />}></Route>
                    <Route path="/contato" element={<Contact />}></Route>
                </Routes>


            </Router>
        
    )
}

export default Header