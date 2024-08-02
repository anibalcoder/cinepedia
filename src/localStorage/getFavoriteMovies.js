function getFavoriteMovies() {
  const likedMovies = JSON.parse(localStorage.getItem('liked_movies'));

  if (likedMovies) {
    return likedMovies;
  }

  return {};
}

export default getFavoriteMovies;