import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import {catsReducer} from './cats/cats-store';
import {localReducer} from './local/local-store';
// Sagas
import {catsSagas} from './cats/cats-sagas';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['rLocalData']
};
const composedEnhancers = composeEnhancers(middlewareEnhancer);
const persistedReducer = persistReducer(persistConfig, combineReducers({
  rCats: catsReducer,
  rLocalData: localReducer,
}));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(catsSagas);
