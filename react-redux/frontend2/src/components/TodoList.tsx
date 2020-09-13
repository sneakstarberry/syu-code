import React from 'react';
import { GetData } from '../api/django';

function TodoList({ todos }:any) {
    <ul>
        {todos.map((data: GetData) => (
            <li key={data.id}>
                {data.text}
                {data.created_at}
            </li>
        ))}
    </ul>
}

export default TodoList;