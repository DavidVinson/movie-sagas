import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Movie from '../Movie/Movie.jsx';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/movie">
          <Movie />
        </Route>

        <Route path="/details">
          <MovieDetail />
        </Route>
      </Router>
    </div>
  );
}


export default App;
