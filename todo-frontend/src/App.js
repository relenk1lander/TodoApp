import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8080/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title, completed: false });
    setTitle("");
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`${API_URL}/${todo.id}`, { ...todo, completed: !todo.completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App" style={{ margin: '2rem' }}>
      <h1>Todo List</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Todo" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => toggleComplete(todo)}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
