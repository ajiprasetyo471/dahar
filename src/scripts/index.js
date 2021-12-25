import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/style.css';
import '../styles/responsive.css';

import './component/nav-inner';
import './component/footer-inner';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main'),
  link: document.querySelector('.nav-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
