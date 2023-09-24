const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
});

connection.connect();

const sqlQuery = 'SELECT * FROM nombre_de_tabla';

connection.query(sqlQuery, (error, results) => {
  if (error) throw error;

  // Guardar los resultados en un archivo, por ejemplo, CSV
  fs.writeFileSync('datos.csv', results);
});

connection.end();
