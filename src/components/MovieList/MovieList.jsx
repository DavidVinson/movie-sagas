import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    // function handleClick(movieId) {
    //     dispatch({
    //         type: 'FETCH_MOVIE_DETAIL',
    //         payload: movieId
    //     });

    //     history.push(`/detail/${movieId}`)
    // }


return (
    <main>
        <h1>MovieList</h1>
        <section className="movies">
            {movies.map(movie =>
                //removed return statement
                <div key={movie.id} >
                    <h3>{movie.title}</h3>
                    <img onClick={() => history.push(`/detail/${movie.id}`)} src={movie.poster} alt={movie.title} />
                </div>
            )}
        </section>
    </main>

);
}

export default MovieList;


/*
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => history.push(`/details/:${movie.id}`)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}

*/