import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie =>
                    //removed return statement
                    // <Image src={movie.poster} alt={movie.title} thumbnail fluid/>
                    <Card>
                        <Card.Img variant="top" onClick={() => history.push(`/detail/${movie.id}`)} src={movie.poster} alt={movie.title}/>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            {/* <div key={movie.id} >
                                <img onClick={() => history.push(`/detail/${movie.id}`)} src={movie.poster} alt={movie.title} />
                            </div> */}

                        </Card.Body>
                    </Card>
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