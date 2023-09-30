const express = require('express');
const app = express();
const { Sequelize, Op } = require('sequelize');
const config = require('./config');
const path = require('path');
const Categorias = require(path.join(__dirname, './models/categorias'));
const VistaCatalogo = require(path.join(__dirname, './models/vistaCatalogo'));

// Middleware de registro para imprimir cada solicitud en la consola
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

// Configura Sequelize para conectar con la base de datos
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

// Sincroniza modelos
const syncModels = async () => {
  try {
    await Categorias.sync();
    await VistaCatalogo.sync();
    console.log('Modelos sincronizados correctamente');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

// Llama a la función para sincronizar modelos al inicio
syncModels();


// Rutas
app.get('/categorias', async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    if (categorias.length === 0) {
      // Si no hay categorías, puedes devolver un mensaje o un array vacío según tu preferencia
      res.json({ message: 'No hay categorías disponibles' });
    } else {
      res.json(categorias);
    }
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor al obtener las categorías.' });
  }
});

// Función para construir la ruta de la imagen
const construirRutaImagen = (nombreImagen) => {
  // Supongo que las imágenes se almacenan en una carpeta llamada "imagenes" en la raíz del proyecto
  return `./imagenes/${nombreImagen}`;
};

app.get('/catalogo', async (req, res) => {
  try {
    const catalogoCompleto = await VistaCatalogo.findAll();
    const catalogoConRutaImagen = catalogoCompleto.map((item) => {
      return item.poster
        ? { ...item.toJSON(), poster: construirRutaImagen(item.poster) }
        : item.toJSON();
    });
    res.json(catalogoConRutaImagen);
  } catch (error) {
    console.error('Error al obtener el catálogo completo:', error);
    res.status(500).json({ error: 'Error interno del servidor al obtener el catálogo completo.' });
  }
});

app.get('/catalogo/id/:id', async (req, res) => {
  // Obtiene el id de la película o serie desde req.params.id
  const id = req.params.id;
  
  try {
    // Utiliza el modelo Sequelize para buscar el registro en el catálogo por id
    const resultado = await VistaCatalogo.findByPk(id);
    
    if (resultado) {
      // Si se encuentra el registro, responde con los resultados en formato JSON
      res.json(resultado);
    } else {
      // Si no se encuentra el registro, responde con un mensaje de error
      res.status(404).json({ error: 'No se encontró ninguna película o serie con ese id.' });
    }
  } catch (error) {
    console.error('Error al buscar la película o serie por id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/catalogo/nombre/:nombre', async (req, res) => {
  const nombre = req.params.nombre;
  try {
    const resultados = await VistaCatalogo.findAll({
      where: {
        titulo: {
          [Op.like]: `%${nombre}%`,
        },
      },
    });
    if (resultados.length > 0) {
      res.json(resultados);
    } else {
      res.status(404).json({ error: 'No se encontraron películas o series con ese nombre.' });
    }
  } catch (error) {
    console.error('Error al buscar películas o series por nombre:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/catalogo/genero/:genero', async (req, res) => {
  const genero = req.params.genero;
  try {
    const resultados = await VistaCatalogo.findAll({
      where: {
        genero: {
          [Op.like]: `%${genero}%`,
        },
      },
    });
    if (resultados.length > 0) {
      res.json(resultados);
    } else {
      res.status(404).json({ error: 'No se encontraron películas o series con ese género.' });
    }
  } catch (error) {
    console.error('Error al buscar películas o series por género:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/catalogo/categoria/:categoria', async (req, res) => {
  const categoria = req.params.categoria;
  try {
    const resultados = await VistaCatalogo.findAll({
      where: {
        categoria: {
          [Op.like]: `%${categoria}%`,
        },
      },
    });
    if (resultados.length > 0) {
      res.json(resultados);
    } else {
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
