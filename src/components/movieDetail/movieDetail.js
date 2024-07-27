import Handlebars from "handlebars";
import getTmdbData from "../../api/getTmdbData.js"
import styles from "./movieDetail.module.css";
import { IMG_URL_BASE } from '../../api/urlBase.js'

async function createMovieDetail({ urlApi }) {
  try {
    const section = document.createElement('section');
    const data = await getTmdbData(urlApi);

    const template = Handlebars.compile(`
      <div class="container">
        <img 
          class="{{styles.backdrop}}" 
          {{#if data.backdrop_path}}
            src="${IMG_URL_BASE}/w1280{{data.backdrop_path}}"
          {{/if}}
          src="/404-not-found.webp"
          alt="{{data.title}}"
        />

        <header class="{{styles.movieDetail__header}}">
          <h1 class="{{styles.movieDetail__title}}">{{data.original_title}}</h1>
          <span class="{{styles.movieDetail__vote}}">{{data.vote_average}}</span>
        </header>

        <p class="{{styles.movieDetail__description}}">{{data.overview}}</p>
      </div>
    `);

    section.innerHTML = template({ data, styles });
    return section;
  } catch(err) {
    console.err('Error en movieDetail: ', err.message);
  }
}

export default createMovieDetail;