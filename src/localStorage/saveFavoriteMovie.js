import getFavoriteMovies from "./getFavoriteMovies.js";

function saveFavoriteMovie(movie) {
  const likedMovies = getFavoriteMovies();

  if (likedMovies[movie.id]) {
    delete likedMovies[movie.id];
  } else {
    likedMovies[movie.id] = movie;
  }

  localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
}

export default saveFavoriteMovie;