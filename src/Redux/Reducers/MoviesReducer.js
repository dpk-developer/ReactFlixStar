import ActionTypes from '../../Constants/ActionTypes';

const initialState = {
    moviesList: [],
};

const MoviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_MOVIES_SUCCESS: {
            return { ...state, moviesList: payload };
        };

        default: return state;
    };
};

export default MoviesReducer;