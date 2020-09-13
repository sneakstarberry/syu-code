import { createReducer } from 'typesafe-actions';
import { TodoState, TodoAction} from './types';
import { GET_TODO_DATA, GET_TODO_DATA_SUCCESS, GET_TODO_DATA_ERROR} from './actions';

const initialState: TodoState = {
    todoData: {
        loading: false,
        error: null,
        data: null
    }
};

const todos = createReducer<TodoState, TodoAction>(initialState, {
    [GET_TODO_DATA]: state => ({
        ...state,
        todoData: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_TODO_DATA_SUCCESS]: (state, action) => ({
        ...state,
        todoData: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_TODO_DATA_ERROR]: (state, action) => ({
        ...state,
        todoData: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default todos;