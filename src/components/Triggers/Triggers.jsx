import 'bootstrap/dist/css/bootstrap.min.css';
import Terminal from '../Terminal/Terminal';
import './Triggers.css';
import NavBar from '../Navigation/NavBar';
const Triggers = () => {

    const triggerSyntax = `CREATE TRIGGER nombre_trigger\n[BEFORE|AFTER] [INSERT|UPDATE|DELETE]\nON nombre_tabla\nFOR EACH ROW\nBEGIN\n   -- Instrucciones SQL\nEND;`;



    return (
        <>
            <NavBar />
            <div className="col-7 text-justify container" id="transactions-wrapper">
                <h2 className="display-4 pt-5">Triggers</h2>
                <p className="lead pt-4">
                    Los triggers son un conjunto de instrucciones SQL que se ejecuta automáticamente cuando ocurre un evento específico en una tabla o vista. Los triggers se utilizan para mantener la integridad de los datos, auditar cambios y aplicar reglas de negocio.
                </p>
                <h2 className="display-6 pt-5">Sintaxis</h2>
                <Terminal code={triggerSyntax} />


                <p className="mt-4 mb-4">
                    En MySQL, los triggers se definen utilizando la sentencia CREATE TRIGGER. Los triggers en MySQL pueden activarse antes o después de las operaciones INSERT, UPDATE y DELETE. MySQL no soporta triggers en vistas.
                </p>
                <p className="mt-4 mb-4">
                    En SQL Server, los triggers se definen utilizando la sentencia CREATE TRIGGER. Los triggers en SQL Server pueden activarse antes (INSTEAD OF) o después (AFTER) de las operaciones INSERT, UPDATE y DELETE. Además, SQL Server soporta triggers en tablas y vistas.
                </p>

                <div className="row mb-5">
                    <div className="col-md-6 mt-5">
                        <h3 className='display-6'>MySQL</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fas fa-lock mr-2"></i> Soporta BEFORE y AFTER triggers para operaciones INSERT, UPDATE y DELETE..
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-thumbs-up mr-2"></i> No soporta triggers en vistas.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-rocket mr-2"></i> Utiliza las palabras clave OLD y NEW para referirse a los valores de las filas antes y después de la operación.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-expand-arrows-alt mr-2"></i>No permite múltiples triggers del mismo tipo para el mismo evento en una tabla.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h3 className='display-6'>SQL Server</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fas fa-dollar-sign mr-2"></i> Soporta AFTER y INSTEAD OF triggers para operaciones INSERT, UPDATE y DELETE.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-wrench mr-2"></i> Soporta triggers en vistas, lo que permite una mayor flexibilidad en la manipulación de datos.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-users mr-2"></i> Utiliza las tablas <span style={{ fontWeight: 'bold' }}>inserted</span> y <span style={{ fontWeight: 'bold' }}>deleted</span> para acceder a los valores de las filas antes y después de la operación.

                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-code mr-2"></i> Permite múltiples triggers del mismo tipo para el mismo evento en una tabla, y su ejecución se puede controlar mediante la cláusula ORDER.
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Triggers
