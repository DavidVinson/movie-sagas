import movies from './movieReducer.js';
import genres from './genresReducer.js';
import movieDetail from './movieDetailReducer.js';
import genreDetail from './genreDetailReducer.js';
import omdb from './omdbReducer.js';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    movies,
    genres,
    movieDetail,
    genreDetail,
    omdb
})

export default reducers;

