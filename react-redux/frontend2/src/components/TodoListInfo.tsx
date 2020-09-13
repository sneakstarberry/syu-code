import React from 'react';
import './GithubProfileInfo.css';

type TodoListInfoProps = {
    id: string;
    text: string;
    created_at: Date;
};

function TodoListInfo({ id, text, created_at }: TodoListInfoProps) {
    return (
        <div className="GithubProfileInfo">
            <div className="profile-head">
                <div className="name">{id}</div>
            </div>
            <p>{text}</p>
            <div>{created_at}</div>
        </div>
    )
}

export default TodoListInfo;