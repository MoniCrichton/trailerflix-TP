/**
 * @swagger
 * info:
 *   title: Traileflix
 *   version: 1.0.0
 *   description: catalogo de peliculas y series. TP para curso NodeJS UNTREF
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MyModel:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the item
 *         name:
 *           type: string
 *           description: The name of the item
 */

/**
 * @swagger
 * /api/myendpoint:
 *   get:
 *     summary: Get all items
 *     responses:
 *       '200':
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MyModel'
 */
