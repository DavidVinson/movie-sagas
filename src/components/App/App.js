import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Movie from '../Movie/Movie.jsx';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';

function App() {
  return (
    <div className="App">
      <h1>Tinseltown, La-La Land!</h1>

      <Router>  
        <NavLink to='/movie'>Add New Movie</NavLink>    

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/movie">
          <Movie />
        </Route>

        <Route path="/detail/:movieId">
          <MovieDetail />
        </Route>
      </Router>
    </div>
  );
}


export default App;