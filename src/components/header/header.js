import Handlebars from 'handlebars';
import styles from './header.module.css';

function createHeader() {
  const header = document.createElement('header');

  const template = Handlebars.compile(`
    <div class="{{styles.header__inner}} container">
      <a href="/" class="{{styles.header__logo}}">
        <span>Cinepedia</span>
      </a>
      <form class="{{styles.header__form}}">
        <input type="search" placeholder="Vengadores" class="{{styles.header__inputSearch}}">
        <button type="button" class="{{styles.header__searchButton}}">🔍</button>
      </form>
    </div>
  `);

  header.innerHTML = template({ styles });
  return header
}

export default createHeader;