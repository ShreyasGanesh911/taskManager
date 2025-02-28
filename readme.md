# Task Manager API

A simple RESTful API built with Fastify, Mongoose, and MongoDB to manage tasks. Users can perform CRUD operations on tasks and filter them based on priority. Authentication is handled using JWT-signed cookies.

## Features
- User authentication using JWT and cookies
- CRUD operations for tasks (Create, Read, Update, Delete)
- Fetch tasks based on priority
- Fast and efficient with Fastify
- MongoDB for data storage

## Tech Stack
- **Backend:** Fastify, Node.js, Express (Fastify Framework)
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, Cookies
- **Others:** Dotenv, Bcrypt, CORS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShreyasGanesh911/taskManager.git
   cd taskManager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build typescript files:
   ```bash
   npm build
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:8000` by default.

## API Endpoints

### Authentication
- **Register a new user:** `POST /api/v1/user/register`
- **Login user:** `POST /api/v1/user/login`


### Tasks
- **Get all tasks:** `GET /api/v1/task/all`
- **Get a task by ID:** `GET /api/v1/task/:id`
- **Create a new task:** `POST /api/v1/task`
- **Update a task:** `PUT /api/v1/task/:id`
- **Delete a task:** `DELETE /api/v1/task/:id`
- **Get tasks by priority:** `GET /api/v1/task?priority=high`


### Documentation
- **Postman Documentation** [Postman doc](https://documenter.getpostman.com/view/30026806/2sAYdhKADd)
## Example Requests

### Register User
```json
{
  "name": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

### Create Task
```json
{
  "title": "Complete project",
  "description": "Finish the Fastify task manager API",
  "priority": "high"
}
```


