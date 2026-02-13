import { useState } from 'react';
import './MovieList.css';
//import MOCK_MOVIES from './Shared/MockMovies'



function MovieList({SearchMovies, onSelectedMovie}) {
  const onMovieSelect = (movie) => {onSelectedMovie(movie);}
  if (SearchMovies){
    console.log(SearchMovies);
    return (   
           <div className="MovieList">
             <div className="movie-group">
               <h2>Movie list:</h2>
               <ul className="movies">
               { SearchMovies.map(movie => { 
                 if(movie.overview != null && movie.poster_path != null){
                   return  (<li key={movie.id} className="pl-2 pr-2 pb-2 mt-2 mb-2 d-flex justify-content-between" onClick={() => onMovieSelect(movie)}>
                                 <div>{(movie.title).slice(0,25) + "..." }</div><div> {(movie.release_date).slice(0,4)}</div> 
                           </li>) 
                 }
                   })
                 
               }           
             </ul>        
           </div>
           </div> 
     );
   }
   return null
}

export default MovieList;