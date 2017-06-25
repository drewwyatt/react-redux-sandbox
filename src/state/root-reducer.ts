import { combineReducers } from 'redux';
import { CounterReducer as counter } from './counter';

export default combineReducers({
    counter,
});

