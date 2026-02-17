import { useState } from 'react';
import MovieImg from './assets/Image/movie_img.png';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';
import MoviePlot from './MoviePlot';
import SearchBar from './SearchBar';
import axios from 'axios';


function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie?query=' + term + '&api_key=81c50c197b83129dd4fc387ca6c8c323')
    setMovies(response.data.results.slice(0, 10));
    setSelectedMovie(null);
  }

  const onSelectedMovieCallBack = (movie) => {
    setSelectedMovie(movie);
  }

  return (
    <>
      <div className="p-4 bg-dark text-white">
        <h1>React Movies <img className="rounded" alt="Movie" src={MovieImg}></img> </h1>
        <span className="d-flex align-items-center justify-content-between p-0">This small App demonstrates the use of theMovieDb API<SearchBar onSearchMovie={onSearchSubmit} /></span>
      </div>

      <div className="row mt-4">
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <MovieList SearchMovies={movies} onSelectedMovie={onSelectedMovieCallBack} />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <MoviePoster movie={selectedMovie} />
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
          <MoviePlot movie={selectedMovie} />
        </div>
        <div className="col-sm-3"></div>
      </div>
    </>
  );

};

export default App;

