import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Introduction.css';
import NavBar from '../Navigation/NavBar';



const Introduction = () => {


    return (
        <>
            <NavBar />
            <div className="container col-6 about-mysql" id='introduction-wrapper'>
                <h2 className="display-4 pt-5">¿Qué es MySQL?</h2>
                <p className="lead">
                MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto que utiliza el Lenguaje de Consulta Estructurado (SQL) para gestionar y manipular bases de datos. Es uno de los sistemas de bases de datos más populares del mundo, conocido por su velocidad, fiabilidad y facilidad de uso. MySQL se utiliza ampliamente en aplicaciones web, incluidas algunas de las páginas web más grandes y exigentes del mundo, debido a su capacidad para manejar grandes cantidades de datos de manera eficiente.
                </p>

                <h2 className="display-4">Historia de MySQL</h2>
                <p>
                MySQL fue creado en 1995 por la empresa sueca MySQL AB, cofundada por David Axmark, Allan Larsson y Michael "Monty" Widenius. El sistema se desarrolló inicialmente para gestionar bases de datos para aplicaciones a menor escala, pero rápidamente ganó popularidad debido a su simplicidad y robustez. En 2008, MySQL AB fue adquirida por Sun Microsystems, que posteriormente fue adquirida por Oracle Corporation en 2010. A pesar de las preocupaciones sobre la adquisición, MySQL ha continuado creciendo y evolucionando, manteniendo su estatus como un RDBMS líder.
                </p>

                <h2 className="display-4">Versiones de MySQL</h2>
                <ul>
                    <li>MySQL 3.x y 4.x: Versiones tempranas que establecieron las características básicas y las capacidades de rendimiento de MySQL.</li>
                    <li>MySQL 5.x: Introdujo características significativas como procedimientos almacenados, disparadores, vistas y replicación mejorada.</li>
                    <li>MySQL 8.x: La última versión principal, que ofrece un rendimiento mejorado, mayor seguridad, mejor soporte para JSON y otras características modernas de bases de datos.</li>
                </ul>

                <div className="row">
                    <div className="col-md-6">
                        <h3>Características Clave</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fas fa-lock mr-2"></i> Código Abierto y Gratuito
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-thumbs-up mr-2"></i> Fácil de Usar
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-rocket mr-2"></i> Alto Rendimiento
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-expand-arrows-alt mr-2"></i> Escalable
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-shield-alt mr-2"></i> Seguro
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Beneficios</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fas fa-dollar-sign mr-2"></i> Rentable
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-wrench mr-2"></i> Flexible
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-users mr-2"></i> Gran Comunidad
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-code mr-2"></i> Compatible
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 className="display-4">Casos de Uso</h2>
                <p>Los usos comunes de MySQL incluyen:</p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fas fa-globe mr-2"></i> Sitios web
                    </li>
                    <li className="list-group-item">
                        <i className="fas fa-laptop mr-2"></i> Aplicaciones web
                    </li>
                    <li className="list-group-item">
                        <i className="fas fa-building mr-2"></i> Aplicaciones Empresariales
                    </li>
                    <li className="list-group-item">
                        <i className="fas fa-chart-line mr-2"></i> Análisis de Datos
                    </li>
                </ul>
            </div>


        </>
    );




}

export default Introduction;