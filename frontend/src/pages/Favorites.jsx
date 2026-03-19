import "../css/Favorites.css";
import { useMovieContext } from "../contexts/useMovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>Your favorites list is empty</h2>
      <p>
        Start adding movies to your favorites list by clicking the heart icon on
        any movie.
      </p>
    </div>
  );
}

export default Favorites;
