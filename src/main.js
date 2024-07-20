import './styles/global.css';
import './styles/vars.css';
import createHeader from './components/header/header.js';

const APP = document.getElementById('app');
APP.appendChild(createHeader())