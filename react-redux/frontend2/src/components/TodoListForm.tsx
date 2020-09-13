import React, { FormEvent, useState, ChangeEvent } from 'react';
import './GithubUsernameForm.css';

type TodoListFormProps = {
    onSubmitId: (id:string) => void;
};

function TodoListForm({ onSubmitId }: TodoListFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitId(input);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <form className= "GithubUserNameForm" onSubmit={onSubmit}>
            <input onChange={onChange} value={input} placeholder="id를 입력하세요." />
            <button type="submit">조회</button>
        </form>
    );
}

export default TodoListForm;