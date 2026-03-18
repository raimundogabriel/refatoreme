import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import './Header.css';

function Header() {
    const [count, setCount] = useState(0)
    return (
            <header>
                <nav>
                    <h1>TechNova</h1>
                    <ul>
                        <li><Link path="/">Início</Link></li>
                        <li><Link path="/servicos">Serviços</Link></li>
                        <li><Link path="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header