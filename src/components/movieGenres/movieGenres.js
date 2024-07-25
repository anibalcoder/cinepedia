import Handlebars from 'handlebars';
import getTmdbData from '../../api/getTmdbData.js';
import './category.css';
import styles from './movieGenres.module.css';

async function createMovieGenres({ title = false, urlApi }) {
  try {
    const section = document.createElement('section');
    const data = await getTmdbData(urlApi);

    const template = Handlebars.compile(`
      <div class="container">
        {{#if title}}
          <h2 class="{{styles.movieGenre__title}}">{{title}}</h2>
        {{/if}}

        <article class="{{styles.movieGenre__list}}">
          {{#each genres}}
            <div class="{{../styles.movieGenre__item}}">
              <h3 class="{{../styles.movieGenre__category}}" id="category{{this.id}}">{{this.name}}</h3>
            </div>
          {{/each}}
        </article>
      </div>
    `);

    section.innerHTML = template({ title, styles, genres:data.genres });
    return section;
  } catch (err) {
    console.log('Error al crear createMovieGenres:', err.message);
  }
}

export default createMovieGenres;