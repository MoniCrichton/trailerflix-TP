const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'trailerflix',
      version: '1.0.0',
      description: 'catalogo de peliculas y series. TP para curso NodeJS UNTREF',
    },
  },
  apis: ['./routes/*.js'], // Rutas a tus archivos de rutas donde se definen los endpoints.
};

const specs = swaggerJsdoc(options);

module.exports = specs;
