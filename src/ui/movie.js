import createHeader from '../components/header/header.js';
import createMovieDetail from '../components/movieDetail/movieDetail.js';
import createMovieGenres from '../components/movieGenres/movieGenres.js';
import createMoviePreview from '../components/moviePreview/moviePreview.js';
const API_BASE = import.meta.env.VITE_API_BASE;

async function moviePage(app, movieID) {
  try {
    const header = createHeader();

    const movieDetail = await createMovieDetail(`${API_BASE}/movie/${movieID}?language=en-US`);

    const movieGenres = await createMovieGenres({
      urlApi: `${API_BASE}/movie/${movieID}?language=en-US`
    });

    const moviePreview = await createMoviePreview({
      title: 'Películas similares',
      urlApi: `${API_BASE}/movie/${movieID}/similar?language=en-US&page=1`
    });

    app.append(header, movieDetail, movieGenres, moviePreview);
  } catch(err) {
    console.error('Error al crear la página detalles de peliculas: ', err.message);
  }
}

export default moviePage;