import React, { useState, useEffect } from 'react';
import NavBar from '../Navigation/NavBar'



const Introduction = () => {


    return (
        <>
        <NavBar />
            <div className="container about-mysql">
                <h2 className="display-4">¿Qué es MySQL?</h2>
                <p className="lead">
                    MySQL es un sistema de gestión de bases de datos relacionales (RDBMS)
                    gratuito y de código abierto utilizado por millones de personas para
                    almacenar y administrar datos.
                </p>

                <h2 className="display-4">Historia de MySQL</h2>
                <p>
                    Creado en 1994, MySQL es conocido por su velocidad, fiabilidad y
                    facilidad de uso. Oracle lo adquirió en 2010 y continúa su desarrollo.
                </p>

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