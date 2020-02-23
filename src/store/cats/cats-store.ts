import {Action} from '../models';
import {Breed, CatImage} from '../../models/cats';

export const ACTION_TYPES = {
  GET_BREEDS: 'GET_BREEDS',
  SET_BREEDS: 'SET_BREEDS',
  GET_IMAGE: 'GET_IMAGE',
  SET_IMAGE: 'SET_IMAGE',
};

export interface CatsState {
  breeds: Breed[];
  imageData: CatImage;
}

const initialState: CatsState = {
  breeds: [],
  imageData: null
};

export function catsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTION_TYPES.SET_BREEDS: {
      return {...state, breeds: action.payload};
    }
    case ACTION_TYPES.SET_IMAGE: {
      return {...state, imageData: action.payload};
    }
  }

  return state;
}

export function getBreeds(): Action {
  return {
    type: ACTION_TYPES.GET_BREEDS
  };
}

export function getBreedData(breedId: string): Action {
  return {
    type: ACTION_TYPES.GET_IMAGE,
    payload: breedId
  };
}
