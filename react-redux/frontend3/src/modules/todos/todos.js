import { getTodo, postTodo, delTodo, patchTodo } from '../../restapi/api';

//TodoList 가져오기
export const GET_TODO_DATA = 'todos/GET_TODO_DATA';
export const GET_TODO_DATA_SUCCESS = 'todos/GET_TODO_DATA_SUCCESS';
export const GET_TODO_DATA_ERROR = 'todos/GET_TODO_DATA_ERROR';
//TodoList 추가
export const POST_TODO_DATA = 'todos/POST_TODO_DATA';
export const POST_TODO_DATA_SUCCESS = 'todos/POST_TODO_DATA_SUCCESS';
export const POST_TODO_DATA_ERROR = 'todos/POST_TODO_DATA_ERROR';
//TodoList 삭제
export const DEL_TODO_DATA = 'todos/DEL_TODO_DATA';
export const DEL_TODO_DATA_SUCCESS = 'todos/DEL_TODO_DATA_SUCCESS';
export const DEL_TODO_DATA_ERROR = 'todos/DEL_TODO_DATA_ERROR';
//TodoList patch
export const PATCH_TODO_DATA = 'todos/PATCH_TODO_DATA';
export const PATCH_TODO_DATA_SUCCESS = 'todos/PATCH_TODO_DATA_SUCCESS';
export const PATCH_TODO_DATA_ERROR = 'todos/PATCH_TODO_DATA_ERROR';
//TodoList 가져오는 함수
export const getTodos = () => async dispatch => {
    dispatch({ type: GET_TODO_DATA });
    try {
        const todoData = await getTodo();
        dispatch({ type: GET_TODO_DATA_SUCCESS, todoData });
    } catch (e) {
        dispatch ({ type: GET_TODO_DATA_ERROR, error : e});
    }
};
//TodoList 추가하는 함수
export const postTodos = (data) => async dispatch => {
    dispatch({ type: POST_TODO_DATA });
    try {
        const postData = await postTodo(data);
        dispatch({ type: POST_TODO_DATA_SUCCESS, postData});
    } catch (e) {
        dispatch ({ type: POST_TODO_DATA_ERROR, error : e});
    }
};
//TodoList 삭제하는 함수
export const delTodos = (id) => async dispatch => {
    dispatch({ type: DEL_TODO_DATA });
    try {
        const delData = await delTodo(id);
        dispatch({ type: DEL_TODO_DATA_SUCCESS, delData});
    } catch (e) {
        dispatch ({ type: DEL_TODO_DATA_ERROR, error: e});
    }
};
//패치하는 함수
export const patchTodos = (id, data) => async dispatch => {
    dispatch({ type: PATCH_TODO_DATA });
    try {
        const patchData = await patchTodo(id, data);
        dispatch({ type: PATCH_TODO_DATA_SUCCESS, patchData});
    } catch (e) {
        dispatch ({ type: PATCH_TODO_DATA_ERROR, error : e});
    }
};
//초기 스테이트 정해주기
const initialState = {
    todoData: {
        loading: false,
        error: null,
        data: null
    },
    postData: {
        loading: false,
        error: null,
        data: null
    },
    delData: {
        loading: false,
        error: null,
        data: null
    },
    patchData:{
        loading: false,
        error: null,
        data: null
    }
};
//TodoList리듀서
export default function todos (state = initialState, action) {
    switch (action.type) {
        case GET_TODO_DATA:
            return {
                ...state,
                todoData: {
                    loading: state.todoData.data,
                    error: null,
                    data: null
                }
            };
        case GET_TODO_DATA_SUCCESS:
            return {
                ...state,
                todoData: {
                    loading: false,
                    error: null,
                    data: action.todoData
                }
            };
        case GET_TODO_DATA_ERROR:
            return {
                ...state,
                todoData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case POST_TODO_DATA:
            return {
                ...state,
                postData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case POST_TODO_DATA_SUCCESS:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: null,
                    data: action.postData
                }
            };
        case POST_TODO_DATA_ERROR:
            return {
                ...state,
                postData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case DEL_TODO_DATA:
            return {
                ...state,
                delData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case DEL_TODO_DATA_SUCCESS:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: null,
                    data: action.delData
                }
            };
        case DEL_TODO_DATA_ERROR:
            return {
                ...state,
                delData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
        case PATCH_TODO_DATA:
            return {
                ...state,
                patchData: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case PATCH_TODO_DATA_SUCCESS:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: null,
                    data: action.patchData
                }
            };
        case PATCH_TODO_DATA_ERROR:
            return {
                ...state,
                patchData: {
                    loading: false,
                    error: action.error,
                    data: null
                }
            };
            default:
                return state;
    }
};


