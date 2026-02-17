
function MoviePoster({ movie }) {
    const posterAssetsUrl = "src/assets/Image/";

    if (movie) {
        //console.log('https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path);
        return (
            <div className="movieposter">
                <h3>Poster: </h3>
                <div>
                    <img className="img-responsive img-rounded" src={'https://image.tmdb.org/t/p/w185' + movie.poster_path}></img>
                </div>
            </div>
        );
    }
    return null;
};

export default MoviePoster;