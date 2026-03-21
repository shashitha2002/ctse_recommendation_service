import { Router } from "express";
import {
  getlimitedBooks,
  getTrandingBooks,
} from "../controllers/recommendationController.js";

const router = Router();
/**
 * @swagger
 * /api/recommendation/trending:
 *   get:
 *     summary: Get tranding books
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Book details
 *       404:
 *         description: Book not found
 */
router.get("/trending", getTrandingBooks);
/**
 * @swagger
 * /api/recommendation/limited:
 *   get:
 *     summary: Get limited books
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Book details
 *       404:
 *         description: Book not found
 */
router.get("/limited", getlimitedBooks);

export default router;
