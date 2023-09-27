const { Categoria } = require('./models'); // Importa el modelo Categoria

// Función para crear una nueva categoría
exports.createCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await Categoria.create(req.body); // Crea una nueva categoría desde los datos del cuerpo de la solicitud
    res.status(201).json(nuevaCategoria); // Responde con la categoría creada
  } catch (error) {
    console.error('Error al crear una categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Función para obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll(); // Obtiene todas las categorías
    res.json(categorias); // Responde con las categorías en formato JSON
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Otras funciones para actualizar, eliminar y obtener una categoría por ID
// ...

// Exporta las funciones del controlador
