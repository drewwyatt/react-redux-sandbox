import { Action } from 'redux';

export namespace CounterActions {
    /**
     * _______ as _______ is being used as a poor man's string enum
     * This should no longer be necessary after typescript 2.4.0
     * https://blogs.msdn.microsoft.com/typescript/2017/06/12/announcing-typescript-2-4-rc/
     */

    export const ActionType = {
        INCREMENT_COUNTER: 'COUNTER/INCREMENT_COUNTER' as 'COUNTER/INCREMENT_COUNTER',
        DECREMENT_COUNTER: 'COUNTER/DECREMENT_COUNTER' as 'COUNTER/DECREMENT_COUNTER'
    };

    export type Type = 
        IncrementCounterAction |
        DecrementCounterAction;


    /*******/

    interface IncrementCounterAction extends Action {
        type: 'COUNTER/INCREMENT_COUNTER';
        payload: {
            amount: number;
        };
    }

    export const increment = (): IncrementCounterAction => ({ type: ActionType.INCREMENT_COUNTER, payload: { amount: 1 } });
    export const incrementBy = (amount: number): IncrementCounterAction => ({ type: ActionType.INCREMENT_COUNTER, payload: { amount } });

    /*******/

    interface DecrementCounterAction extends Action {
        type: 'COUNTER/DECREMENT_COUNTER';
        payload: {
            amount: number;
        };
    }

    export const decrement = (): DecrementCounterAction => ({ type: ActionType.DECREMENT_COUNTER, payload: { amount: 1 } });
    export const decrementBy = (amount: number): DecrementCounterAction => ({ type: ActionType.DECREMENT_COUNTER, payload: { amount } });
}

