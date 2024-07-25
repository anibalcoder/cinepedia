import createHeader from '../components/header/header.js';
import createMoviePreview from '../components/moviePreview/moviePreview.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
const API_BASE = import.meta.env.VITE_API_BASE;

async function homePage(app) {
  try {
    const header = createHeader();

    const moviePreview = await createMoviePreview({
      title: 'Tendencias',
      button: true,
      urlApi: `${API_BASE}/trending/movie/day?language=en-US`
    });

    const movieGenres = await createMovieGenres({
      title: 'Categorías',
      urlApi: `${API_BASE}/genre/movie/list?language=en-US`
    });

    app.append(header, moviePreview, movieGenres);
  } catch(err) {
    console.error('Error al crear la página de inicio: ', err.message);
  }
}

export default homePage;