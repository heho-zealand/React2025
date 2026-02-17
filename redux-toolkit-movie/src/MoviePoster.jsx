
function MoviePoster({ movie }) {
    const posterAssetsUrl = "src/assets/Image/";

    if (movie) {
        return (
            <div className="movieposter">
                <h3>Poster: </h3>
                <div> <img className="poster" alt="Poster" src={`${posterAssetsUrl}${movie.Poster}`}></img> </div>
            </div>
        );
    }
    return null;
};

export default MoviePoster;