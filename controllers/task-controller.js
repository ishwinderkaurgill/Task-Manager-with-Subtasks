const Task = require("../models/task-models")

async function handleCreateTask(req, res) {
    try {

        const { title, description, priority } = req.body

        if (!title || title.trim() === "") {
            return res.status(400).json({ error: "Title is required" })
        }

        const task = await Task.create({
            title: title,
            description: description,
            priority: priority,
        })

        return res.status(201).json({ success: "Task is Created", task })

    }

    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}

async function handleGetAllTask(req, res) {
    try {

        const { priority } = req.query

        let filter = { isDeleted: false }

        if (priority) {
            filter = {
                isDeleted: false,
                priority: priority
            }
        }

        const task = await Task.find(filter).sort({ createdAt: -1 })

        return res.status(200).json({ success: " Found all Task", task })

    }

    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}


async function handleGetDeletedTasks(req, res) {
    try {

        const task = await Task.find({ isDeleted: true }).sort({ deletedAt: -1 })

        return res.status(200).json(task)

    }

    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}

async function handleSoftDeleteTask(req, res) {
    try {

        const id = req.params.id

        const task = await Task.findByIdAndUpdate(id, {
            isDeleted: true,
            deletedAt: new Date()
        }, { new: true })

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }

        return res.status(200).json(task)

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}

async function handleRestoreTask(req, res) {
    try {

        const id = req.params.id

        const task = await Task.findByIdAndUpdate(id, {
            isDeleted: false,
            deletedAt: null
        }, { new: true })

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }

        return res.status(200).json(task)

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}

async function handleAddSubtask(req, res) {
    try {

        const id = req.params.id

        const { subtask } = req.body

        if (!subtask || subtask.trim() === "") {
            return res.status(400).json({ error: "Subtask cannot be empty" })
        }

        const task = await Task.findByIdAndUpdate(id, {
            $push: {
                subtasks: subtask
            }
        }, { new: true })

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }


        return res.status(200).json(task)

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}


async function handleRemoveSubtask(req, res) {
    try {

        const id = req.params.id
        const { subtask } = req.body

        if (!subtask || subtask.trim() === "") {
            return res.status(400).json({ error: "Subtask cannot be empty" })
        }

        const task = await Task.findByIdAndUpdate(
            id,
            { $pull: { subtasks: subtask } },
            { new: true }
        )

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }


        return res.status(200).json(task)

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}

async function handleGetSubtasks(req, res) {
    try {

        const id = req.params.id

        const task = await Task.findById(id).select("subtasks")

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }

        return res.status(200).json(task.subtasks)

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid Data" })
        }

        return res.status(500).json({ error: err.message })
    }
}


module.exports = {

    handleCreateTask,
    handleGetAllTask,
    handleGetDeletedTasks,
    handleSoftDeleteTask,
    handleRestoreTask,
    handleAddSubtask,
    handleRemoveSubtask,
    handleGetSubtasks,
}