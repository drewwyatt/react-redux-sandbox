import ShoesActions from './shoes.actions';
import { ShoeType } from './shoes.models';
const { FETCH, FIND, CREATE } = ShoesActions.ActionType;

describe('Shoes Actions', () => {
    test('Fetch actions are correctly formatted', () => {
        const fetchAction = { type: FETCH };
        expect(ShoesActions.fetchAll()).toEqual(fetchAction); 
    });

    test('Find actions are correctly formatted', () => {
        const findAction1 = { type: FIND, payload: 1 };
        const findAction2 = { type: FIND, payload: 42 };
        const findAction3 = { type: FIND, payload: 99834509834509 };

        expect(ShoesActions.find(1)).toEqual(findAction1);
        expect(ShoesActions.find(42)).toEqual(findAction2);
        expect(ShoesActions.find(99834509834509)).toEqual(findAction3);
    });

    test('Create actions are correctly formatted', () => {
        const shoe1 = { name: 'Shoe 1', brand: '', type: ShoeType.BASKETBALL };

        expect(ShoesActions.create(shoe1)).toEqual({ type: CREATE, payload: shoe1 });
    });
});