import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MySQL vs SQL Server
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/introduccion">
              Introducción
            </Nav.Link>
            <Nav.Link as={Link} to="/general">
              General
            </Nav.Link>
            <Nav.Link as={Link} to="/sintaxis">
              Sintaxis
            </Nav.Link>
            <Nav.Link as={Link} to="/tipos-datos">
              Tipos de Datos
            </Nav.Link>
            <Nav.Link as={Link} to="/consultas">
              Consultas
            </Nav.Link>
            <Nav.Link as={Link} to="/rendimiento">
              Rendimiento
            </Nav.Link>
            <Nav.Link as={Link} to="/herramientas">
              Herramientas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;