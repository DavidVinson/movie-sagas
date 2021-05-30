import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAIL', fetchMovieDetail);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_GENRE_DETAIL', fetchGenreDetail);
    yield takeEvery('SEARCH_OMDB_TITLE', searchOMDB);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchMovieDetail(action) {
    //get movie details from the DB
    try {
        const movieDetail = yield axios.get(`/api/movie/detail/${action.payload}`);
        console.log('get movie detail: ', movieDetail.data);
        yield put({type: 'SET_MOVIE_DETAIL', payload: movieDetail.data});
    }
    catch {
        console.log('get movie detail error');
    }
}

function* fetchAllGenres() {
    //get all genres
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}

function* fetchGenreDetail(action) {
    //get the genre detail based on movieId
    try {
        const genreDetail = yield axios.get(`/api/genre/detail/${action.payload}`);
        console.log('get genre detail: ', genreDetail.data);
        yield put({type: 'SET_GENRE_DETAIL', payload: genreDetail.data})
    }
    catch {
        console.log('get genre detail error');
    }
}

function* searchOMDB(action) {
    //makes call to server api/omdb to get title search
    try {
        const omdbResult = yield axios.get(`/api/omdb/${action.payload}`);
        console.log('get omdb title search: ', omdbResult.data);
        yield put({type: 'SET_OMDB_SEARCH', payload: omdbResult.data});
    }
    catch {
        console.log('get omdb search error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//REDUX STORE
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;

        default:
            return state;
    }
}

//store movie detail page information
const movieDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

//store genre info based on selected movie for movie detail page
const genreDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}


// Used to store all the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const omdb = (state = [], action) => {
    switch (action.type) {
        case 'SET_OMDB_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetail,
        genreDetail,
        omdb
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
