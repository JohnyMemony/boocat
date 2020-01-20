import {Action} from '../models';
import {Breed} from '../../models/cats';

export const ACTION_TYPES = {
  GET_BREEDS: 'GET_BREEDS',
  SET_BREEDS: 'SET_BREEDS',
};

export interface CatsState {
  breeds: Breed[];
}

const initialState: CatsState = {
  breeds: []
};

export function catsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTION_TYPES.SET_BREEDS: {
      return {...state, breeds: action.payload};
    }
  }

  return state;
}

export function getBreeds(): Action {
  return {
    type: ACTION_TYPES.GET_BREEDS
  };
}
