import ActionTypes from '../../Constants/ActionTypes';

const initialState = {
    totalPages: 0,
    moviesList: {},
    searchMoviesList: {},
};

const MoviesReducer = (state = initialState, { type, payload, totalPages }) => {
    switch (type) {
        case ActionTypes.FETCH_MOVIES_SUCCESS: {
            return { ...state, moviesList: payload, totalPages };
        };

        case ActionTypes.FETCH_SEARCH_MOVIES_SUCCESS: {
            return { ...state, searchMoviesList: payload, totalPages };
        };

        default: return state;
    };
};

export default MoviesReducer;