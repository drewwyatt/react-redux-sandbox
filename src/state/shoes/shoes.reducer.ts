import BRRedux from 'br-redux';
import Actions from './shoes.actions';
import { IShoe, DEFAULT_SHOE } from './shoes.models';

export interface IShoesState {
    fetchStatus: BRRedux.FetchStatus;
    selectedId: number;
    collection: IShoe[];
    selected: IShoe;
    error: string;
}

const DEFAULT_STATE: IShoesState = {
    fetchStatus: BRRedux.FetchStatus.NOT_FETCHED,
    selectedId: -1,
    collection: [],
    selected: { ...DEFAULT_SHOE },
    error: '',
};

const { FETCH, FIND, CREATE, UPDATE, DELETE, LOAD_COLLECTION, LOAD_ONE, ERROR } = Actions.ActionType;

export const shoesReducer = (state: IShoesState = DEFAULT_STATE, action: Actions.ShoeAction): IShoesState => {
    switch (action.type) {
        case FIND:
            // If we already have this, use the shoe in memory
            // Middleware will still look for a new shoe and load the update if it gets a new version
            const selectedIdx = state.collection.findIndex(s => s.id === action.payload);
            return (selectedIdx > -1) 
                ? Object.assign({}, state, { fetchStatus: BRRedux.FetchStatus.SUCCESS, selectedId: action.payload, selected: state[selectedIdx] }) 
                : Object.assign({}, state, { fetchStatus: BRRedux.FetchStatus.FETCHING, selectedId: action.payload });
        case LOAD_COLLECTION:
            return Object.assign({}, state, {
                fetchStatus: BRRedux.FetchStatus.SUCCESS,
                collection: action.payload,
            });
        case LOAD_ONE:
            return Object.assign({}, state, {
                fetchStatus: BRRedux.FetchStatus.SUCCESS,
                selected: action.payload,
            });
        case ERROR:
            return Object.assign({}, state, { fetchStatus: BRRedux.FetchStatus.ERROR, error: action.payload });
        case FETCH:  // has no payload - fetching all shoes
        case CREATE: // payload used in middleware
        case UPDATE: // payload used in midleware
        case DELETE: // payload used in middleware
            return Object.assign({}, state, { fetchStatus: BRRedux.FetchStatus.FETCHING });
        default:
            return state;
    }
}