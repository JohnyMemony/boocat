import {Action} from '../models';
import {CatImage} from '../../models/cats';

export const ACTION_TYPES = {
  SET_LOCAL_DATA: 'SET_LOCAL_DATA',
};

export const FIELDS_NAMES = {
  BREEDS_PHOTOS: 'breedsPhotos'
};

export interface LocalState {
  breedsPhotos: CatImage[];
}

const initialState: LocalState = {
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
