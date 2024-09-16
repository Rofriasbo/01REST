const tasks = [
    {
        id: 1, 
        title: 'Tarea1',
        description: 'Descripción de la tarea 1'
    },
    {
        id: 2, 
        title: 'Tarea2',
        description: 'Descripción de la tarea 2'
    },
    {
        id: 3, 
        title: 'Tarea3',
        description: 'Descripción de la tarea 3'
    }
];

// Función para obtener todas las tareas
function getAllTask() {
    return tasks;
}

// Función para crear una nueva tarea
function createTask(title, description) {
    const newTask = {
        id: tasks.length + 1,
        title, 
        description
    };
    tasks.push(newTask);
    return newTask;
}

// Función para consultar una tarea por id
function getTaskById(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return { error: 'Tarea no encontrada' };
    }
    return task;
}

// Función para eliminar una tarea por id
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return { error: 'Tarea no encontrada' };
    }
    const deletedTask = tasks.splice(taskIndex, 1);  // Eliminar tarea
    return deletedTask[0];  // Devolver la tarea eliminada
}

// Función para actualizar una tarea por id
function updateTask(id, title, description) {
    const task = tasks.findIndex(task => task.id === id);
    if (!task) {
        return { error: 'Tarea no encontrada' };
    }
    task.title = title || task.title;  // Si no se proporciona un nuevo título, mantener el anterior
    task.description = description || task.description;  // Lo mismo para la descripción
    return task;
}

// Exportar las funciones
module.exports = {
    getAllTask,
    createTask,
    getTaskById,
    deleteTask,
    updateTask
};
