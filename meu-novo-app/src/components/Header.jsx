import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <nav>
                <h1>TechNova</h1>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/servico">Serviços</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>

    )
}
export default Header;