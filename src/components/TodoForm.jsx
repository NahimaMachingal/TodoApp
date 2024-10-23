// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo({
      text: text.trim(),
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;


