const { DataTypes, Sequelize } = require('sequelize');
const config = require('../config.js'); //  Usa '../' para retroceder un nivel

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Reparto = sequelize.define('reparto', {
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

  idActor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
}, {
  // Opciones de configuración adicionales
});

module.exports = Reparto;
