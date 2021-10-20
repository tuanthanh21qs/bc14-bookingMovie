import * as ActionType from './constants';

const defaultState = {
	loading: false,
	data: null,
	error: null
};

const listMovieReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionType.LIST_MOVIE_REQUEST:
			state.loading = true;
			state.data = null;
			state.error = null;
			return { ...state };
		default:
			return { ...state };
	}
};

export default listMovieReducer;
