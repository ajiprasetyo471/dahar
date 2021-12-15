import UrlParser from '../../routes/url-parser';
import RestaurantDicoding from '../../data/restaurant-dicoding-source';
import {
  createRestaurantImageTemplate,
  createRestaurantDetailTemplate,
  createSpanCategories,
  createRestaurantOverviewTemplate,
  createRestaurantReviewsTemplate,
  createRestaurantFoodsItemTemplate,
  createRestaurantDrinksItemTemplate,
  spinnerTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="loading"></div>
    <div id="restaurant" class="restaurant">
      <div class="restaurant__top-container">
        <div class="restaurant__image-container"></div>
        <div class="restaurant__detail">
          <div class="restaurant__detail-first"></div>
          <div class="restaurant__detail-categories"></div>
        </div>
      </div>
      <div class="restaurant__info-top">
        <div class="restaurant__overview"></div>
        <div class="restaurant__menu">
          <div class="restaurant__menu-list restaurant__foods">
            <h3 class="restaurant__section-title" tabindex="0">Foods</h3>
            <ul class="restaurant__foods-container">
            </ul>
          </div>
          <div class="restaurant__menu-list restaurant__drinks">
            <h3 class="restaurant__section-title" tabindex="0">Drinks</h3>
            <ul class="restaurant__drinks-container">
            </ul>
          </div>
        </div>
      </div>
      <div class="restaurant__info-bottom">
        <div class="restaurant__reviews">
          <h3 class="restaurant__section-title" tabindex="0">Reviews</h3>
        </div>
        <div class="restaurant__review">
          <h3 class="restaurant__section-title" tabindex="0">Write your review</h3>
          <form action="">
          <div class="review-row row">
            <div class="col-2 col-2-review">
              <span class="review__note">Refresh/reload page to see your review</span>
              </div>
            </div>
            <div class="review-row row">
              <div class="col-1 col-1-review">
                <label for="review-name" class="booking-label">Name</label>
              </div>
              <div class="col-2 col-2-review">
                <input name="name"
                  type="text"
                  id="review-name"
                  class="booking-input"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="review-row row">
              <div class="col-1 col-1-review">
                <label for="review-review" class="booking-label">Review</label>
              </div>
              <div class="col-2 col-2-review">
                <textarea
                  name="review"
                  class="review-textarea"
                  id="review-review"
                  placeholder="Enter your review"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="review-row row">
              <button id="review-btn" class="btn" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const loadingContainer = document.querySelector('#loading');
    const restaurantDetailContainer = document.querySelector('#restaurant');
    const restaurantTopContainer = document.querySelector(
      '.restaurant__top-container'
    );
    loadingContainer.innerHTML = spinnerTemplate();
    restaurantDetailContainer.style.display = 'none';
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDicoding.detailRestaurant(url.id);
      const results = restaurant.restaurant;

      const restaurantImageContainer = document.querySelector(
        '.restaurant__image-container'
      );
      restaurantImageContainer.innerHTML =
        createRestaurantImageTemplate(restaurant);

      const restaurantContainer = document.querySelector(
        '.restaurant__detail-first'
      );
      restaurantContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);

      const detailCategories = document.querySelector(
        '.restaurant__detail-categories'
      );
      results.categories.forEach((category) => {
        detailCategories.innerHTML += createSpanCategories(category);
      });

      const restaurantOverview = document.querySelector(
        '.restaurant__overview'
      );
      restaurantOverview.innerHTML = createRestaurantOverviewTemplate(results);

      const restaurantFoodsContainer = document.querySelector(
        '.restaurant__foods-container'
      );
      results.menus.foods.forEach((food) => {
        restaurantFoodsContainer.innerHTML +=
          createRestaurantFoodsItemTemplate(food);
      });

      const restaurantDrinksContainer = document.querySelector(
        '.restaurant__drinks-container'
      );
      results.menus.drinks.forEach((drink) => {
        restaurantDrinksContainer.innerHTML +=
          createRestaurantDrinksItemTemplate(drink);
      });

      const restaurantReviewsContainer = document.querySelector(
        '.restaurant__reviews'
      );
      results.customerReviews.forEach((review) => {
        restaurantReviewsContainer.innerHTML +=
          createRestaurantReviewsTemplate(review);
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: results.id,
          name: results.name,
          city: results.city,
          rating: results.rating,
          address: results.address,
          pictureId: results.pictureId,
          description: results.description,
        },
      });

      const reviewButton = document.querySelector('#review-btn');
      reviewButton.addEventListener('click', () => {
        const name = document.querySelector('#review-name').value;
        const review = document.querySelector('#review-review').value;

        RestaurantDicoding.addReview({
          id: results.id,
          name,
          review,
        });
      });

      restaurantDetailContainer.style.display = 'block';
      loadingContainer.style.display = 'none';
    } catch (error) {
      restaurantDetailContainer.style.display = 'block';
      restaurantTopContainer.innerHTML = `<p class="favorite__empty">Error: ${error}, swipe up or reload page to refresh!</p>`;
      loadingContainer.style.display = 'none';
    }
  },
};

export default Detail;
