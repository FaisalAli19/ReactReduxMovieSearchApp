import { FETCH_MOVIE_SUCCESS, FETCH_MOVIE_PENDING, FETCH_MOVIE_FAIL } from '../constants/types';

const initialState = {
	isPending: false,
	movies: [],
	error: ''
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
    case FETCH_MOVIE_SUCCESS:
      return { ...state, movies: payload, isPending: false, error: '' };
    case FETCH_MOVIE_PENDING:
			return { ...state, isPending: true }
		case FETCH_MOVIE_FAIL:
			return { ...state, error: payload }
    default:
      return state;
  }
}
