const { DataTypes, Sequelize } = require('sequelize');
const config = require('../config.js'); //  Usa '../' para retroceder un nivel

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Categorias = sequelize.define('categorias', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  nombre: {
    type: DataTypes.STRING(255), // Usar DataTypes.STRING y especificar la longitud máxima
    allowNull: true,
  },
}, {
  // Opciones de configuración adicionales
});

module.exports = Categorias;
