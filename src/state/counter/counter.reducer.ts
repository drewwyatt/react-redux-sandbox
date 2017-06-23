import { CounterActions } from './counter.actions';

export type CounterState = number;
const DEFAULT_STATE = 0;

// This is not absolutely necessary (it just makes the switch look cleaner)
const { ActionType } = CounterActions;

export const counterReducer = (state: CounterState = DEFAULT_STATE, action: CounterActions.Type ): CounterState => {
    switch (action.type) {
        // If you don't want to unwrap ActionType, you can access it like this
        case CounterActions.ActionType.INCREMENT_COUNTER:
            return state + action.payload.amount;
        case ActionType.DECREMENT_COUNTER:
            return state - action.payload.amount;
        default:
            return state;
    }
};

