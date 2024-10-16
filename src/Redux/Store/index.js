import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../Sagas';
import rootReducer from '../Reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const enhancer = compose(middleware);

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;