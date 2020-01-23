import {put} from 'redux-saga/effects';
import {ACTION_TYPES} from './local-store';

export function* setLocalData(key: string, data: any) {
  yield put({
    type: ACTION_TYPES.SET_LOCAL_DATA,
    payload: {
      key,
      data
    }
  });
}
