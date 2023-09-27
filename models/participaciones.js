const { DataTypes, Sequelize } = require('sequelize');
const config = require('../config.js'); //  Usa '../' para retroceder un nivelnst config = require('./config.js'); // Asegúrate de tener un archivo config.js con la configuración

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Participaciones = sequelize.define('participaciones', {
  contenido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  
  actor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
}, {
  // Opciones de configuración adicionales
});

module.exports = Participaciones;
