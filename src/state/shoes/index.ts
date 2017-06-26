import ShoesActions from './shoes.actions';
import * as ShoesModels from './shoes.models';
import { shoesReducer, IShoesState } from './shoes.reducer';
import shoesSaga from './shoes.saga';

export {
	ShoesActions,
	ShoesModels,
	shoesReducer,
	IShoesState,
	shoesSaga,
}