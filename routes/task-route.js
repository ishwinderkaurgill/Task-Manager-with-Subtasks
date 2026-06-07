const express = require("express")

const router = express.Router()

const { handleCreateTask,
    handleGetAllTask,
    handleGetDeletedTasks,
    handleSoftDeleteTask,
    handleRestoreTask,
    handleAddSubtask,
    handleRemoveSubtask,
    handleGetSubtasks,
 } = require('../controllers/task-controller')

router.post('/tasks', handleCreateTask)

router.get('/tasks', handleGetAllTask)

router.get('/tasks/deleted', handleGetDeletedTasks)

router.delete('/tasks/:id', handleSoftDeleteTask)

router.patch('/tasks/:id/restore', handleRestoreTask)

router.post('/tasks/:id/subtasks', handleAddSubtask)

router.delete('/tasks/:id/subtasks', handleRemoveSubtask)

router.get('/tasks/:id/subtasks', handleGetSubtasks)
