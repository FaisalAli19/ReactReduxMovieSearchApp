
import { combineReducers } from 'redux';

import movies from './movieReducers';
import selectedMovie from "./selectedMovie";

export default combineReducers({ movies, selectedMovie })