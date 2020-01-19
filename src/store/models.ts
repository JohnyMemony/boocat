import {CatsState} from './cats/cats-reducer';

export interface ActionType {
  type: string;
  payload: any;
}

export interface ApplicationState {
  cats: CatsState;
}
