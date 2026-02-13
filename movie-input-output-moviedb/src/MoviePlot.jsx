import React from 'react';
    
const MoviePlot = ({movie}) => {
    //console.log(props.movie.Plot);
    //console.log(props.movie);
    if (movie){
        return ( 
            <div className="movieplot">
                <h3>Plot: </h3>
                <div>{movie.overview}</div>
            </div>
         );
    }
    return null;
};

export default MoviePlot;