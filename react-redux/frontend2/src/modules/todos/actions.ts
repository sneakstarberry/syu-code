import { createAsyncAction } from 'typesafe-actions';
import { GetData } from '../../api/django';
import { AxiosError } from 'axios';

export const GET_TODO_DATA = 'todos/GET_TODO_DATA';
export const GET_TODO_DATA_SUCCESS = 'todos/GET_TODO_DATA_SUCCESS';
export const GET_TODO_DATA_ERROR = 'todos/GET_TODO_DATA_ERROR';

export const getTodoAsync = createAsyncAction(
  GET_TODO_DATA,
  GET_TODO_DATA_SUCCESS,
  GET_TODO_DATA_ERROR
)<undefined, GetData, AxiosError>();