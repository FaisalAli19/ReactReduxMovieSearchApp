import { 
	FETCH_MOVIE_FAIL, FETCH_MOVIE_PENDING, FETCH_MOVIE_SUCCESS,
	FETCH_SELECTED_MOVIE_FAIL, FETCH_SELECTED_MOVIE_PENDING, FETCH_SELECTED_MOVIE_SUCCESS,
	CLEAR_MOVIE_DETAILS
} from '../constants/types';
import axios from "axios";

const apiKey = process.env.REACT_APP_SECRET_CODE;

export const searchMovies = ({ movie }) => async dispatch =>{
	const url = `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${movie}`;
	
	dispatch({ type: CLEAR_MOVIE_DETAILS });
	dispatch({ type: FETCH_MOVIE_PENDING });

	try {
		const response = await axios.get(url);
		dispatch({ type: FETCH_MOVIE_SUCCESS, payload: response.data.Search });
	} catch (e) {
		dispatch({ type: FETCH_MOVIE_FAIL, payload: 'Unable to fetch movies' });
	}
} 

export const selectMovie = (id) => async dispatch =>{
	const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
	
	dispatch({ type: FETCH_SELECTED_MOVIE_PENDING });

	try {
		const response = await axios.get(url);
		console.log(response)
		dispatch({ type: FETCH_SELECTED_MOVIE_SUCCESS, payload: response.data });
	} catch (e) {
		dispatch({ type: FETCH_SELECTED_MOVIE_FAIL, payload: 'Unable to fetch movie' });
	}
} 

export const clearDetails = () => ({ type: CLEAR_MOVIE_DETAILS });

