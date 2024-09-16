const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksControllers');

// Ruta para obtener todas las tareas
router.get('/', (req, res) => {
    const tasks = taskController.getAllTask();
    res.status(200).json(tasks);
});

// Ruta para obtener una tarea por id
router.get('/:id', (req, res) => {
    const task = taskController.getTaskById(parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
});

// Ruta para crear una nueva tarea
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = taskController.createTask(title, description);
    res.status(201).json(newTask);
});

// Ruta para eliminar una tarea por id
router.delete('/:id', (req, res) => {
    const deletedTask = taskController.deleteTask(parseInt(req.params.id));
    if (!deletedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(deletedTask);
});

// Ruta para actualizar una tarea por id
router.put('/:id', (req, res) => {
    const { title, description } = req.body;
    const updatedTask = taskController.updateTask(parseInt(req.params.id), title, description);
    if (!updatedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(updatedTask);
});

module.exports = router;
