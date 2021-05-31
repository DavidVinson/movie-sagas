import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function MovieDetail() {

    //[x]need button for page navigation
    //[x]endpoint for details page: '/api/movie/detail/:id'
    //[x]make fetch call to saga 
    //[x]select info from store
    //[x]display on page

    const dispatch = useDispatch(); //saga will pick up
    const history = useHistory();

    const { movieId } = useParams(); //movieId from MovieList
    console.log('The selected movie ID', movieId);

    const movieDetail = useSelector(store => store.movieDetail);
    console.log('The selcted movie detail', movieDetail);

    const genreDetail = useSelector(store => store.genreDetail);
    console.log('The selected movie genre(s)', genreDetail);


    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIE_DETAIL',
            payload: movieId
        });
        dispatch({
            type: 'FETCH_GENRE_DETAIL',
            payload: movieId
        })
    }, []);


    return (

        <main>
            {movieDetail.map((movie) =>
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <img src={movie.poster} />
                    {genreDetail.map((genre) => <p key={genre.id}>{genre.name}</p>)}
                    
                    <p>Description: {movie.description}</p>
                    <Button onClick={() => history.push('/')}>Back to Movie List</Button>
                </div>
            )}
        </main>
    )
};

export default MovieDetail;