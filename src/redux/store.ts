import { applyMiddleware, combineReducers, createStore } from 'redux';
import { headerDataState } from './headerData';
import { productsDataState } from './productsData';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  headerDataState,  
  productsDataState,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))
sagaMiddleware.run(rootWatcher)
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
