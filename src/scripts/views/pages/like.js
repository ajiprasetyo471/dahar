import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
  <article id="favorite">
    <h3 class="article-title" tabindex="0">
      Favorite Restaurant
      <hr class="article-title__line" />
    </h3>
    <div class="popular-center" id="restaurants" ></div>
  </article>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <p class="favorite__empty">Favorite Restaurant and Cafe is empty</p> 
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
