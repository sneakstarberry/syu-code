import React, { useState } from 'react';

function TodoListForm({ onSubmitData }) {
    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitData(input);
        setInput('')
    };

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={input} placeholder="내용을 입력하세요."/>
            <button type="submit">입력</button>
        </form>
    );
}

export default TodoListForm;