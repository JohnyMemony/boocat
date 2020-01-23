import {all, takeLatest, put, call, select} from 'redux-saga/effects';
import {ACTION_TYPES} from './cats-store';
import {CatsApi} from '../../api/cats-api';
import {CommonResponse} from '../../models/api';
import {Breed, CatImage} from '../../models/cats';
import {ApplicationState} from '../models';
import {setLocalData} from '../local/local-sagas';
import {FIELDS_NAMES} from '../local/local-store';

export function* loadBreedsPhotos(breeds: Breed[]) {
  const state: ApplicationState = yield select();
  const breedsPhotos = state.rLocalData.breedsPhotos;

  if (!breedsPhotos.length) {
    const breedsPhotosRequests = breeds.map((breed) => call(CatsApi.getImagesByBreedId, breed.id));
    const photoResponses: CommonResponse<CatImage[]>[] = yield all(breedsPhotosRequests);

    const loadedBreedsPhotos: CatImage[] = photoResponses.map((photoResponse) => {
      return photoResponse.data[0];
    });

    yield call(setLocalData, FIELDS_NAMES.BREEDS_PHOTOS, loadedBreedsPhotos);
  }
}

export function* loadBreeds() {
  const breedsResponse: CommonResponse<Breed[]> = yield call(CatsApi.loadBreeds);

  if (breedsResponse.success) {
    yield put({type: ACTION_TYPES.SET_BREEDS, payload: breedsResponse.data});
  }

  yield call(loadBreedsPhotos, breedsResponse.data);
}

export function* watchBreedsLoad() {
  yield takeLatest(ACTION_TYPES.GET_BREEDS, loadBreeds);
}

export function* catsSagas() {
  yield all([
    watchBreedsLoad()
  ])
}
