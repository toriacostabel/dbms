import './Indexes.css'
import Terminal from '../Terminal/Terminal'
import NavBar from '../Navigation/NavBar'

const Indexes = () => {

    const indexCode = `CREATE INDEX idx_nombre ON empleados (nombre);`
    const explainCommand = `EXPLAIN SELECT nombre, salario
    FROM empleados
    WHERE salario > 50000;`;
    const nonEfficientQuery = `SELECT *
    FROM ventas
    WHERE cantidad > 5
    AND fecha_venta BETWEEN '2023-01-01' AND '2023-12-31'
    ORDER BY precio_total DESC;`;
    const optimizationIndexes = `CREATE INDEX idx_cantidad_fecha ON ventas (cantidad, fecha_venta);`;
    const optimizedQuery = `SELECT producto_id, cantidad, fecha_venta, precio_total
    FROM ventas
    WHERE cantidad > 5
    AND fecha_venta BETWEEN '2023-01-01' AND '2023-12-31'
    ORDER BY precio_total DESC;`;
    const explainOptimizedQuery = `EXPLAIN SELECT producto_id, cantidad, fecha_venta, precio_total
    FROM ventas
    WHERE cantidad > 5
    AND fecha_venta BETWEEN '2023-01-01' AND '2023-12-31'
    ORDER BY precio_total DESC;`;

    return (
        <>
            <NavBar />
            <div className="container col-7 text-justify" id="indexes-wrapper">
                <h2 className="display-4 pt-5">Índices</h2>
                <p className="lead">
                    Son estructuras que mejoran la velocidad de recuperación de datos al proporcionar un acceso rápido a los registros en una tabla. Para crear un índice en MySQL, se usa la sentencia CREATE INDEX. Por ejemplo:
                </p>
                <Terminal code={indexCode} />
                <p className="lead">
                    Esto creará un índice llamado idx_nombre en la columna nombre de la tabla empleados
                </p>
                <p className="mt-4">
                    MySQL soporta varios tipos de índices, incluyendo índices simples, índices únicos, índices de texto completo, y más. Cada tipo de índice tiene sus propias características y ventajas. Por ejemplo, los índices únicos garantizan que no haya duplicados en la columna indexada, mientras que los índices de texto completo permiten realizar búsquedas de texto avanzadas. Es importante entender las diferencias entre los tipos de índices y seleccionar el más adecuado para cada situación.
                </p>


                <h2 className="display-4 pt-5">Optimización de Consultas</h2>
                <p className="mt-4">
                    La optimización de consultas es un proceso clave para mejorar el rendimiento de una base de datos MySQL. Este proceso implica varias estrategias, tales como:
                </p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>Uso adecuado de índices:</span> Los índices pueden acelerar drásticamente la recuperación de datos. Es crucial crear índices en columnas que se utilizan frecuentemente en cláusulas WHERE, JOIN, ORDER BY y GROUP BY.
                    </li>
                    <li className="list-group-item">
                        <span>Evitar el uso de SELECT *:</span> En su lugar, seleccionar solo las columnas necesarias. Esto reduce la cantidad de datos que MySQL necesita recuperar y procesar.
                    </li>
                    <li className="list-group-item">
                        <span>Reescribir consultas:</span> A veces, una consulta puede ser optimizada reescribiéndola. Por ejemplo, dividir una consulta compleja en varias consultas más simples puede mejorar el rendimiento.
                    </li>
                    <li className="list-group-item">
                        <span>Usar LIMIT para reducir el número de filas:</span> Esto es útil cuando solo se necesita un subconjunto limitado de resultados.
                    </li>
                    <li className="list-group-item">
                        <span>Normalización de la base de datos:</span> Aunque puede llevar a más tablas y consultas más complejas, la normalización reduce la redundancia y mejora la consistencia de los datos.
                    </li>
                </ul>

                <h2 className="display-4 pt-5">EXPLAIN</h2>
                <p className="mt-4">
                    El comando EXPLAIN se utiliza para analizar cómo MySQL ejecutará una consulta. Proporciona detalles sobre el plan de ejecución que el optimizador de consultas de MySQL ha elegido. Aquí hay un ejemplo básico:
                </p>

                <Terminal code={explainCommand} />

                <p className="mt-4">
                    El comando EXPLAIN en MySQL proporciona una visión detallada de cómo se ejecutará una consulta, permitiendo identificar cuellos de botella y optimizar el rendimiento. Por ejemplo, con EXPLAIN SELECT nombre, salario FROM empleados WHERE salario {'>'} 50000 ORDER BY fecha_contratacion DESC;, MySQL devuelve información sobre la consulta. El resultado incluye varias columnas importantes: <span>id</span> indica el identificador de la consulta, <span>select_type</span> describe el tipo de consulta (SIMPLE en este caso), y <span>table</span> muestra la tabla involucrada. La columna <span>type</span> muestra el tipo de acceso a los datos, siendo range en este caso, lo cual es más eficiente que un escaneo completo. <span>possible_keys</span> enumera los índices que MySQL podría usar, mientras que <span>key</span> muestra el índice realmente utilizado (idx_salario). <span>key_len</span> indica la longitud de la clave utilizada y <span>rows</span> estima el número de filas que MySQL necesita examinar. Finalmente, la columna <span>Extra</span> proporciona información adicional como Using where (indica que se aplica una condición WHERE) y Using filesort (señala que se necesita una clasificación adicional). Esta información es esencial para ajustar y optimizar consultas SQL en MySQL.
                </p>

                <h2 className="display-4 pt-5">Optimizar la consulta:</h2>
                <Terminal code={nonEfficientQuery} />
                <h2 className="mt-4">Problemas con la consulta:</h2>
                <ol>
                    <li>
                        <span>Uso de SELECT *:</span> Recupera todas las columnas, lo cual puede ser innecesario si solo se necesitan algunas.
                    </li>
                    <li>
                        <span>Falta de índices:</span> Sin índices adecuados, MySQL debe realizar un escaneo completo de la tabla (table scan), lo que es ineficiente.
                    </li>
                    <li>
                        <span>Ordenamiento:</span> La cláusula ORDER BY sin un índice en la columna fecha_contratacion puede requerir una ordenación adicional en memoria o disco.
                    </li>
                </ol>

                <h2 className="mt-4">Soluciones:</h2>
                <Terminal code={optimizationIndexes} />
                <p className="mt-4">
                    La creación de un índice compuesto en cantidad y fecha_venta permite a MySQL acceder a las filas de manera más eficiente. Un índice compuesto es beneficioso porque optimiza consultas que utilizan múltiples columnas en las condiciones WHERE
                </p>

                <Terminal code={optimizedQuery} />
                <p className="mt-4">
                    Seleccionar solo las columnas necesarias (producto_id, cantidad, fecha_venta, precio_total) en lugar de todas (SELECT *) reduce la cantidad de datos transferidos y procesados.
                </p>

                <Terminal code={explainOptimizedQuery} />
                <p className="mt-4">El comando EXPLAIN muestra que ahora MySQL utiliza un índice de rango (range) en lugar de un escaneo completo de tabla (ALL), lo cual mejora significativamente el rendimiento. Se puede utilizar un EXPLAIN en ambas consultas para comparar la diferencia en el plan de ejecución.</p>
            </div>
        </>
    )
}

export default Indexes
