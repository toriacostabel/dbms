import './DML.css'
import Terminal from '../Terminal/Terminal'
import NavBar from '../Navigation/NavBar'

const DML = () => {

    const selectCode = `SELECT nombre, edad, departamento 
    FROM empleados 
    WHERE salario > 50000 
    ORDER BY salario DESC 
    LIMIT 10;`;

    const joinCode = `SELECT e.nombre, d.nombre as departamento 
    FROM empleados e 
    INNER JOIN departamentos d 
    ON e.departamento_id = d.id;`;

    return (
        <>
            <NavBar />
            <div className='container col-7 text-justify' id='dml-wrapper'>

                <h2 className='display-4 pt-5 mb-4'>Data Manipulation Language</h2>

                <p className="lead">
                    El lenguaje de manipulación de datos (DML) en MySQL permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en las tablas de la base de datos. Estas operaciones son fundamentales para interactuar con los datos y modificar su contenido según sea necesario.
                </p>

                <h2 className="display-6 mt-5">Insercion de datos:</h2>
                <Terminal code={"INSERT INTO empleados (nombre, edad, salario) \nVALUES ('Juan', 30, 50000);"} />

                <h2 className="display-6 mt-5">Leer datos de una tabla:</h2>
                <Terminal code={"SELECT * FROM empleados \nWHERE departamento = 'Ventas'"} />

                <h2 className="display-6 mt-5">Actualizar un registro existente:</h2>
                <Terminal code={"UPDATE empleados \nSET salario = 55000 \nWHERE id = 1;"} />

                <h2 className="display-6 mt-5">Eliminar un registro:</h2>
                <Terminal code={"DELETE FROM empleados \nWHERE id = 2;"} />

                <h2 className="display-4 mt-5">SELECT</h2>
                <p className="mt-3">
                    Permite a los usuarios especificar las columnas que desean recuperar utilizando la cláusula <span>SELECT</span> columnas, donde las columnas pueden ser nombres de columnas individuales, expresiones, o incluso funciones de agregación como <span>SUM()</span> o <span>COUNT()</span>. Además, la cláusula <span>FROM</span> se utiliza para especificar las tablas de las cuales se recuperarán los datos. Por ejemplo, <span>FROM tabla1, tabla2</span> permite combinar datos de múltiples tablas en una sola consulta.
                </p>
                <p className="mt-3">
                    Las cláusulas de filtro como <span>WHERE, GROUP BY, HAVING, ORDER BY y LIMIT</span> son fundamentales para refinar los resultados de la consulta. La cláusula <span>WHERE</span> permite aplicar condiciones de filtro a las filas devueltas, mientras que <span>GROUP BY</span> agrupa filas que comparten el mismo valor en una o más columnas y <span>HAVING</span> filtra los resultados agrupados. La cláusula <span>ORDER BY</span> permite ordenar los resultados según una o más columnas especificadas, y <span>LIMIT</span> se utiliza para limitar la cantidad de filas devueltas por la consulta.
                </p>
                <Terminal code={selectCode} />

                <h2 className="display-4 mt-5">JOIN</h2>
                <p className="mt-4 mb-4">
                    Las operaciones <span>JOIN</span> en MySQL permiten combinar datos de múltiples tablas en una sola consulta, lo que es fundamental para trabajar con bases de datos relacionales. Los tipos de <span>JOIN</span> más comunes son <span>INNER JOIN</span>, <span>LEFT JOIN</span>, <span>RIGHT JOIN</span> y <span>FULL JOIN</span>. <br /><br />
                    <span>INNER JOIN</span> devuelve solo las filas que tienen coincidencias en ambas tablas, mientras que <span>LEFT JOIN</span> y <span>RIGHT JOIN</span> devuelven todas las filas de la tabla izquierda (primera tabla) o derecha (segunda tabla), respectivamente, y las filas coincidentes de la tabla derecha o izquierda. <span>FULL JOIN </span>devuelve todas las filas cuando hay una coincidencia en cualquiera de las tablas.
                </p>

                <Terminal code={joinCode}/>

                <h2 className="pt-5">
                    Diferencias de Sintaxis y Comportamiento
                </h2>

                <p className='mt-4 mb-5'>Aunque <span>MySQL</span> y <span>SQL Server</span> admiten operaciones <span>JOIN</span> similares, existen algunas diferencias en la sintaxis y el comportamiento. Por ejemplo, <span>MySQL</span> utiliza <span>LEFT JOIN</span> y <span>RIGHT JOIN</span> para especificar el tipo de <span>JOIN</span>, mientras que <span>SQL Server</span> utiliza <span>LEFT OUTER JOIN</span> y <span>RIGHT OUTER JOIN</span>. Además, <span>MySQL</span> requiere el uso de <span>IS NULL</span> o <span>IS NOT NULL</span> para realizar comprobaciones de nulidad en las columnas de las tablas unidas, mientras que <span>SQL Server</span> permite usar directamente <span>NULL</span> o <span>NOT NULL</span>.</p>

            </div>
        </>
    )
}

export default DML
