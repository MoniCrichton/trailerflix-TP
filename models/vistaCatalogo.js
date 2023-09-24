const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../sequelize'); // Importa la instancia de Sequelize

const VistaCatalogo = sequelize.define('vista_catalogo', {
  // Define las columnas de la vista aquí, asegúrate de que coincidan con la vista en la base de datos
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  poster: {
    type: DataTypes.STRING(255), // Usar DataTypes.STRING y especificar la longitud máxima
    allowNull: true,
    defaultValue: null,
  },

  titulo: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },

  categoria: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },

  genero: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },

  resumen: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },

  temporadas: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },

  reparto: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },

  trailer: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  // ... otras columnas ...
}, {
  // Opciones de configuración adicionales
  tableName: 'vista_catalogo', // Especifica el nombre de la vista en la base de datos
  timestamps: false, // Si la vista no tiene timestamps
});

module.exports = VistaCatalogo;
