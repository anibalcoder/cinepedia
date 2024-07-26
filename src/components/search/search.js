import Handlebars from "handlebars";
import getTmdbData from "../../api/getTmdbData.js";
import styles from "./search.module.css"
import { IMG_URL_BASE } from "../../api/urlBase.js";

async function createSearch(urlApi) {
  try {
    const section = document.createElement('section');
    const data = await getTmdbData(urlApi);

    const template = Handlebars.compile(`
      <div class="container">
        <ul class="{{styles.search__list}}" id="moviePreviewList">
          {{#each search}}
            <li class="{{../styles.search__item}}" data-id="{{this.id}}">
              <img class="{{../styles.search__itemImg}}" src="${IMG_URL_BASE}/w300{{this.poster_path}}" alt="{{this.title}}" />
              <button class="{{../styles.search__itemBtn}}">🤍</button>
            </li>
          {{/each}}
        </ul>
      </div>
    `);

    section.innerHTML = template({ styles, search: data.results });
    return section;
  } catch(err) {
    console.error('Error en createSearch: ', err.message);
  }
}

export default createSearch;