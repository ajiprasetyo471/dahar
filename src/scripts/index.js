import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/js/all.js';
import '../styles/main.css';
import '../styles/responsive.css';

import './component/nav-inner.js';
import './component/hero-inner.js';
import './component/booking-inner.js';
import './component/footer-inner.js';

import Data from './data/DATA.json';

const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav-list');
const hero = document.querySelector('#hero');
const main = document.querySelector('#main');
const popularCenter = document.querySelector('.popular-center');
const restaurantSelect = document.querySelector('#restaurant-select');

hamburger.addEventListener('click', (event) => {
  navList.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  navList.classList.remove('open');
});

main.addEventListener('click', () => {
  navList.classList.remove('open');
});

const renderData = (data) => {
  let render = '';

  data.restaurants.forEach((restaurant) => {
    render += `
    <div class="popular-item">
      <div class="popular-img-cont">
        <img
          src="${restaurant.pictureId}"
          alt="${restaurant.name}"
          class="popular-img"
        />
      </div>
      <h4 class="popular-title" tabindex="0">${restaurant.name}</h4>
      <div class="popular-loc-rating">
        <span class="popular-loc"
          ><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</span
        >
        <span class="popular-rating"
          ><i class="far fa-star"></i> ${restaurant.rating}</span
        >
      </div>
      <p class="popular-desc">${restaurant.description.slice(0, 150)}...</p>
    </div>
    `;
  });
  popularCenter.innerHTML = render;
};
renderData(Data);

const renderSelect = (data) => {
  let option = '';

  data.restaurants.forEach((restaurant) => {
    option += `
    <option value='${restaurant.id}'>${restaurant.name}</option>
    `;
  });
  restaurantSelect.innerHTML = option;
};
renderSelect(Data);
