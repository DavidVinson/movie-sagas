import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Movie() {

    //[]an input field (for the movie title)
    //[]an input field (for the movie poster image URL))
    //[]a textarea (for the movie description)
    //[]a dropdown (for the genres)
    //[]`Cancel` button, which should bring the user to the Home/List Page
    //[]`Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchTitle, setSearchTitle] = useState('');
    console.log(searchTitle);

    const omdbMovie = useSelector(store => store.omdb);


    function searchOMDB(searchTitle) {
        console.log('search btn fired!');
        dispatch({
            type: 'SEARCH_OMDB_TITLE',
            payload: searchTitle
        })
        //clear local state
        setSearchTitle('');
    }

    function saveMovie() {
        //save movie to db
        //navigate to home (MovieList)
        //new movie added show show in the movielist
    }

    return (

        <div>
            <h1>Movie Comp</h1>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)}></input>
            <button onClick={() => searchOMDB(searchTitle)}>Search</button>

            <button onClick={() => history.push('/')}>Cancel</button>
            <button>Save</button>
            {/* {omdbMovie ? <img src={omdbMovie.Poster}/> : <p>Movie: {searchTitle} not found!</p>} */}
            {omdbMovie ? <p>{JSON.stringify(omdbMovie)}</p>: <p>Movie: {searchTitle} not found!</p>}
        </div>

    );
}

export default Movie;