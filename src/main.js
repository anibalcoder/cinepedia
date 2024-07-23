import './styles/global.css';
import './styles/vars.css';
import createHeader from './components/header/header.js';
import createMoviePreview from './components/moviePreview/moviePreview.js';
import createMovieGenres from './components/movieGenres/movieGenres.js';
const API_BASE = import.meta.env.VITE_API_BASE;

const APP = document.getElementById('app');
APP.appendChild(createHeader());

const moviePreview = await createMoviePreview({
  title: 'Tendencias', 
  button: true, 
  urlApi: `${API_BASE}/trending/all/day?language=es-ES`
})
APP.appendChild(moviePreview);

const movieGenres = await createMovieGenres({
  title: 'Categorías',
  urlApi: `${API_BASE}/genre/movie/list?language=es-ES`
})
APP.appendChild(movieGenres);