import Handlebars from "handlebars";
import getFavoriteMovies from "../../localStorage/getFavoriteMovies.js"
import styles from "./moviesFavorite.module.css";
import { IMG_URL_BASE } from "../../api/urlBase.js";

Handlebars.registerHelper('isEmpty', function (obj, option) {
  const render = Object.keys(obj).length === 0 ? option.fn(this) : option.inverse(this);
  return render;
});

function createFavoriteList({ title }) {
  try {
    const section = document.createElement('section');
    const data = getFavoriteMovies();

    const template = Handlebars.compile(`
      <div class="container">
        <h2 class="{{styles.moviesFavorite__title}}">{{title}}</h2>

        {{#isEmpty favorites}}
          <h3>🙁Ups!, no hay coincidencias.</h3>
        {{else}}
          <ul class="{{styles.moviesFavorite__list}}" id="moviesFavorite">
            {{#each favorites}}
              <li class="{{../styles.moviesFavorite__item}}" data-id="{{this.id}}">
                <img
                  class="{{../styles.moviesFavorite__image}} container-loading lazy"
                  {{#if this.poster_path}}
                    data-img="${IMG_URL_BASE}/w300{{this.poster_path}}"
                  {{/if}}
                  data-img="/404-not-found.webp"
                  src=""
                  alt="{{this.title}}"
                />
                <button class="{{../styles.moviesFavorite__btn}}" title="Eliminar">🤍</button>
              </li>
            {{/each}}
          </ul>
        {{/isEmpty}}
      </div>
    `);

    section.innerHTML = template({ title, styles, favorites: data });
    return section;
  } catch(err) {
    console.error('Error al listar películas favoritas:', err.message);
  }
}

export default createFavoriteList;