import { shoesSaga } from './shoes';

function* rootSaga() {
	yield [
		shoesSaga()
	];
}

export default rootSaga;