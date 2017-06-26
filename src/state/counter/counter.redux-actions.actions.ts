import { createAction } from 'redux-actions';

namespace CounterReduxActions {
    export type Payload = number | string;
    export enum ActionTypes {
        INCREMENT = 'COUNTER/INCREMENT',
        DECREMENT = 'COUNTER/DECREMENT',
    }

    export const incrementWithReduxActions = createAction<number, number>(ActionTypes.INCREMENT, n => n);
    export const decrementWithReduxActions = createAction<number, number>(ActionTypes.DECREMENT, n => n);
}

export default CounterReduxActions;