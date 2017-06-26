import { put, takeLatest } from 'redux-saga/effects'
import ShoesActions from './shoes.actions';
import { IShoe } from './shoes.models';
const { FETCH } = ShoesActions.ActionType;
const shoesMocks = require('./shoes.collection.mock.json') as IShoe[];

const spoofHelp = async (timeToWait: number = 10000): Promise<{}> => 
	new Promise(res => setTimeout(() => res(), timeToWait));

/**
 * Fired every time SHOES/FETCH is dispatched
 */

function* fetchAllShoes(action: ShoesActions.ShoeAction) {
	try {
		yield spoofHelp(3000); // wait 3 seconds
		yield put(ShoesActions.load(shoesMocks));
	} catch (e) {
		yield put(ShoesActions.error((e as Error).message));
	}
}

/**
 * takeLatest does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 * dispatched while a fetch is already pending, that pending fetch is cancelled
 * and only the latest one will be run.
 */

function* shoesSaga() {
  yield [
	  takeLatest(FETCH, fetchAllShoes)
  ];
}

export default shoesSaga;