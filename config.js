
require('dotenv').config(); // Cargar variables de entorno desde .env

module.exports = {
  database: process.env.DB_NAME || 'nombre_de_la_base_de_datos',
  username: process.env.DB_USER || 'nombre_de_usuario',
  password: process.env.DB_PASSWORD || 'contraseña',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
};