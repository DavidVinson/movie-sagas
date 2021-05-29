import {useParams} from 'react-router-dom';

function MovieDetail() {

    //need button for page navigation

    const {movieId} = useParams();

    return (

        <div>
            <h1>Movie Detail</h1>
            <p>Details page for movie: {movieId}</p>
        </div>
    );
}

export default MovieDetail;