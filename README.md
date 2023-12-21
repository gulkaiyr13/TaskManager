# Task Manager Web Application

A simple Task Manager web application that allows users to add, delete, and mark tasks as completed. The application uses a mock API for storing user tasks.

[!Video](https://youtu.be/l_GgiODQVIY)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gulkaiyr13/TaskManager.git
cd TaskManager(Change into the project directory)
npm install(Install dependencies)
npm start(To run the Task Manager application)

### Features

Add new tasks to the list
Mark tasks as completed
Delete tasks
Persist tasks using a mock API

### API Endpoints

POST /api/v1/user/{userId}/Task: Add a new task.
PUT /api/v1/user/{userId}/Task/{taskId}: Update task status.
DELETE /api/v1/user/{userId}/Task/{taskId}: Delete a task.

### Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature-name
3. Make your changes and commit: git commit -m 'Add feature-name'
4. Push to the branch: git push origin feature-name
5. Open a pull request.

