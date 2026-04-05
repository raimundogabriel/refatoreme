import React from 'react';

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1>Escola Virtual <span>Fronteiras</span></h1>
        <nav>
          <ul>
            <li><a href="#ead-futuro">MENU</a></li>
            <li><a href="#noticias">NOTÍCIAS</a></li>
            <li><a href="#planos">NOSSOS PLANOS</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
