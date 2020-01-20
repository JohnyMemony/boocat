import {all, takeLatest, put, call} from 'redux-saga/effects';
import {ACTION_TYPES} from './cats-store';
import {CatsApi} from '../../api/cats-api';
import {CommonResponse} from '../../models/api';
import {Breed} from '../../models/cats';

export function* loadBreeds() {
  const response: CommonResponse<Breed[]> = yield call(CatsApi.loadBreeds);

  if (response.success) {
    yield put({type: ACTION_TYPES.SET_BREEDS, payload: response.data});
  }
}

export function* watchBreedsLoad() {
  yield takeLatest(ACTION_TYPES.GET_BREEDS, loadBreeds);
}

export function* catsSagas() {
  yield all([
    watchBreedsLoad()
  ])
}
