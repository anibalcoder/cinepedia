import Handlebars from "handlebars";
import getTmdbData from "../../api/getTmdbData.js";
import styles from './moviePreview.module.css';

async function createMoviePreview({ title, button=false, urlApi }) {
  try {
    const section = document.createElement('section');
    const data = await getTmdbData(urlApi);

    const moviePreview = `
    <div class="container">
      <header class="{{styles.moviePreview__header}}">
        <h2 class="{{styles.moviePreview__title}}">{{title}}</h2>
        {{#if button}}
          <button class="{{styles.moviePreview__viewMore}}">Ver más</button>
        {{/if}}
      </header>
      <ul class="{{styles.moviePreview__list}}">
        {{#each movies}}
          <li class="{{../styles.moviePreview__item}}">
            <img class="{{../styles.moviePreview__image}}" src="https://image.tmdb.org/t/p/w300{{this.poster_path}}" alt="{{this.title}}" />
            <button class="{{../styles.moviePreview__btn}}">🤍</button>
          </li>
        {{/each}}
      </ul>
    </div>
    `;

    const template = Handlebars.compile(moviePreview);
    const html = template({
      title,
      button,
      styles,
      movies: data.results
    })

    section.innerHTML = html;
    return section;
  } catch(err) {
    console.error(err);
  }
}

export default createMoviePreview;