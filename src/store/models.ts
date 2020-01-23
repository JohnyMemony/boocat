import {CatsState} from './cats/cats-store';

export interface Action {
  type: string;
  payload?: any;
}

export interface ApplicationState {
  rCats: CatsState;
}
