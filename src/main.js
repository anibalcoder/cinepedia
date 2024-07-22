import './styles/global.css';
import './styles/vars.css';
import createHeader from './components/header/header.js';
import createMoviePreview from './components/moviePreview/moviePreview.js';

const APP = document.getElementById('app');
APP.appendChild(createHeader());

const API_BASE = import.meta.env.VITE_API_BASE;
const moviePreview = await createMoviePreview({
  title: 'Tendencias', 
  button: true, 
  urlApi: `${API_BASE}/trending/all/day?language=es-ES`
})
APP.appendChild(moviePreview);