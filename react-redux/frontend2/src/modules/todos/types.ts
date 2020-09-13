import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GetData } from '../../api/django';

export type TodoAction = ActionType<typeof actions>;

export type TodoState = {
    todoData: {
        loading: boolean;
        error: Error | null;
        data: GetData | null;
    }
}