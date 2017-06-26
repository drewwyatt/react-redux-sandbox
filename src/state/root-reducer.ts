import { combineReducers } from 'redux';
import { counterReducer as counter, ICounterState } from './counter';
import { shoesReducer as shoes, IShoesState } from './shoes';

export interface IRootState {
    counter: ICounterState;
    shoes: IShoesState;
}

export const rootReducer = combineReducers({
    counter,
    shoes,
});

