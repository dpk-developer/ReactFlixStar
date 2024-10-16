import { takeLatest, put } from 'redux-saga/effects';

import { ActionTypes, ApiEndPoints } from '../../Constants';
import { HttpService } from '../../Services';

const httpService = new HttpService();

function* fetchMovies({ type, pageNo }) {
    try {
        const { results, total_pages } = yield httpService.get(`${ApiEndPoints.MOVIES_URL}page=${pageNo}`);

        if (results?.length) {
            yield put({ type: ActionTypes.FETCH_MOVIES_SUCCESS, payload: results, totalPages: total_pages });
        }
    } catch (error) {
        console.error(`Catch Error in SearchMovieSaga with ActionType ${type}`, error);
    };
};

function* fetchSearchMovies({ type, query, pageNo }) {
    try {
        const { results, total_pages } = yield httpService.get(`${ApiEndPoints.SEARCH_MOVIES_URL}query=${query}&page=${pageNo}`);

        if (results?.length) {
            yield put({ type: ActionTypes.FETCH_SEARCH_MOVIES_SUCCESS, payload: results, totalPages: total_pages });
        }
    } catch (error) {
        console.error(`Catch Error in SearchMovieSaga with ActionType ${type}`, error);
    };
};

const SearchMovieSaga = function* () {
    yield takeLatest(ActionTypes.FETCH_MOVIES, fetchMovies);
    yield takeLatest(ActionTypes.FETCH_SEARCH_MOVIES, fetchSearchMovies);
};

export default SearchMovieSaga;