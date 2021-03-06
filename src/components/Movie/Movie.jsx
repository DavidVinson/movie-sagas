import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

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
            type: 'RESET_OMDB_SEARCH'
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
            <h1>Movie Search</h1>
            <p>The Search Movie Title is searching on the Open Movie Database.
                    1. Search Movie Title; then select Search.
                    If a movie title is found, the movie will be displayed. The
                    movie is not yet in our Movie Database. 
                    2. Select Genre Dropdown
                    3. Select Save (will add to the database)
                    4. Select Cancel to go back to MovieList Page
                </p>
            <Form inline="true" onSubmit={(event) => saveMovie(event, omdbMovie, genreOption)}>
                
                <Form.Group controlId="title">
                    <Form.Label>Search Movie Title</Form.Label>
                    <Form.Control type="text" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label>Select Genre</Form.Label>
                    <Form.Control as="select" onChange={(event) => setGenreOption(event.target.value)}>
                        {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </Form.Control>
                </Form.Group>
                <Button onClick={() => searchOMDB(searchTitle)}>Search</Button>
                <Button variant="primary" onClick={() => history.push('/')}>Cancel</Button>
                <Button type="submit">Save</Button>
            </Form>

            {/* <form onSubmit={(event) => saveMovie(event, omdbMovie, genreOption)}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)}></input>

            <label htmlFor="genre">Select Genre</label>
            <select id="genre" name="genre" onChange={(event) => setGenreOption(event.target.value)}>
                {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>

            </form> */}



            {omdbMovie ? <div><img src={omdbMovie.Poster}/> <p>{omdbMovie.Genre}</p></div> : <p>Movie: {searchTitle} not found!</p>}
            {/* {omdbMovie ? <p>{JSON.stringify(omdbMovie)}</p> : <p>Movie: {searchTitle} not found!</p>} */}
        </div>

    );
}

export default Movie;

/*
            <DropdownButton id="genre" title="Select Genre">
            {genres.map((genre) =>
                <Dropdown.Item eventkey={genre.id} onSelect={() => setGenreOption(eventKey)}>
                    {genre.name}
                </Dropdown.Item>)}
            </DropdownButton>
            <Button type="submit">Save</Button>


                        <form onSubmit={(event) => saveMovie(event, omdbMovie, genreOption)}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={searchTitle} onChange={(event) => setSearchTitle(event.target.value)}></input>

            <label htmlFor="genre">Select Genre</label>
            <select id="genre" name="genre" onChange={(event) => setGenreOption(event.target.value)}>
                {genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>

            </form>

            <Button onClick={() => searchOMDB(searchTitle)}>Search</Button>
            <Button variant="primary" onClick={() => history.push('/')}>Cancel</Button>

            // {omdbMovie ? <img src={omdbMovie.Poster}/> : <p>Movie: {searchTitle} not found!</p>}
            // {omdbMovie ? <p>{JSON.stringify(omdbMovie)}</p> : <p>Movie: {searchTitle} not found!</p>}
        </div>

    );


*/