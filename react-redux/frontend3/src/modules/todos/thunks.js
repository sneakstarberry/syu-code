// import { getTodos, getTodosSuccess, getTodosError } from './todos';
// import { getTodo } from '../../restapi/api';

// export function getTodoDataThunk() {
//     return async dispatch => {
//         // const { request, success, failure } = getTodoAsync();
//         dispatch(getTodos())
//         try {
//             const todoList = await getTodo();
//             dispatch(getTodosSuccess(todoList));
//         } catch (e) {
//             dispatch(getTodosError(e));
//         }
//     };
// }

// {...data, done:!data.done }