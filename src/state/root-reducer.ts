import { combineReducers } from 'redux';
import { counterReducer as counter } from './counter/counter.reducer';

export default combineReducers({
    counter,
});

