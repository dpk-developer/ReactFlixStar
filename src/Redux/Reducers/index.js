import { combineReducers } from 'redux';

import MoviesReducer from './MoviesReducer';

const appReducer = combineReducers({
  moviesReducer: MoviesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;