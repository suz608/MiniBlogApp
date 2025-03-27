import express from 'express';
import { getPosts, setPost, updatePost, deletePost } from '../controllers/postController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// Define the routes
router.route('/').get(protect, getPosts).post(protect, setPost);
router.route('/:id').delete(protect, deletePost).put(protect, updatePost);

// Export the router as default
export default router;