// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Add or update a todo
  const handleAddTodo = (newTodo) => {
    if (editTodo) {
      setTodos(todos.map((todo) => (todo.id === editTodo.id ? { ...todo, text: newTodo.text } : todo)));
      setEditTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo.text, isCompleted: false }]);
    }
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Mark a todo as completed
  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  // Set the todo to be edited
  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="todo-app">
      <h1>Todo List App</h1>
      <TodoForm addTodo={handleAddTodo} editTodo={editTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTodo}
            toggleComplete={handleToggleComplete}
            editTodo={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
