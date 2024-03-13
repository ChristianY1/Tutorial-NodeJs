const oracledb = require('oracledb');
const dbConfig = {
  user: 'ora_db',
  password: 'admin',
  connectString: '172.17.0.2/XE' // Cambia esto por tu cadena de conexión
};

async function obtenerEmpleadosPorDepartamento(departamentoId) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    // Definir el objeto de salida para el cursor
    let empleadosOut = {
      dir: oracledb.BIND_OUT,
      type: oracledb.CURSOR
    };

    // Llamar al procedimiento almacenado
    const result = await connection.execute(
      'BEGIN ORA_DB.obtener_empleados_por_departamento(:id, :empleados); END;',
      {
        id: departamentoId,
        empleados: empleadosOut
      }
    );

    // Obtener el cursor de salida
    const cursor = result.outBinds.empleados;

    // Recorrer el cursor y procesar los resultados
    let row;
    while ((row = await cursor.getRow())) {
      console.log(row);
      // Aquí puedes procesar cada fila de resultado como desees
    }

    // Cerrar el cursor
    await cursor.close();
  } catch (err) {
    console.error('Error al llamar al procedimiento:', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error al cerrar la conexión:', err);
      }
    }
  }
}

// Llamar a la función con el ID del departamento deseado
obtenerEmpleadosPorDepartamento(1); // Cambia 123 por el ID del departamento que desees consultar
