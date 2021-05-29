import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';


function MovieDetail() {

    //need button for page navigation
    //endpoint for details page: '/api/movie/detail/:id'
    //make fetch call to saga 
    //select info from store
    //display on page

    const {movieId} = useParams(); //movieId from MovieList
    console.log('The selected movie ID', movieId);
    const dispatch = useDispatch(); //saga will pick up
    const movieDetail = useSelector(store => store.movie);
    console.log(movieDetail);

    useEffect(() => {
        dispatch({
             type: 'FETCH_MOVIE_DETAIL',
            payload: movieId });
    }, []);


    return (

        <div>
            <h1>Movie Detail</h1>
            <p>Details page for movie: {movieId}</p>
            {/* <p>{movieDetail.poster}</p>
            <p>{movieDetail.title}</p>
            <p>{movieDetail.name}</p>  */}
        </div>
    );
}

export default MovieDetail;

/*
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => 
                //removed return statement
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => history.push(`/detail/${movie.id}`)} src={movie.poster} alt={movie.title}/>
                        </div>
                )}
            </section>
        </main>

*/