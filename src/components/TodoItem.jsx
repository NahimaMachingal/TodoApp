// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <li className={todo.isCompleted ? 'completed' : ''}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button className="edit-btn" onClick={() => editTodo(todo)} title="Edit">
        ✏️
      </button>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)} title="Delete">
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;

