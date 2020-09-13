import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { getTodos } from '../modules/todos';

export default function useTodoActions(id) {
  const dispatch = useDispatch();

  const getLists = useCallback(() => dispatch(getTodos(data)), [dispatch, data]);

  return { getLists };
}