import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task.controller.js';

const router = express.Router();

// נתיבים עבור /api/tasks
router.route('/')
  .get(getTasks)
  .post(createTask);

// נתיבים עבור /api/tasks/:id
router.route('/:id')
  .patch(updateTask)
  .delete(deleteTask);

export default router;