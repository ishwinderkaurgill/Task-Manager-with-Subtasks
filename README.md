# Task-Manager-with-Subtasks

# ✅ Task Manager API with Subtasks

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![Mongoose](https://img.shields.io/badge/Mongoose-7.x-red)

A production-ready REST API for managing tasks and subtasks with soft delete functionality. Built with Node.js, Express, MongoDB, and Mongoose.

---

## ✨ Features

### Task Management
- ✅ **Create Task** - Add new tasks with title, description, and priority
- ✅ **Get All Tasks** - Fetch all active tasks with priority filtering
- ✅ **Soft Delete** - Delete tasks without losing data (recoverable)
- ✅ **Restore Task** - Recover soft-deleted tasks
- ✅ **View Deleted Tasks** - Get all tasks that are soft-deleted

### Subtask Management
- ✅ **Add Subtask** - Add multiple subtasks to any task
- ✅ **Remove Subtask** - Remove specific subtasks from a task
- ✅ **Get Subtasks** - View all subtasks of a task

### Data Persistence
- ✅ MongoDB database with Mongoose ODM
- ✅ Automatic timestamps (createdAt, updatedAt)
- ✅ Soft delete with `deletedAt` timestamp
- ✅ Priority levels: low, medium, high

### Data Validation
- Title is required (cannot be empty)
- Subtask cannot be empty
- Proper error handling for invalid ObjectId formats

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| dotenv | Environment variables |

---

## 📦 API Endpoints

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Get all active tasks (supports `?priority=high`) |
| GET | `/tasks/deleted` | Get all soft-deleted tasks |
| DELETE | `/tasks/:id` | Soft delete a task |
| PATCH | `/tasks/:id/restore` | Restore a soft-deleted task |

### Subtask Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks/:id/subtasks` | Add a subtask to a task |
| DELETE | `/tasks/:id/subtasks` | Remove a subtask from a task |
| GET | `/tasks/:id/subtasks` | Get all subtasks of a task |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/ishwinderkaurgill/task-manager-api.git
cd task-manager-api

# Install dependencies
npm install

# Create environment file
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env



# Start the server
npm start

```

👨‍💻 Author

Ishwinder Kaur Gill

GitHub: @ishwinderkaurgill

LinkedIn: ishwinder-kaur-gill-78b498232
