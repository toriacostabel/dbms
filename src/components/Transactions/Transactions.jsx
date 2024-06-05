import 'bootstrap/dist/css/bootstrap.min.css';
import './Transactions.css';
import Terminal from '../Terminal/Terminal';
import NavBar from '../Navigation/NavBar';

const Transactions = () => {

    const transactionExample = `BEGIN; -- Iniciar transacción\n\n UPDATE cuentas_bancarias\n SET saldo = saldo - 100\n WHERE id = 123; -- Retirar $100 de la cuenta 123\n\n UPDATE cuentas_bancarias\n SET saldo = saldo + 100\n WHERE id = 456; -- Depositar $100 en la cuenta 456\n\nCOMMIT; -- Confirmar transacción`;

    const transactionWithSavePoints = `START TRANSACTION;\n\n-- Operación 1: Actualización de datos\nUPDATE usuarios SET saldo = saldo - 50\nWHERE id = 123;\n\nSAVEPOINT savepoint1;\n\n-- Operación 2: Eliminación de datos\nDELETE FROM transacciones\nWHERE id_usuario = 123;\n\n-- Operación 3: Inserción de datos\nINSERT INTO registro_transacciones (id_usuario, tipo_transaccion, monto)\nVALUES (123, 'Retiro', 50);\n\nSAVEPOINT savepoint2;\n\n-- Ocurre un error entre los savepoints\n-- Por ejemplo, un error de conexión a la base de datos\n-- En ese caso, deshacemos los cambios hasta el savepoint1\n\nROLLBACK TO savepoint1;\n\n-- La transacción no se confirma debido al error, por lo que se revierten todos los cambios\n-- Se podría realizar alguna acción adicional para manejar el error,\n-- como registrar un mensaje de error o notificar al usuario\n\nCOMMIT;`;

    return (
        <>
            <NavBar />
            <div className="col-7 text-justify container" id="transactions-wrapper">

                <h2 className="display-4 pt-5">Transacciones</h2>
                <p className="lead">
                    Las transacciones en MySQL son conjuntos de operaciones SQL que se ejecutan de manera conjunta y atómica, lo que significa que todas las operaciones se realizan o ninguna se realiza. Esto garantiza la integridad de los datos y la consistencia de la base de datos, incluso en entornos de múltiples usuarios. Las transacciones permiten realizar operaciones complejas de manera segura, dividiéndolas en partes más pequeñas que pueden confirmarse (COMMIT) o revertirse (ROLLBACK) según sea necesario. Este enfoque asegura que los cambios en la base de datos se apliquen de manera coherente y confiable, proporcionando un entorno seguro y fiable para trabajar con datos críticos.
                </p>
                <h2 className="mt-4 display-5">BEGIN, COMMIT Y ROLLBACK</h2>
                <p className="mt-4 mb-4">
                    En MySQL, al igual que en otros sistemas de gestión de bases de datos relacionales, puedes utilizar las sentencias <span>BEGIN, COMMIT y ROLLBACK</span> para administrar transacciones.<span>BEGIN</span> inicia una nueva transacción, <span>COMMIT</span> confirma los cambios realizados en la transacción y <span>ROLLBACK</span> deshace los cambios realizados en la transacción actual, devolviendo la base de datos a su estado anterior a la transacción.
                </p>

                <Terminal code={transactionExample} />

                <h2 className="mt-5">
                    Diferencias con el Manejo de Transacciones en SQL Server
                </h2>
                <p className="mt-4">
                    Aunque MySQL y SQL Server manejan transacciones de manera similar con BEGIN, COMMIT y ROLLBACK, hay algunas diferencias notables en su comportamiento. Por ejemplo, MySQL utiliza el modelo de transacciones autocommit por defecto, lo que significa que cada sentencia SQL se ejecuta como una transacción independiente a menos que se especifique explícitamente una transacción con BEGIN. SQL Server, por otro lado, requiere que se inicie explícitamente una transacción con BEGIN TRANSACTION para agrupar varias operaciones en una sola transacción.
                </p>

                <h2 className="mt-4">Savepoints</h2>
                <p className="mt-4">
                    MySQL admite el uso de savepoints dentro de una transacción. Un savepoint es un punto de control dentro de una transacción que se puede utilizar para dividir la transacción en partes más pequeñas y realizar operaciones ROLLBACK solo hasta el punto de control específico. Esto puede ser útil para deshacer solo una parte de una transacción sin revertir completamente todos los cambios.
                </p>

                <Terminal code={transactionWithSavePoints} />

                <h2 className="mt-5 display-4">Mecanismos de Bloqueo</h2>
                <p className="lead mt-4">
                    MySQL utiliza varios mecanismos de bloqueo para garantizar la coherencia de los datos en entornos de múltiples usuarios. Estos incluyen bloqueos de nivel de tabla y de nivel de fila. Los bloqueos de nivel de tabla bloquean toda la tabla para operaciones de escritura, mientras que los bloqueos de nivel de fila bloquean solo las filas específicas afectadas por una operación. Además, MySQL ofrece diferentes niveles de aislamiento de transacciones, como READ COMMITTED y REPEATABLE READ, que afectan cómo se aplican los bloqueos y qué datos están disponibles para cada transacción.
                </p>

                <p className="mt-3">
                    <span>Bloqueos de Nivel de Tabla:</span> Estos bloqueos se aplican a toda la tabla y evitan que otros usuarios realicen operaciones de escritura (como INSERT, UPDATE o DELETE) en la misma tabla mientras el bloqueo esté activo. Los bloqueos de nivel de tabla son más simples y menos granulares que los bloqueos de nivel de fila, pero pueden causar un mayor tiempo de espera si varios usuarios intentan acceder a la misma tabla simultáneamente
                </p>
                <p className="mt-3">
                    <span>Bloqueos de Nivel de Fila:</span> Estos bloqueos se aplican a filas individuales dentro de una tabla y permiten un mayor grado de concurrencia, ya que solo bloquean las filas específicas afectadas por una operación. Esto significa que otros usuarios aún pueden acceder a otras filas de la tabla para realizar operaciones, incluso si una fila específica está bloqueada.
                </p>

                <h2 className="mt-4 display-4">Niveles de Aislamiento</h2>
                <p className='mt-4'>
                    MySQL también ofrece varios niveles de aislamiento de transacciones que controlan cómo se aplican los bloqueos y qué datos están disponibles para cada transacción. Algunos de los niveles de aislamiento más comunes son
                </p>
                <p className="mt-3">
                    <span>READ COMMITTED: </span> Cada lectura dentro de una transacción ve solo los datos que han sido confirmados por otras transacciones. Esto significa que las filas que están siendo modificadas por otras transacciones pueden cambiar entre las lecturas dentro de una misma transacción.
                </p>
                <p className="mt-3 mb-5">
                    <span>REPEATABLE READ:</span> Garantiza que una transacción siempre vea los mismos datos durante toda su duración, incluso si otras transacciones están modificando los mismos datos simultáneamente. Esto se logra aplicando bloqueos de nivel de fila a todas las filas leídas por la transacción.
                </p>


            </div>

        </>
    )
}

export default Transactions
