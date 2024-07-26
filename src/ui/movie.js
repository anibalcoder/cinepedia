import createMovieDetail from '../components/movieDetail/movieDetail.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
import createMoviePreview from '../components/moviePreview/moviePreview.js';
import { API_URL_BASE } from '../api/urlBase.js';

async function moviePage({ app, movieId }) {
  try {
    const movieDetail = await createMovieDetail({
      urlApi: `${API_URL_BASE}/movie/${movieId}?language=en-US`
    });

    const movieGenres = await createMovieGenres({
      urlApi: `${API_URL_BASE}/movie/${movieId}?language=en-US`
    });

    const moviePreview = await createMoviePreview({
      title: 'Películas similares',
      urlApi: `${API_URL_BASE}/movie/${movieId}/similar?language=en-US`
    });

    app.append(movieDetail, movieGenres, moviePreview);
  } catch(err) {
    console.error('Error en moviePage: ', err.message);
  }
}

export default moviePage;