import { all, fork } from 'redux-saga/effects';

import watchSearchMovieSaga from './SearchMovieSaga';

const rootSaga = function* () {
    yield all([fork(watchSearchMovieSaga)]);
};

export default rootSaga;