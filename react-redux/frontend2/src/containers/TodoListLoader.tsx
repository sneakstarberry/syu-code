import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import TodoListForm from '../components/TodoListForm';
import TodoListInfo from '../components/TodoListInfo';
import { getTodoDataThunk } from '../modules/todos';

function TodoListLoader() {
  const { data, loading, error } = useSelector((state: RootState) => state.todos.todoData);
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(getTodoDataThunk('1'));
  },[dispatch]);
  const onSubmitId = (id: string) => {
    dispatch(getTodoDataThunk(id));
  };

  return (
    <>
      <TodoListForm onSubmitId={onSubmitId} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <TodoListInfo id={data.id} text={data.text} created_at={data.created_at} />}
    </>
  );
}

export default TodoListLoader;