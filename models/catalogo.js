const { INTEGER } = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});


const Catalogo = sequelize.define('catalogo', {
  // Define las columnas de la tabla "catalogo" aquí
  id: {
    type: INTEGER,
    allowNull: false,
    Key: PRI,
    Default: null,
    Extra: autoincrement  
  },
  
  poster: { //colocar referncia a pagina??
    type: varchar,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },

  titulo: { 
    type: varchar,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },
  
  categoría: { 
    type: varchar,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },
  
  genero: { 
    type: varchar,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },
  
  resumen: { 
    type: text,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },

  reparto: { 
    type: text,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },

  trailer: { 
    type: varchar,
    allowNull: true,
    Key: null,
    Default: null,
    Extra: null 
  },
  
}, {
  // Opciones de configuración adicionales
});

module.exports = Catalogo;
