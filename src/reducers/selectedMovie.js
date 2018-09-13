import { 
	FETCH_SELECTED_MOVIE_FAIL, 
	FETCH_SELECTED_MOVIE_PENDING, 
	FETCH_SELECTED_MOVIE_SUCCESS,
	CLEAR_MOVIE_DETAILS
} from '../constants/types';

const initialState = {
	isMovieSelected: false,
	isPending: false,
	selectedMovie: null,
	error: ''
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_SELECTED_MOVIE_PENDING:
			return { ...state, isPending: true, isMovieSelected: true }
		case FETCH_SELECTED_MOVIE_SUCCESS:
			return { ...state, selectedMovie: payload, error: '', isPending: false }
		case FETCH_SELECTED_MOVIE_FAIL:
			return { ...state, error: '', isPending: false }
		case CLEAR_MOVIE_DETAILS:
			return { ...state, selectedMovie: [], isPending: false, isMovieSelected: false}
		default:
			return state
	}
}


