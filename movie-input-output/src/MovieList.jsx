import React, { Component } from 'react';
import './MovieList.css';
import MOCK_MOVIES from './Shared/MockMovies'



class MovieList extends Component {
  render() {
    console.log(MOCK_MOVIES);

    return (
      
      <div className="MovieList mt-4">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies">
            {MOCK_MOVIES.map(movie => {return <li key={movie.Title}>{movie.Title}{movie.Year}</li>}) }
        </ul>
      </div>
      </div>
    );
  }
}

export default MovieList;