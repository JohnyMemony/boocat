import {Action} from '../models';

export const ACTION_TYPES = {
  SET_LOCAL_DATA: 'SET_LOCAL_DATA',
};

export interface CatsState {
  breedsPhotos: any;
}

const initialState: CatsState = {
  breedsPhotos: []
};

export function localReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCAL_DATA: {
      return {...state, [action.payload.key]: action.payload.data};
    }
  }

  return state;
}

export function setLocalData(key: string, data: any) {
  return {
    type: ACTION_TYPES.SET_LOCAL_DATA,
    payload: {
      key,
      data
    }
  }
}

export function setBreedsPhotos(data: any) {
  return setLocalData('breedsPhotos', data);
}
