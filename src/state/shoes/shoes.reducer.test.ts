import BRRedux from 'br-redux';
import { shoesReducer, DEFAULT_STATE } from './shoes.reducer';
import ShoesActions from './shoes.actions';
import { DEFAULT_SHOE } from './shoes.models';

describe('Shoes Reducer', () => {
    test('Has default state', () => {
        expect(shoesReducer(undefined, { type: '', payload: undefined })).toEqual(DEFAULT_STATE);
    });

    test('Does not modify existing state', () => {
        Object.freeze(DEFAULT_STATE);

        shoesReducer(DEFAULT_STATE, ShoesActions.create(DEFAULT_SHOE));
        shoesReducer(DEFAULT_STATE, ShoesActions.del(2));
        shoesReducer(DEFAULT_STATE, ShoesActions.error('Ruh roh...'));
        shoesReducer(DEFAULT_STATE, ShoesActions.fetchAll());
        shoesReducer(DEFAULT_STATE, ShoesActions.find(7));
        shoesReducer(DEFAULT_STATE, ShoesActions.load([ DEFAULT_SHOE ]));
        shoesReducer(DEFAULT_STATE, ShoesActions.loadOne(DEFAULT_SHOE));
        shoesReducer(DEFAULT_STATE, ShoesActions.update(DEFAULT_SHOE));
    });

    test('Asyc actions mark state as loading', () => {
        expect(shoesReducer(DEFAULT_STATE, ShoesActions.create(DEFAULT_SHOE))).toEqual(Object.assign({}, DEFAULT_STATE, { fetchStatus: BRRedux.FetchStatus.FETCHING }));
        expect(shoesReducer(DEFAULT_STATE, ShoesActions.del(2))).toEqual(Object.assign({}, DEFAULT_STATE, { fetchStatus: BRRedux.FetchStatus.FETCHING }));
        expect(shoesReducer(DEFAULT_STATE, ShoesActions.fetchAll())).toEqual(Object.assign({}, DEFAULT_STATE, { fetchStatus: BRRedux.FetchStatus.FETCHING }));
        expect(shoesReducer(DEFAULT_STATE, ShoesActions.update(DEFAULT_SHOE))).toEqual(Object.assign({}, DEFAULT_STATE, { fetchStatus: BRRedux.FetchStatus.FETCHING }));
    });
});