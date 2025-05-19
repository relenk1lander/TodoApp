# Todo App

A simple full-stack Todo application using **Java Spring Boot** (backend) and **React** (frontend).

## Backend: Spring Boot

### Tech Stack
- Spring Web
- Spring Data JPA
- H2 In-Memory Database
- Lombok (optional)

### Run Backend

1. Navigate to the backend folder:
    ```bash
    cd todo-backend
    ```

2. Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```

3. The backend will run on: `http://localhost:8080`

### API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/api/todos`        | Get all todos           |
| POST   | `/api/todos`        | Add a new todo          |
| PUT    | `/api/todos/{id}`   | Update a todo           |
| DELETE | `/api/todos/{id}`   | Delete a todo           |

## Frontend: React

### Tech Stack
- React
- Axios

### Run Frontend

1. Navigate to the frontend folder:
    ```bash
    cd todo-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the app:
    ```bash
    npm start
    ```

4. The frontend will run on: `http://localhost:3000`

