import './DDL.css'
import Terminal from '../Terminal/Terminal'
import NavBar from '../Navigation/NavBar'

const DDL = () => {
  const createTableCode = `CREATE TABLE Employees (
        EmployeeID int,
        FirstName varchar(255),
        LastName varchar(255),
        BirthDate date
      );`;

  const alterTableCode = `ALTER TABLE Employees
      ADD Email varchar(255);`;

  const dropTableCode = `DROP TABLE Employees;`;

  return (
    <>
      <NavBar />
      <div className='container col-7 text-justify' id='ddl-wrapper'>

        {/* mysql workbench */}

        <h2 className='display-4 pt-5 mb-4'>Uso de MySQL Workbench</h2>
        <p className='lead'>
          MySQL Workbench es una herramienta visual unificada para la gestión de bases de datos, que proporciona una interfaz intuitiva para diseñar, desarrollar y administrar bases de datos MySQL. Sus características incluyen:
        </p>
        <ul>
          <li>Diseño Visual de Bases de Datos: Permite crear y modelar esquemas de bases de datos mediante diagramas.</li>
          <li>Desarrollo SQL: Proporciona un editor SQL completo para escribir, ejecutar y depurar consultas.</li>
          <li>Administración del Servidor: Facilita la gestión de usuarios, la configuración del servidor y el monitoreo del rendimiento.</li>
        </ul>
        <p>
          Para comenzar a usar MySQL Workbench, es necesario conectarse a un servidor MySQL mediante las credenciales adecuadas. Una vez conectado, se puede acceder a todas las funcionalidades mencionadas anteriormente desde la interfaz gráfica.
        </p>

        <h2>Acceso por Línea de Comandos</h2>
        <p>
          El acceso por línea de comandos es otra forma de interactuar con MySQL. Proporciona una interfaz directa para ejecutar comandos SQL y administrar la base de datos. Los pasos básicos para usar la línea de comandos de MySQL incluyen:
        </p>
        <ol className='mb-5'>
          <li>Abrir la Terminal o Consola.</li>
          <li>Conectarse al Servidor MySQL: <Terminal code={'mysql -u usuario -p'} />
            Se solicita la contraseña del usuario para establecer la conexión.
          </li>
          <li>Ejecutar Comandos SQL: Una vez conectado, se pueden ejecutar comandos SQL directamente en la línea de comandos.</li>
        </ol>


        {/* data definition language*/}

        <h2 className='display-4 pt-4'>Data Definition Language</h2>
        <p className="lead pt-3">La creación y eliminación de bases de datos son operaciones fundamentales tanto en MySQL como en SQL Server. Para las operaciones de DDL, no se presentan diferencias entre los sistemas ya que utilizan exactamente los mismos comandos.</p>
        <h2 className='display-6 pt-3'>Creacion de tablas:</h2>
        <Terminal code={createTableCode} />
        <h2 className='display-6'>Modificacion de tablas:</h2>
        <Terminal code={alterTableCode} />
        <h2 className='display-6'>Eliminacion de tablas:</h2>
        <Terminal code={dropTableCode} />


        <p className='mt-5'>
          Los <span>campos de autoincremento</span> son comunes en las tablas de bases de datos para generar automáticamente valores únicos al insertar nuevos registros. En MySQL, se pueden manejar utilizando el tipo de columna AUTO_INCREMENT, mientras que SQL Server utiliza el atributo IDENTITY para expresar un campo autoincremental. Cuando se inserta un nuevo registro sin especificar un valor para el campo autoincremental, MySQL asigna automáticamente el siguiente valor disponible.
        </p>

        <h2 className="display-4 pt-5">Tipos de Datos</h2>
        <div className="table-wrapper col-12">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Tipo de Dato</th>
                <th>MySQL</th>
                <th>SQL Server</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cadenas de Texto</td>
                <td>VARCHAR, TEXT</td>
                <td>VARCHAR, NVARCHAR, TEXT</td>
              </tr>
              <tr>
                <td>Números Enteros</td>
                <td>TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT</td>
                <td>TINYINT, SMALLINT, INT, BIGINT</td>
              </tr>
              <tr>
                <td>Números Decimales</td>
                <td>DECIMAL, FLOAT, DOUBLE</td>
                <td>DECIMAL, FLOAT, REAL</td>
              </tr>
              <tr>
                <td>Fechas y Tiempos</td>
                <td>DATE, DATETIME, TIMESTAMP, TIME, YEAR</td>
                <td>DATE, DATETIME, DATETIME2, SMALLDATETIME, TIME</td>
              </tr>
              <tr>
                <td>Datos Binarios</td>
                <td>BLOB, LONGBLOB</td>
                <td>VARBINARY, IMAGE</td>
              </tr>
              <tr>
                <td>Bit</td>
                <td>BIT</td>
                <td>BIT</td>
              </tr>
              <tr>
                <td>Enumeraciones (ENUM)</td>
                <td>ENUM</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Conjuntos (SET)</td>
                <td>SET</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Geoespaciales (Spatial)</td>
                <td>GEOMETRY, POINT, LINESTRING, POLYGON, etc.</td>
                <td>GEOMETRY, GEOGRAPHY</td>
              </tr>
              <tr>
                <td>JSON</td>
                <td>JSON</td>
                <td>JSON</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </>

  );
};

export default DDL
