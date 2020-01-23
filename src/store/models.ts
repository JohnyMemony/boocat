import {CatsState} from './cats/cats-store';
import {LocalState} from './local/local-store';

export interface Action {
  type: string;
  payload?: any;
}

export interface ApplicationState {
  rCats: CatsState;
  rLocalData: LocalState;
}
