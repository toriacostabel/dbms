import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars} from 'react-icons/fa';
import './Navigation.css'

const Navigation = () => {
  // estado para controlar si el menu esta abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // estado para almacenar el viewport width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // funcion para manejar el click en el boton de abrir menu
  const handleToggle = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    // manejar evento de cambio de ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // actualizacion
    };
    // detectar el cambio de ancho
    window.addEventListener('resize', handleResize);
    // limpiar el event listener cuando el componente se desmonta
    // para evitar fugas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  // la dependencia vacia [] asegura que el efecto solo se ejecute 
  // una vez al montar el componente

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MySQL vs SQL Server
        </Navbar.Brand>
        <Navbar.Toggle className="toggle-btn" aria-controls="basic-navbar-nav" onClick={handleToggle}>
          <FaBars />
        </Navbar.Toggle>
        {/* mostrar contenido del menu si isOpen es true / el ancho de la pantalla es mayor que 768px */}
        {(isOpen || windowWidth > 768) && (
          <Navbar.Collapse id="basic-navbar-nav" className="collapse-menu show">
            <Nav className="ml-auto flex-column">
              <Nav.Link as={Link} to="/introduccion">
                Introducción
              </Nav.Link>
              <Nav.Link as={Link} to="/general">
                General
              </Nav.Link>
              <Nav.Link as={Link} to="/rendimiento">
                Rendimiento
              </Nav.Link>
              <Nav.Link as={Link} to="/consultas">
                Consultas
              </Nav.Link>
              <Nav.Link as={Link} to="/tipos-datos">
                Datos
              </Nav.Link>
              <Nav.Link as={Link} to="/sintaxis">
                Sintaxis
              </Nav.Link>
              <Nav.Link as={Link} to="/herramientas">
                Herramientas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};


export default Navigation;