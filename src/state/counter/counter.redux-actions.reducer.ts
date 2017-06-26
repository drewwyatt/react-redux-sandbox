import { handleActions, Action } from 'redux-actions';
import Actions from './counter.redux-actions.actions';

const { INCREMENT, DECREMENT, SOMETHIGN_ELSE } = Actions.ActionTypes;
const DEFAULT_STATE = 0;


export default handleActions<number>({
    [INCREMENT]: (s, a) => {
        // it's really not fun to have to check to see if this is null every time
        // if our actions are written correctly, we should know if this is null or not
        if (a.payload) {
            return s + a.payload;
        }
    },
    [DECREMENT]: (s, a) => {
        if (a.payload) {
            return s - a.payload;
        }
    }
}, DEFAULT_STATE);