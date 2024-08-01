import createMovieDetail from '../components/movieDetail/movieDetail.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
import createMoviePreview from '../components/moviePreview/moviePreview.js';
import { setupContainerClick, removeLoadingClass, lazyLoader } from '../utils/index.js';
import { API_URL_BASE } from '../api/urlBase.js';

function setupMoviePageUtils() {
  setupContainerClick({ containerId: 'moviePreviewList', triggerSelector: 'img' });
  setupContainerClick({ containerId: 'movieGenreList', triggerSelector: 'h3' });
  removeLoadingClass();
  lazyLoader();
}

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
    setupMoviePageUtils();
  } catch(err) {
    console.error('Error en moviePage: ', err.message);
  }
}

export default moviePage;