import MOCK_MOVIES from './Shared/MockMovies';
import './MovieList.css';

function MovieList({ onSelectedMovie }) {
  const onMovieSelect = (movie) => {
    onSelectedMovie(movie);
  };

  return (
    <div className="MovieList">
      <div className="movie-group">
        <h2>Movie list:</h2>
        <ul className="movies">
          {MOCK_MOVIES.map(movie => { return <li key={movie.Title} onClick={() => onMovieSelect(movie)}>{movie.Title}{movie.Year}</li> })}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;