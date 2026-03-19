import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/useMovieContext";
import { useState } from "react";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite, getGenreNames } =
    useMovieContext();
  const favorite = isFavorite(movie.id);
  const genreNames = getGenreNames(movie.genre_ids);
  const [imageError, setImageError] = useState(false);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  const posterSrc = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "/no-image.svg";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={imageError ? "/no-image.svg" : posterSrc}
          alt={movie.title}
          onError={() => setImageError(true)}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span className="release-year">
            {movie.release_date?.split("-")[0]}
          </span>
          {movie.vote_average && (
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
          )}
        </div>
        {genreNames.length > 0 && (
          <div className="genres">
            {genreNames.map((genre) => (
              <span key={genre} className="genre-tag">
                {genre}
              </span>
            ))}
          </div>
        )}
        {movie.overview && <p className="overview">{movie.overview}</p>}
      </div>
    </div>
  );
}

export default MovieCard;
