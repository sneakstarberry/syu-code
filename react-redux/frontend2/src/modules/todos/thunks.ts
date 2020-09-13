import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { TodoAction } from './types';
import { getTodo }  from '../../api/django'
import { getTodoAsync } from './actions';

export function getTodoDataThunk(id: string): ThunkAction<void, RootState, null, TodoAction> {
    return async dispatch => {
        const { request, success, failure } = getTodoAsync;
        dispatch(request())
        try {
            const todoList = await getTodo(id);
            dispatch(success(todoList));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}