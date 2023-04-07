//Autor: Espinoza Gomez Abraham Salvador

// Importación de los módulos y componentes necesarios.
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "../css/nadvar.css"; // Estilos de la barra de navegación.
import logo from "../img/nadvar/logo_optimenn.ico"; // Ruta de la imagen del logo.
import { FormattedMessage } from "react-intl";

// Declaración del componente Navbar.
function Navbar() {
  // Definición del estado inicial scrollNav con el valor false.
  const [scrollNav, setScrollNav] = useState(false);

  // Función para cambiar el estado de scrollNav en base a la posición del scroll.
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // Efecto para añadir un event listener al objeto window cuando se monta el componente.
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Renderizado del componente Navbar.
  return (
    // Clases condicionales en base al valor de scrollNav.
    <nav className={scrollNav ? "navbar scroll-nav" : "navbar"}>
      <div className="navbar-container">
        {/* Enlace que lleva al inicio de la página con el logo de la empresa. */}
        <a href="/Dashboard" className="navbar-logo">
          <img src={logo} alt="logo" />
        </a>
        {/* Lista de enlaces de la barra de navegación. */}
        <ul className="nav-menu">
          
          <li className="nav-item">
            
            <a href="/Dashboard" className="nav-links">
              {" "}
              <FormattedMessage
                id="menu.home"
                defaultMessage="Home"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/About-Us" className="nav-links">
            <FormattedMessage
                id="menu.aboutUs"
                defaultMessage="About-Us"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/Customers" className="nav-links">
            <FormattedMessage
                id="menu.customers"
                defaultMessage="Customers"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/News" className="nav-links">
            <FormattedMessage
                id="menu.news"
                defaultMessage="News"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/Contact-Us" className="nav-links">
            <FormattedMessage
                id="menu.contactUs"
                defaultMessage="Contact-Us"
              />
            </a>
          </li>
          
        </ul>
        <Container></Container>
      </div>
      
    </nav>
    
  );
}

// Exportación del componente Navbar.
export default Navbar;
