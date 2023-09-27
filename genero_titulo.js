const { DataTypes, Sequelize } = require('sequelize');
const config = require('./config.js'); // Asegúrate de tener un archivo config.js con la configuración

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const GeneroTitulo = sequelize.define('genero_titulo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  idTitulo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },

  idGenero: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
}, {
  // Opciones de configuración adicionales
});

module.exports = GeneroTitulo;