import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
// Reducers
import {catsReducer} from './cats/cats-store';
// Sagas
import {catsSagas} from './cats/cats-sagas';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const composedEnhancers = composeEnhancers(middlewareEnhancer);
const rootReducer = combineReducers({
  cats: catsReducer
});

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(catsSagas);
