import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function MovieDetail() {

    //need button for page navigation
    //endpoint for details page: '/api/movie/detail/:id'
    //make fetch call to saga 
    //select info from store
    //display on page

    const dispatch = useDispatch(); //saga will pick up

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
                    <div>
                        {genreDetail.map((genre) => <p>{genre.name}</p>)}
                    </div>
                    <p>Description: {movie.description}</p>
                </div>
            )}
        </main>
    )
};

export default MovieDetail;