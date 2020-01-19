import {all} from 'redux-saga/effects';

function* getCatsList() {
  console.log('HiSaga');
}

export default function* () {
  yield all([
    getCatsList(),
  ])
}
