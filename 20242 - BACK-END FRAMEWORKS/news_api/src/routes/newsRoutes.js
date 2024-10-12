const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - author
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID único da notícia
 *           example: 1
 *         title:
 *           type: string
 *           description: O título da notícia
 *           example: "Novo projeto de lei aprovado"
 *         body:
 *           type: string
 *           description: O conteúdo completo da notícia
 *           example: "Hoje, o congresso aprovou um novo projeto de lei que..."
 *         author:
 *           type: string
 *           description: O nome do autor da notícia
 *           example: "João Silva"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação da notícia
 *           example: "2024-10-11T10:30:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: Gerenciar notícias
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Listar todas as notícias
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Lista de notícias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 */

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Obter uma notícia pelo ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da notícia
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Notícia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: Notícia não encontrada
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Criar uma nova notícia
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Notícia criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 */

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Atualizar uma notícia existente
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da notícia
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Notícia atualizada com sucesso
 *       404:
 *         description: Notícia não encontrada
 */

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Deletar uma notícia
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da notícia
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Notícia deletada com sucesso
 *       404:
 *         description: Notícia não encontrada
 */

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.post("/", newsController.createNews);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
