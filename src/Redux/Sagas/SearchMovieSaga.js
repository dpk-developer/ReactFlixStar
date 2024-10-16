import { takeLatest, put } from 'redux-saga/effects';

import { ActionTypes, ApiEndPoints } from '../../Constants';
import { HttpService } from '../../Services';

const httpService = new HttpService();

function* fetchMovies({ type, pageNo }) {
    try {
        const { results } = yield httpService.get(`${ApiEndPoints.MOVIES_URL}page=${pageNo}`);

        if (results?.length) {
            yield put({ type: ActionTypes.APP_LOADER, payload: false });
            yield put({ type: ActionTypes.FETCH_MOVIES_SUCCESS, payload: results });
        }
    } catch (error) {
        console.error(`Catch Error in DasboardSaga with ActionType ${type}`, error);
    };
};

const SearchMovieSaga = function* () {
    yield takeLatest(ActionTypes.FETCH_MOVIES, fetchMovies);
};

export default SearchMovieSaga;