import createMoviePreview from '../components/moviePreview/moviePreview.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
import { setupViewMoreClick, setupContainerClick, removeLoadingClass, lazyLoader } from '../utils/index.js';
import { API_URL_BASE } from '../api/urlBase.js';

function setupHomePageUtils() {
  setupViewMoreClick();
  setupContainerClick({ containerId: 'moviePreviewList', triggerSelector: 'img' });
  setupContainerClick({ containerId: 'movieGenreList', triggerSelector: 'h3' });
  removeLoadingClass();
  lazyLoader();
}

async function homePage(app) {
  try {
    const moviePreview = await createMoviePreview({
      title: 'Tendencias',
      button: true,
      urlApi: `${API_URL_BASE}/trending/movie/day?language=en-US`
    });

    const movieGenres = await createMovieGenres({
      title: 'Categorías',
      urlApi: `${API_URL_BASE}/genre/movie/list?language=en-US`
    });

    app.append(moviePreview, movieGenres);
    setupHomePageUtils();
  } catch(err) {
    console.error('Error en homePage: ', err.message);
  }
}

export default homePage;