import React from 'react';
import '/hability-web/src/styles/Header.css'; // Asegúrate de que la ruta sea correcta
// Importa el CSS específico para el Header

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <h1>Mi Aplicación</h1>
      <p>Bienvenido a nuestra plataforma educativa</p>
    </header>
  );
}

export default Header;