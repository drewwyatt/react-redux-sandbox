import { CounterActions } from './counter.actions';

export type ICounterState = number;
const DEFAULT_STATE = 0;

// This is not absolutely necessary (it just makes the switch look cleaner)
const { ActionType } = CounterActions;

export const counterReducer = (state: ICounterState = DEFAULT_STATE, action: CounterActions.Type ): ICounterState => {
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