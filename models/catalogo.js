const config = require('./config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});


const Catalogo = sequelize.define('catalogo', {
  // Define las columnas de la tabla "catalogo" aquí
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Otras columnas...
}, {
  // Opciones de configuración adicionales
});

module.exports = Catalogo;
