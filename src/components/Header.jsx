import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div class="logo"></div>
      <nav>
        <a href="#anasayfa">Anasayfa -</a>
        <a href="#sipariş-oluştur"> Sipariş Oluştur</a>
      </nav>
    </header>
  );
};

export default Header;
