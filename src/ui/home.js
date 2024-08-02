import createMoviePreview from '../components/moviePreview/moviePreview.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
import createFavoriteList from '../components/moviesFavorite/moviesFavorite.js'
import { setupViewMoreClick, setupContainerClick, removeLoadingClass, lazyLoader } from '../utils/index.js';
import { API_URL_BASE } from '../api/urlBase.js';

function setupHomePageUtils() {
  setupViewMoreClick();
  setupContainerClick({ 
    containerIds: [
      "moviePreviewList",
      "moviesFavorite",
      "movieGenreList"
    ],
    triggerSelectors: [
      'img',
      'button',
      'h3'
    ]
  });
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

    const favoriteList = createFavoriteList({ title: 'Favoritos' });

    app.append(moviePreview, movieGenres, favoriteList);
    setupHomePageUtils();
  } catch(err) {
    console.error('Error en homePage: ', err);
  }
}

export default homePage;