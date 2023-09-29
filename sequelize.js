const { Sequelize } = require('sequelize');
const config = require('./config.js'); // Importa la configuración desde config.js

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port, 
    dialect: config.dialect,
  }
);

// Resto de la configuración de Sequelize...

module.exports = sequelize; // Exporta la instancia de Sequelize para su uso en otros archivos
