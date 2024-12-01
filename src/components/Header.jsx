import React from "react";
import "../styles/Header.css";

const Header = ({ showLinks }) => {
  return (
    <header className="header">
      <div className="logo"></div>
      {showLinks && (
        <nav>
          <a href="#anasayfa">Anasayfa -</a>
          <a href="#sipariş-oluştur"> Sipariş Oluştur</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
