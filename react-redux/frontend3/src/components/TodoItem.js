import React from 'react';

function TodoItem({ todo, onRemove, onToggle }) {
  const removeStyle = {
    marginLeft: 8,
    color: 'red'
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };
  
  const handleToggle = () => {
      onToggle(todo.id, todo.done);
  }

  return (
    <li>
      <span onClick={handleToggle} style={{ textDecoration: todo.done ? 'line-through' : 'none'}} >
        {todo.id} | {todo.title} | {todo.content} | {todo.author.nickname} | {todo.created_at} | {todo.updated_at}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;