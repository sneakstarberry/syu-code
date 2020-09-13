import React, { useEffect, useState } from 'react';
import {getTodosAsync} from '../modules/todos'
import { useDispatch, useSelector } from 'react-redux'
import useTodos from '../hooks/useTodos'

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    useEffect(() => {
        dispatch(getTodosAsync())
    },[dispatch]);
    console.log(todos)
    

    
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>
  
   return (
    <div>
      {todos.map(todo => (
          <li key= {todo.id}>
            <span>{todo.text}</span>
            <span>{todo.created_at}</span>
          </li>
      ))}
    </div>
  );
}

export default TodoList;