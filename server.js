const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const config = require('./config'); // Importa la configuración de la base de datos

// Configura Sequelize para conectar con la base de datos
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

// Define modelos para las tablas (por ejemplo, Catalogo, Categorias, etc.) aquí
const { Categoria, VistaCatalogo } = require('./models');

// Define rutas de los endpoints
app.get('/categorias', async (req, res) => {
  try {
    // Utiliza el modelo Sequelize para obtener todas las categorías
    const categorias = await Categoria.findAll();
    
    // Responde con los resultados en formato JSON
    res.json(categorias);
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/catalogo', async (req, res) => {
  try {
    // Utiliza el modelo Sequelize para obtener el catálogo completo
    const catalogoCompleto = await VistaCatalogo.findAll();
    
    // Modifica la respuesta para incluir la ruta absoluta de la imagen
    const catalogoConRutaImagen = catalogoCompleto.map((item) => ({
      ...item.toJSON(),
      poster: construirRutaImagen(item.poster), // Reemplaza "poster" con el nombre del campo de imagen
    }));

    // Responde con los resultados en formato JSON
    res.json(catalogoConRutaImagen);
  } catch (error) {
    console.error('Error al obtener el catálogo completo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/catalogo/id/:id', async (req, res) => {
  // Obtiene el código de película o serie desde req.params.id
  const codigo = req.params.id;
  
  try {
    // Utiliza el modelo Sequelize para buscar el registro en el catálogo por código
    const resultado = await VistaCatalogo.findOne({
      where: { codigo: codigo },
    });
    
    if (resultado) {
      // Si se encuentra el registro, responde con los resultados en formato JSON
      res.json(resultado);
    } else {
      // Si no se encuentra el registro, responde con un mensaje de error
      res.status(404).json({ error: 'No se encontró ninguna película o serie con ese código.' });
    }
  } catch (error) {
    console.error('Error al buscar la película o serie por código:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/catalogo/nombre/:nombre', async (req, res) => {
  // Obtiene el nombre o parte del nombre desde req.params.nombre
  const nombre = req.params.nombre;
  
  try {
    // Utiliza el modelo Sequelize para buscar registros en el catálogo que coincidan con el nombre
    const resultados = await VistaCatalogo.findAll({
      where: {
        nombre: {
          [Sequelize.Op.like]: `%${nombre}%`, // Busca registros que contengan el nombre o parte del nombre
        },
      },
    });
    
    if (resultados.length > 0) {
      // Si se encuentran registros, responde con los resultados en formato JSON
      res.json(resultados);
    } else {
      // Si no se encuentran registros, responde con un mensaje de error
      res.status(404).json({ error: 'No se encontraron películas o series con ese nombre.' });
    }
  } catch (error) {
    console.error('Error al buscar películas o series por nombre:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/catalogo/genero/:genero', async (req, res) => {
  // Obtiene el género proporcionado desde req.params.genero
  const genero = req.params.genero;
  
  try {
    // Utiliza el modelo Sequelize para buscar registros en el catálogo que coincidan con el género
    const resultados = await VistaCatalogo.findAll({
      where: {
        genero: {
          [Sequelize.Op.like]: `%${genero}%`, // Busca registros que contengan el género
        },
      },
    });
    
    if (resultados.length > 0) {
      // Si se encuentran registros, responde con los resultados en formato JSON
      res.json(resultados);
    } else {
      // Si no se encuentran registros, responde con un mensaje de error
      res.status(404).json({ error: 'No se encontraron películas o series con ese género.' });
    }
  } catch (error) {
    console.error('Error al buscar películas o series por género:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/catalogo/categoria/:categoria', async (req, res) => {
  // Obtiene la categoría proporcionada desde req.params.categoria
  const categoria = req.params.categoria;
  
  try {
    // Utiliza el modelo Sequelize para buscar registros en el catálogo que coincidan con la categoría
    const resultados = await VistaCatalogo.findAll({
      where: {
        categoria: {
          [Sequelize.Op.like]: `%${categoria}%`, // Busca registros que contengan la categoría
        },
      },
    });
    
    if (resultados.length > 0) {
      // Si se encuentran registros, responde con los resultados en formato JSON
      res.json(resultados);
    } else {
      // Si no se encuentran registros, responde con un mensaje de error
      res.status(404).json({ error: 'No se encontraron películas o series con esa categoría.' });
    }
  } catch (error) {
    console.error('Error al buscar películas o series por categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Escucha en el puerto 3000 (o el puerto que prefieras)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
