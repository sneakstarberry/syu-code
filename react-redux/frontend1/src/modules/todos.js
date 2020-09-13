import axios from 'axios'

const GET_TODOS = 'todos/GET_TODOS';

export const getTodos = data => ({
    type: GET_TODOS,
    data
});

export const getTodosAsync = () => async dispatch => {
    return await axios.get('http://127.0.0.1:8000/api/')
    .then(response => {
        dispatch(getTodos(response))
    })
    .catch(error=> {
        throw(error);
    });
};

const initState = [
]

const todos = (state = initState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action
                }
            default:
                return state;
    }
};

export default todos;