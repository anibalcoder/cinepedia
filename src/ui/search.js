import createSearch from "../components/search/search.js";
import { API_URL_BASE } from '../api/urlBase.js';

async function searchPage({ app, searchType, searchId }) {
  try {
    const endpoints = {
      search: `${searchType}/movie?query=${searchId}&language=en-US`,
      discover: `${searchType}/movie?with_genres=${searchId}&language=en-US`,
      trending: `${searchType}/movie/day?language=en-US&page=2`
    };

    const endpoint = endpoints[searchType];
    if (!endpoint) throw new Error("Acción no reconocida");
    const searchUrl = `${API_URL_BASE}/${endpoint}`;
    const searchContent = await createSearch(searchUrl);
    app.appendChild(searchContent);
  } catch(err) {
    console.error('Error en searchPage: ', err.message);
  }
}

export default searchPage;