import './Security.css'
import Terminal from '../Terminal/Terminal'
import NavBar from '../Navigation/NavBar'


const Security = () => {

    const manageUsers = `-- Crear un usuario\nCREATE USER 'usuario'@'localhost' IDENTIFIED BY 'contraseña';\n\n-- Modificar atributos de usuario\nALTER USER 'usuario'@'localhost' IDENTIFIED BY 'nueva_contraseña';\n\n-- Eliminar un usuario\nDROP USER 'usuario'@'localhost';`;

    const managePrivileges = `-- Conceder privilegios\nGRANT SELECT, INSERT ON base_de_datos.tabla TO 'usuario'@'localhost';\n\n-- Revocar privilegios\nREVOKE INSERT ON base_de_datos.tabla FROM 'usuario'@'localhost';`

    return (
        <>
            <NavBar />

            <div className="container col-7 text-justify" id='security-wrapper'>
                <h2 className="display-4 pt-5">Gestión de Usuarios</h2>
                <p className="mt-4 lead">
                    En MySQL, puedes crear usuarios utilizando la sentencia CREATE USER y gestionar sus permisos utilizando la sentencia GRANT para asignar privilegios específicos a los usuarios. También puedes utilizar la sentencia ALTER USER para modificar los atributos de los usuarios existentes y la sentencia DROP USER para eliminar usuarios.
                </p>

                <Terminal code={manageUsers} />

                <h2 className="display-4 mt-4">Privilegios</h2>

                <p className="mt-4">
                    MySQL utiliza el sistema de privilegios para controlar el acceso a la base de datos y sus objetos. Puedes conceder privilegios utilizando la sentencia GRANT y revocarlos utilizando la sentencia REVOKE. Algunos privilegios comunes incluyen SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, etc.
                </p>

                <Terminal code={managePrivileges} />

                <h2 className="display-4 mt-4">Diferencias en los Modelos de Seguridad</h2>

                <p className="mt-4">
                    MySQL y SQL Server tienen diferencias en sus modelos de seguridad. Por ejemplo, en MySQL, los privilegios se gestionan a nivel de base de datos, mientras que en SQL Server, se pueden conceder a nivel de objeto específico, como tablas y procedimientos almacenados. Además, MySQL utiliza el sistema de privilegios basado en la combinación de nombres de usuario y hosts, mientras que SQL Server utiliza roles de servidor y roles de base de datos para gestionar permisos.
                </p>

                <h2 className="mt-4">MySQL</h2>

                <Terminal code={"GRANT SELECT ON base_de_datos.tabla TO 'usuario'@'localhost';"}/>

                <h2 className="mt-4">SQL Server</h2>

                <Terminal code={"GRANT SELECT ON dbo.tabla TO usuario;"}/>

            </div>
        </>
    )
}

export default Security
