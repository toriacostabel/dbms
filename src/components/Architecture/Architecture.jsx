import 'bootstrap/dist/css/bootstrap.min.css';
import './Architecture.css';
import NavBar from '../Navigation/NavBar';

const Architecture = () => {
  return (
    <>
      <NavBar />
      <div className="container col-7 text-justify" id='architecture-wrapper'>

        <h2 className="display-4 pt-5 mb-3">Servidor</h2>

        <p className='lead'>El servidor MySQL está compuesto por varios componentes clave que trabajan juntos para gestionar las bases de datos y procesar las consultas SQL. Entre estos componentes se incluyen:</p>


        <ul className='mt-4'>
          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Gestor de Conexiones: </span>
            Encargado de manejar las conexiones de los clientes al servidor MySQL.
          </li>
          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Motor SQL: </span>
            Interpreta y ejecuta las consultas SQL enviadas por los clientes.
          </li>
          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Sistema de Almacenamiento: </span>
            Encargado de gestionar el almacenamiento de datos en disco.
          </li>
          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Controlador de Transacciones: </span>
            Gestiona las transacciones y garantiza la integridad de los datos.
          </li>
          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Cache de Consultas: </span>
            Almacena los resultados de las consultas frecuentes para mejorar el rendimiento.
          </li>
        </ul>

        <h2 className="display-4 mt-5 mb-4">Modelo Cliente/Servidor</h2>

        <p className='mt-3'>
          MySQL sigue un modelo cliente/servidor, donde el servidor MySQL se ejecuta en un servidor físico o virtual y los clientes se conectan al servidor para interactuar con las bases de datos. Este modelo permite una separación clara entre las aplicaciones que solicitan datos (clientes) y el sistema que gestiona y proporciona esos datos (servidor). Los componentes principales del modelo cliente/servidor de MySQL incluyen:
        </p>

        <ul className='mt-5'>

          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Servidor MySQL: </span>
            El proceso central que gestiona las bases de datos, procesa las consultas y realiza todas las operaciones relacionadas con los datos.
          </li>

          <li className='list-group-item mb-3'>
            <span style={{ fontWeight: 'bold' }}>Clientes MySQL: </span>
            Aplicaciones o herramientas que envían consultas SQL al servidor MySQL y reciben los resultados. Ejemplos de clientes incluyen MySQL Workbench, MySQL Shell y aplicaciones personalizadas que utilizan bibliotecas de conectividad como MySQL Connector.
          </li>

        </ul>

        <h2 className="display-4 mt-5">Motores de Almacenamiento</h2>
        <p>
          Los motores de almacenamiento definen la forma en que se realiza la persistencia de los datos, el manejo de transacciones, el bloqueo de filas o tablas, la integridad de los datos y otras funcionalidades cruciales para el funcionamiento de la base de datos. En MySQL, se puede elegir entre varios motores de almacenamiento, cada uno optimizado para diferentes tipos de aplicaciones y cargas de trabajo.
          InnoDB y MyISAM son dos de los motores de almacenamiento más utilizados en MySQL, cada uno con sus propias características y casos de uso específicos:
        </p>

        <div className="row ">
          <div className="col-md-6 mt-5">
            <h3 className='display-6'>InnoDB</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-lock mr-2"></i> Soporta transacciones ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad).
              </li>
              <li className="list-group-item">
                <i className="fas fa-thumbs-up mr-2"></i> Utiliza bloqueo a nivel de fila para mejorar la concurrencia.
              </li>
              <li className="list-group-item">
                <i className="fas fa-rocket mr-2"></i> Soporta claves foráneas para garantizar la integridad referencial.
              </li>
              <li className="list-group-item">
                <i className="fas fa-expand-arrows-alt mr-2"></i> Ideal para aplicaciones que requieren alta concurrencia y transacciones seguras.
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-5">
            <h3 className='display-6'>MyISAM</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-dollar-sign mr-2"></i> No soporta transacciones ACID.
              </li>
              <li className="list-group-item">
                <i className="fas fa-wrench mr-2"></i> Utiliza bloqueo a nivel de tabla, lo que puede provocar cuellos de botella en entornos con muchas escrituras.
              </li>
              <li className="list-group-item">
                <i className="fas fa-users mr-2"></i> Es más rápido en operaciones de lectura en tablas estáticas.
              </li>
              <li className="list-group-item">
                <i className="fas fa-code mr-2"></i> Adecuado para aplicaciones donde la integridad referencial y las transacciones no son críticas.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="mt-5 mb-4">Diferencias con la Arquitectura de Almacenamiento de SQL Server</h2>
        <p>
          La arquitectura de MySQL se distingue por su modelo cliente/servidor y su capacidad para utilizar motores de almacenamiento pluggables. Esto significa que los usuarios pueden seleccionar entre varios motores de almacenamiento, como InnoDB, MyISAM, MEMORY, y ARCHIVE, cada uno optimizado para diferentes tipos de aplicaciones y cargas de trabajo.<br/><br/>

          InnoDB, el motor de almacenamiento predeterminado, soporta transacciones ACID, claves foráneas y bloqueo a nivel de fila, ideal para aplicaciones que requieren alta concurrencia y transacciones seguras.<br/><br/>
          MyISAM, por otro lado, no soporta transacciones y utiliza bloqueo a nivel de tabla, pero es más rápido en operaciones de lectura. Esta flexibilidad permite a MySQL adaptarse a diversas necesidades de almacenamiento y rendimiento.<br/><br/>

          En contraste, SQL Server utiliza un sistema de almacenamiento unificado, gestionando todas las bases de datos y tablas bajo un único motor de almacenamiento. Esto simplifica la administración y optimización, ya que no es necesario elegir entre diferentes motores. <br/><br/>

          SQL Server ofrece características avanzadas como FileStream para datos binarios grandes, In-Memory OLTP para mejorar el rendimiento de transacciones en memoria, y ColumnStore Indexes para consultas analíticas. Además, SQL Server integra herramientas para análisis, informes y ETL, proporcionando un ecosistema robusto para la gestión y análisis de datos. <br/><br/>
          
          La elección entre MySQL y SQL Server depende de las necesidades específicas del proyecto, considerando factores como flexibilidad, costo, y el entorno de implementación.
        </p>

      </div>
    </>
  )
}

export default Architecture
