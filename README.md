# [trailerflix-TP](https://github.com/MoniCrichton/trailerflix-TP.git)


Catalogo de películas y series para el curso de NodeJS de la UNTREF 2023


## Cómo Iniciar el Proyecto

### 1. Configuración del Entorno

    Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde el sitio oficial de Node.js.

    Mi versión actual de NodeJs es v18.16.0.

### 2. Instalación de Dependencias

   Desde tu editor de código (preferiblemente VSCode), abre una nueva terminal y ejecuta los siguientes comandos:

   ```bash 
npm install
npm init -y
npm install sequelize mysql2
   ```
 
### 3. Configuración de la Base de Datos

Crea un archivo .env (dotenv)en la raíz del proyecto con las siguientes credenciales:

```
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_de_MySQL
DB_NAME=trailerflix

```
### Configura los archivos siguientes:

**Config.js**

```javascript
require('dotenv').config();

module.exports = {
  database: process.env.DB_NAME || 'nombre_de_la_base_de_datos',
  username: process.env.DB_USER || 'nombre_de_usuario',
  password: process.env.DB_PASSWORD || 'contraseña',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT || 'mysql',
};
```
**sequelize.js**

```javascript
const { Sequelize } = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port, 
    dialect: config.dialect,
  }
);

module.exports = sequelize;
```
### MySQL:

Asegúrate de tener MySQL instalado y ejecuta los scripts en ./mysql-scripts para crear las tablas.

### 4. Ejecutar la Aplicación

```bash
npm start
```

La aplicación estará disponible en ***http://localhost:3000***

## Documentación de Endpoints

### Obtener Todas las Categorías

#### Descripción: Obtiene información sobre todas las categorías disponibles en el catálogo.

Endpoint: GET /categorias

#### Respuesta Exitosa (200):
```json
{
  "categorias": ["Serie", "Película", "Documental", ...]
}
```

#### Respuesta de Error (404):
```json
{
  "error": "No se encontraron categorías."
}
```
### Obtener Catálogo Completo

### Descripción: Obtiene el catálogo completo de películas y series.
Endpoint: GET /catalogo
#### Respuesta Exitosa (200):
```json
{
  "catalogo": [
    { "id": 1, "titulo": "Pelicula 1", ... },
    { "id": 2, "titulo": "Serie 1", ... },
    ...
  ]
}

```
#### Respuesta de Error (500):
```json
{
  "error": "Error interno del servidor al obtener el catálogo completo."
}
```
## Obtener Película o Serie por ID

### Descripción
Obtiene información detallada sobre una película o serie específica según su ID.

### Endpoint
GET /catalogo/id/:id

#### Parámetros

    id: ID de la película o serie.


#### Respuesta Exitosa (200)
Ejemplo:

``` javascript 
{
  "id": 1,
  "titulo": "Pelicula 1",
  ...
}
```

#### Respuesta de Error (404)
Ejemplo:

```json
{
  "error": "No se encontró ninguna película o serie con ese ID."
}

```
## Obtener Películas o Series por Nombre
### Descripción

Obtiene información sobre películas o series cuyo nombre coincide parcial o totalmente con el proporcionado.

### Endpoint
GET /catalogo/nombre/:nombre

#### Parámetros

    nombre: Nombre o parte del nombre de la película o serie.

#### Respuesta Exitosa (200)
Ejemplo:

``` javascript 
[
  { "id": 1, "titulo": "Pelicula 1", ... },
  { "id": 2, "titulo": "Serie 1", ... },
  ...
]
```

#### Respuesta de Error (404)
Ejemplo:

```json
{
  "error": "No se encontraron películas o series con ese nombre."
}
```

## Obtener Películas o Series por Género
### Descripción

Obtiene información sobre películas o series pertenecientes al género proporcionado.
### Endpoint

#### Parámetros

        genero: Género de la película o serie. Drama, CienciaFiccion,Fantasia

#### Respuesta Exitosa (200)
Ejemplo:

``` javascript 
[
  { "id": 1, "titulo": "Pelicula 1", ... },
  { "id": 2, "titulo": "Serie 1", ... },
  ...
]

```

#### Respuesta de Error (404)
Ejemplo:

```json
{
  "error": "No se encontraron películas o series con ese género."
}
```

## Obtener Películas o Series por Categoría
### Descripción

Obtiene información sobre películas o series de la categoría proporcionada.
### Endpoint
GET /catalogo/categoria/:categoria

#### Parámetros

        categoria: Categoría de la película o serie. Serie, Pelicula

#### Respuesta Exitosa (200)
Ejemplo:

``` javascript 
[
  { "id": 1, "titulo": "Pelicula 1", ... },
  { "id": 2, "titulo": "Serie 1", ... },
  ...
]
```

#### Respuesta de Error (404)
Ejemplo:

```json
{
  "error": "No se encontraron películas o series con esa categoría."
}
```

## Datos de Ejemplo

En el archivo [`trailer.json`](trailer.json), encontrarás datos de ejemplo que puedes utilizar para probar la aplicación localmente. Este archivo contiene información sobre películas y series que pueden ser importadas y utilizadas para poblar la base de datos de la aplicación.

 Este archivo `trailer.json` original fue convertido a formato CSV utilizando la herramienta "JSON to CSV" de Khaer Ansori para facilitar la importación de datos a MySQL. Puedes encontrar el archivo [CSV trailerplana revision.csv](trailerplana-revision.csv) resultante (con modificaciones por errores en el archivo json) en el mismo directorio.

## Pruebas con Postman

Postman es una herramienta muy útil para probar y documentar APIs. Puedes descargarla desde la página de descargas de Postman.
Colección de Postman

Se proporciona una colección de Postman (Trailerflix-TP.postman_collection.json) en la que encontrarás ejemplos de las solicitudes para los distintos endpoints de la API. Puedes importar esta colección en tu instancia de Postman para probar fácilmente las diferentes rutas.
Probar Endpoints

    Importa la colección de Postman en tu aplicación Postman.
    Abre la colección y selecciona la solicitud que deseas probar.
    Asegúrate de que el servidor esté en ejecución.
    Ejecuta la solicitud y verifica la respuesta.

### Variables de Entorno

Considera el uso de variables de entorno en Postman para facilitar la transición entre entornos de desarrollo, pruebas y producción. Puedes configurar variables como base_url para que sea más fácil cambiar entre servidores.

#### Documentación Adicional

En la pestaña "Body" de cada solicitud en Postman, proporciona ejemplos de datos de solicitud para facilitar la comprensión de cómo interactuar con la API.

#####  Editor de Texto o IDE

Un editor de texto o un entorno de desarrollo integrado (IDE) como Visual Studio Code puede ser útil para revisar y modificar el código. Asegúrate de tener las extensiones adecuadas instaladas para facilitar el desarrollo.


## Agradecimientos:
Agradezco a Argentina Programa y a UNTREF por este curso (NodeJs), que ha resultado tanto desafiante como gratificante.

Al profesor Jean Larez por sus enseñanzas y sus esfuerzos en transmitirnos sus conocimientos, superando circunstancias adversas para permitirnos aprender. 

A los tutores Mateo Catalano y Gerardo Burgos por su dedicación, interés y paciencia con nosotros en cada momento del curso. Todo lo que esté erróneo de este proyecto es mal aprendizaje mio 😄

A mis fantásticos compañeros, tanto del turno mañana como tarde, por compartir lo que sabían o aprendieron durante el curso, ayudando unos a otros, sosteniendo a los que tropezaban y festejando a los que avanzaban mas rápido. fue un gusto cursar con ustedes!

