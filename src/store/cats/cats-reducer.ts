import {ActionType} from '../models';

export const ACTION_TYPES = {
  TEST: 'TEST'
};

export interface CatsState {
  catsList: string[];
}

const initialState: CatsState = {
  catsList: []
};

export function catsReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ACTION_TYPES.TEST: {
      return state
    }
  }

  return state;
}
