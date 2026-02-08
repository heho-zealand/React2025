import React from 'react';

const MoviePlot = ({movie}) => {
    //console.log(movie.Plot);
    //console.log(movie);
    if (movie){
        return ( 
            <div className="movieplot">
                <h3>Plot: </h3>
                <div>{movie.Plot}</div>
            </div>
         );
    }
    return null;
};

export default MoviePlot;