import './styles/global.css';
import './styles/vars.css';
import homePage from "./ui/home.js";
import moviePage from './ui/movie.js';
import setupClickHandler from './utils/setupClickHandler.js';

const app = document.getElementById('app');

async function updateView() {
  try {
    app.innerHTML = '';

    if (location.hash.startsWith('#movie=')) {
      const movieID = parseInt(location.hash.slice(7));
      await moviePage(app, movieID);
    } else {
      await homePage(app);
    }

    setupClickHandler({
      containerId: 'movieList',
      triggerSelector: 'img'
    });
  } catch(err) {
    console.error('Error al actualizar la vista:', err.message);
  }
}

window.addEventListener('popstate', updateView);
window.addEventListener('load', updateView);