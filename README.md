# TodoList Backend with Express

## Description

This is a simple TodoList backend application built with Express.js. It provides a RESTful API for managing todo items.

## Features

- Create a new todo item
- Retrieve all todo items
- Retrieve a single todo item by ID
- Update a todo item by ID
- Delete a todo item by ID

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ZakariaElkhadir/express-ToDo.git
    ```
2. Navigate to the project directory:
    ```bash
    cd express-ToDo
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running at `http://localhost:5000`.

## API Endpoints

- `GET /tasks` - Retrieve all todo items
- `POST /tasks` - Create a new todo item
- `PUT /tasks/:id` - Update a todo item by ID
- `DELETE /tasks/:id` - Delete a todo item by ID

## Postman Tests

You can use Postman to test the API endpoints. Below are some example tests for each endpoint.

### Retrieve All Todo Items

1. **Method**: GET
2. **URL**: `http://localhost:5000/tasks`

### Create a New Todo Item

1. **Method**: POST
2. **URL**: `http://localhost:5000/tasks`
3. **Body**: 
    ```json
    {
        "title": "New Task",
        "description": "This is a new task"
    }
    ```

### Retrieve a Single Todo Item by ID

1. **Method**: GET
2. **URL**: `http://localhost:5000/tasks/:id`

### Update a Todo Item by ID

1. **Method**: PUT
2. **URL**: `http://localhost:5000/tasks/:id`
3. **Body**: 
    ```json
    {
        "title": "Updated Task",
        "description": "This is an updated task"
    }


### Delete a Todo Item by ID

1. **Method**: DELETE
2. **URL**: `http://localhost:5000/tasks/:id`

## License

This project is licensed under the MIT License.
