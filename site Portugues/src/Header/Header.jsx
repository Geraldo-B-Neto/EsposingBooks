import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
    <nav>
      <a href="index.html"><img src="./img/Book (1).svg" alt="logo" /></a>

      <div class="barsMenu" onclick="menuToggle()">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="menu">
        <a href="terraNegra.html">Terra Negra</a>
        <a href="bomDiaCamradas.html">Bom dia, camaradas</a>
      </div>
    </nav>
  </header>
  );
}

export default Header;