import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Movie() {

    //[x]an input field (for the movie title)
    //[]an input field (for the movie poster image URL))
    //[]a textarea (for the movie description)
    //[]a dropdown (for the genres)
    //[x]`Cancel` button, which should bring the user to the Home/List Page
    //[]`Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchTitle, setSearchTitle] = useState('');
    const [genreOption, setGenreOption] = useState(0);
    console.log(searchTitle);
    console.log('This is the genre dropdown option', genreOption);

    const genres = useSelector(store => store.genres);
    const omdbMovie = useSelector(store => store.omdb);

    useEffect(() => {
        dispatch({
            type: 'RESET_OMB_SEARCH'
        })
    }, [])


    function searchOMDB(searchTitle) {
        console.log('search btn fired!');
        dispatch({
            type: 'SEARCH_OMDB_TITLE',
            payload: searchTitle
        })
        //clear local state
        setSearchTitle('');
    }

    function saveMovie(event, omdbMovie, genreOption) {
        event.preventDefault();
        //make acceptable movieObj for /api/movie POST req 
        const movieObj = {
            title: omdbMovie.Title,
            poster: omdbMovie.Poster,
            description: omdbMovie.Plot,
            genre_id: Number(genreOption) // genre_id needs to be int
        }
        console.log('Movie post to db', movieObj);

        dispatch({ type: 'SAVE_MOVIE', payload: movieObj });
        // setGenreOption(0);
        history.push('/');
        //save movie to db
        //navigate to home (MovieList)
        //new movie added show show in the movielist
    }

    return (

        <div>
            <h1>Movie Search/Add Comp {genreOption}</h1>

            <form onSubmit={(event) => saveMovie(event, omdbMovie, genreOption)}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)}></input>

            <label htmlFor="genre">Select Genre</label>
            <select id="genre" name="genre" onChange={(event) => setGenreOption(event.target.value)}>
                {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>
            <button type="submit">Save</button>

            </form>

            <button onClick={() => searchOMDB(searchTitle)}>Search</button>
            <button onClick={() => history.push('/')}>Cancel</button>

            {/* {omdbMovie ? <img src={omdbMovie.Poster}/> : <p>Movie: {searchTitle} not found!</p>} */}
            {omdbMovie ? <p>{JSON.stringify(omdbMovie)}</p> : <p>Movie: {searchTitle} not found!</p>}
        </div>

    );
}

export default Movie;