import './styles/global.css';
import './styles/vars.css';
import createHeader from './components/header/header.js';
import { homePage, moviePage, searchPage } from './ui/index.js';
import { setupSearchEvent } from './utils/index.js';

const app = document.getElementById('app');
const header = createHeader();
app.appendChild(header);
setupSearchEvent();

async function updateView() {
  try {
    document.querySelectorAll('section').forEach(section => section.remove());

    const currentHash = location.hash;

    if (currentHash.startsWith('#movie=')) {
      const movieId = parseInt(currentHash.slice(7));
      await moviePage({ app, movieId });
    } else if (currentHash.startsWith('#search=')) {
      const movieName = currentHash.slice(8);
      await searchPage({ app, searchType: 'search', searchId: movieName});
    } else if (currentHash.startsWith('#trends')) {
      await searchPage({ app, searchType: 'trending'});
    } else if (currentHash.startsWith('#category=')) {
      const movieGenreId = parseInt(currentHash.slice(10));
      await searchPage({ app, searchType: 'discover', searchId: movieGenreId});
    } else {
      await homePage(app);
    }
  } catch(err) {
    console.error('Error al actualizar la vista:', err.message);
  }
}

window.addEventListener('popstate', updateView);
window.addEventListener('DOMContentLoaded', updateView);