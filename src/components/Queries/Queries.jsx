import './Queries.css'
import Terminal from '../Terminal/Terminal'
import NavBar from '../Navigation/NavBar'

const Queries = () => {

    const subQuery = `SELECT nombre, salario \nFROM empleados \nWHERE salario > ( \n   SELECT AVG(salario) \n   FROM empleados);`
    const view = `CREATE VIEW vista_clientes_pedidos AS
    SELECT c.*, COUNT(p.pedido_id) AS total_pedidos
    FROM clientes c
    LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id
    GROUP BY c.cliente_id;`;
    const derivedTable = `SELECT *
    FROM (
        SELECT cliente_id, COUNT(*) AS total_pedidos
        FROM pedidos
        GROUP BY cliente_id
    ) AS subconsulta
    WHERE total_pedidos > 5;`;

    const sqlserverProcedure = `CREATE PROCEDURE VerificarCredenciales 
    @usuario VARCHAR(50),
    @contraseña VARCHAR(50)
    AS
    BEGIN
        IF EXISTS (SELECT 1 FROM usuarios WHERE nombre_usuario = @usuario AND clave = @contraseña)
            SELECT 'Inicio de sesión exitoso' AS mensaje;
        ELSE
            SELECT 'Credenciales incorrectas' AS mensaje;
    END;`;
    const mysqlProcedure = `CREATE PROCEDURE VerificarCredenciales (IN usuario VARCHAR(50), IN contraseña VARCHAR(50))
    BEGIN
        DECLARE usuario_encontrado INT;
    
        SELECT COUNT(*) INTO usuario_encontrado
        FROM usuarios
        WHERE nombre_usuario = usuario AND clave = contraseña;
    
        IF usuario_encontrado = 1 THEN
            SELECT 'Inicio de sesión exitoso' AS mensaje;
        ELSE
            SELECT 'Credenciales incorrectas' AS mensaje;
        END IF;
    END;`;


    return (
        <>
            <NavBar />

            <div className="container col-7 text-justify" id="queries-wrapper">

                <h2 className="display-4 pt-5 not-justified">Subconsultas, Vistas, Tablas Derivadas y Procedimientos</h2>

                <p className="lead">
                    Las subconsultas, vistas, tablas derivadas y procedimientos son herramientas poderosas en bases de datos relacionales como MySQL y SQL Server. Las subconsultas permiten realizar operaciones complejas dentro de una consulta principal, mientras que las vistas ofrecen una capa de abstracción sobre los datos, simplificando consultas recurrentes. Las tablas derivadas actúan como tablas temporales dentro de una consulta, facilitando la manipulación y el filtrado de datos. Por último, los procedimientos almacenados encapsulan lógica empresarial compleja, proporcionando una forma eficiente de ejecutar operaciones en la base de datos.
                </p>


                <h2 className="display-6 mt-5">Subconsultas</h2>

                <p className='mt-4'>Las subconsultas en MySQL, al igual que en SQL Server, son consultas anidadas dentro de una consulta principal. Pueden aparecer en varias cláusulas, como SELECT, FROM, WHERE, HAVING, etc. Por ejemplo, se puede usar una subconsulta en la cláusula WHERE para filtrar resultados basados en el resultado de otra consulta.</p>

                <Terminal code={subQuery} />

                <h2 className="display-6 mt-5">Vistas</h2>

                <p className="mt-4">
                    Las vistas en MySQL son consultas almacenadas que actúan como tablas virtuales. Permiten a los usuarios acceder y manipular datos de manera conveniente al proporcionar una capa de abstracción sobre las tablas subyacentes. Aunque MySQL y SQL Server admiten vistas, hay diferencias en las características admitidas. Por ejemplo, SQL Server admite vistas indexadas, que pueden mejorar el rendimiento al almacenar los resultados físicamente, mientras que en MySQL son solo vistas lógicas sin almacenamiento físico.
                </p>
                <p className="mt-4 mb-5">
                    Cuando se comparan las vistas en MySQL con SQL Server, es importante tener en cuenta que si bien la sintaxis es la misma, el comportamiento varía. Se utiliza <span>CREATE VIEW</span> para definir una vista, pero SQL Server admite características avanzadas como vistas indexadas y vistas materializadas, que pueden mejorar el rendimiento y la flexibilidad en comparación con MySQL.
                </p>

                <Terminal code={view} />

                <h2 className="display-6 mt-5">Tablas Derivadas</h2>

                <p className="mt-4 mb-5">
                    Las tablas derivadas son una técnica poderosa en SQL para simplificar consultas complejas y mejorar la legibilidad del código. También pueden ser útiles para mejorar el rendimiento de consultas al evitar la repetición de cálculos o la necesidad de realizar múltiples consultas. <br /><br />

                    La idea básica detrás de una tabla derivada es que se trata de una subconsulta que se ejecuta dentro de la consulta principal y se trata como una tabla temporal. Esto significa que puedes usar el resultado de la subconsulta como si fuera una tabla real en tu consulta principal.
                </p>

                <Terminal code={derivedTable} />

                <h2 className="display-6 mt-5">Procedimientos Almacenados</h2>
                <p className="mt-4 mb-5">
                    Los procedimientos almacenados son bloques de código SQL que se guardan en el servidor de la base de datos y se pueden invocar desde aplicaciones o consultas SQL. Son útiles para encapsular lógica empresarial compleja y ejecutarla de manera eficiente en el servidor. Tanto MySQL como SQL Server admiten procedimientos almacenados, pero existen diferencias significativas en la sintaxis y las características admitidas.<br />.<br />
                    Cuando se compara con SQL Server, es importante tener en cuenta las diferencias en la sintaxis y las características admitidas al crear y usar procedimientos almacenados en MySQL.
                </p>

                <ul>
                    <li>
                        <strong>Sintaxis de Creación:</strong> Tanto en MySQL como en SQL Server, se utiliza <span>CREATE PROCEDURE</span> para definir un procedimiento almacenado.
                    </li>
                    <li>
                        <strong>Funcionalidades Avanzadas:</strong> MySQL tiene menos características avanzadas de programación procedural que SQL Server. Por ejemplo, MySQL carece de algunas características como cursores y manejo de errores más sofisticado.
                    </li>
                    <li>
                        <strong>Manejo de Errores:</strong> MySQL tiene limitaciones en comparación con SQL Server en términos de manejo de errores. SQL Server ofrece un manejo de errores más sofisticado y granular, permitiendo una gestión más detallada de excepciones y errores.
                    </li>
                    <li>
                        <strong>Transacciones:</strong> MySQL y SQL Server admiten transacciones en procedimientos almacenados, pero puede haber diferencias en la sintaxis y el comportamiento específico de las transacciones.
                    </li>
                </ul>

                <p className="lead mt-4 mb-5">
                    Por ejemplo, este es un procedimiento para autenticar un usuario. Verifica las credenciales de un usuario al intentar iniciar sesión en una aplicación. Si las credenciales son válidas, el procedimiento puede devolver un mensaje de éxito y posiblemente generar un token de sesión para el usuario. Si las credenciales no son válidas, puede devolver un mensaje de error
                </p>

                <h2 className="mt-5">Autenticación de Credenciales en SQL Server</h2>
                <Terminal code={sqlserverProcedure} />
                
                <h2 className="mt-5">Autenticación de Credenciales en MySQL</h2>
                <Terminal code={mysqlProcedure} />

            </div>
        </>
    )
}

export default Queries
