import saveFavoriteMovie from "../localStorage/saveFavoriteMovie.js"
import getTmdbData from "../api/getTmdbData.js";
import { API_URL_BASE } from "../api/urlBase.js";

async function handleElementClick(e, triggerSelectors) {
  const tag = e.target.tagName.toLowerCase();
  const dataId = e.target.parentNode.getAttribute('data-id') || e.target.getAttribute('data-id');

  if (triggerSelectors.includes(tag)) {
    if (tag === 'img') {
      location.hash = `movie=${dataId}`;
    } else if (tag === 'button') {
      const movie = await getTmdbData(`${API_URL_BASE}/movie/${dataId}?language=en-US`);
      saveFavoriteMovie(movie);
      e.target.classList.toggle('liked-btn--active');
    } else if (tag === 'h3') {
      location.hash = `category=${dataId}`;
    }
  } else {
    console.error(`Elemento clicado con etiqueta "${tag}" no válido.`);
  }
}

function setupContainerClick({ containerIds , triggerSelectors }) {
  containerIds.forEach(containerId => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.addEventListener('click', (e) => handleElementClick(e, triggerSelectors))
  });
}

export default setupContainerClick;