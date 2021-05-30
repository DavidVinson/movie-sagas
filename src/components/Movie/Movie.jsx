import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Movie() {

    //[]an input field (for the movie title)
    //[]an input field (for the movie poster image URL))
    //[]a textarea (for the movie description)
    //[]a dropdown (for the genres)
    //[]`Cancel` button, which should bring the user to the Home/List Page
    //[]`Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    console.log(search);

    function searchOMDB(search) {
        console.log('search btn fired!');
        dispatch({
            type: 'SEARCH_OMDB_TITLE',
            payload: search
        })
        //clear local state
        setSearch('');
    }

    return (

        <div>
            <h1>Movie Comp</h1>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={search} onChange={(event) => setSearch(event.target.value)}></input>
            <button onClick={() => searchOMDB(search)}>Search</button>

            <button>Cancel</button>
            <button>Save</button>
        </div>

    );
}

export default Movie;