import './App.css';
import MovieList from './components/MovieList';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="movie-app">
      <MovieList />
      <br></br>
      <p>Created by: Shawn O'Brien</p>      
    </div>
  );
}

export default App;
