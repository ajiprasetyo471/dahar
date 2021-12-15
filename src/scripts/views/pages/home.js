import '../../component/hero-inner';
import '../../component/booking-inner';
import RestaurantDicoding from '../../data/restaurant-dicoding-source';
import {
  createRestaurantItemTemplate,
  createListRstaurantsNames,
  spinnerTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div id="loading"></div>
      <div id="homeContainer">
        <div id="hero">
          <hero-inner />
        </div>
        <section id="content">
          <article id="popular">
            <h2 class="article-jumbo popular-jumbo">Popular</h2>
            <h3 class="article-title popular-article-title" tabindex="0">
              Popular Restaurant
              <hr class="article-title__line" />
            </h3>
            <div class="popular-center" id="restaurants" ></div>
          </article>
          <article id="booking">
            <booking-inner />
          </article>
        </section>
      </div>
    `;
  },
  async afterRender() {
    const loadingContainer = document.querySelector('#loading');
    const homeContainer = document.querySelector('#homeContainer');
    const restaurantsContainer = document.querySelector('#restaurants');
    loadingContainer.innerHTML = spinnerTemplate();
    homeContainer.style.display = 'none';
    restaurantsContainer.innerHTML = '';

    try {
      const restaurants = await RestaurantDicoding.listRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
      const restaurantSelect = document.querySelector('#restaurant-select');
      restaurants.forEach((restaurant) => {
        restaurantSelect.innerHTML += createListRstaurantsNames(restaurant);
      });
      homeContainer.style.display = 'block';
      loadingContainer.style.display = 'none';
    } catch (error) {
      homeContainer.style.display = 'block';
      loadingContainer.style.display = 'none';
      restaurantsContainer.innerHTML = `<p class="favorite__empty">Error: ${error}, swipe up or reload page to refresh!</>`;
    }
  },
};

export default Home;
