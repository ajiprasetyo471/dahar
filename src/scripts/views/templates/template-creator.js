import CONFIG from '../../globals/config';

const createRestaurantImageTemplate = (restaurant) => `
  <img
      src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.restaurant.pictureId}"
      alt="gambar ${restaurant.restaurant.name}"
      class="restaurant__image" tabindex="0"
    />
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title" tabindex="0">${restaurant.restaurant.name}</h2>
  <div class="restaurant__detail-container">
    <div class="restaurant__detail-rating">
      <span class="restaurant__rating" tabindex="0"><i class="far fa-star"></i> ${restaurant.restaurant.rating}</span>
    </div>
    <div class="restaurant__detail-place">
      <span tabindex="0"><i class="fas fa-map-marker-alt"></i> ${restaurant.restaurant.city}</span>
      <p tabindex="0">${restaurant.restaurant.address}</p>
    </div>
  </div>
`;

const createListRstaurantsNames = (restaurants) => `
<option value='${restaurants.id}'>${restaurants.name}</option>
`;

const createSpanCategories = (category) => `
  <span tabindex="0">${category.name}</span>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i> <span> Add to Favorite</span>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like liked"><i class="fa fa-heart" aria-hidden="true"></i> <span> Remove Favorite</span></button>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="popular-item">
    <div class="item-link" onclick="location.href='${`/#/detail/${restaurant.id}`}';  window.scrollTo(0,0);" style="cursor: pointer;">
      <div class="popular-img-cont">
        <picture>
          <source media="(max-width: 576px)" data-srcset="${
            CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
          }"
          alt="gambar ${restaurant.name}"
          class="popular-img lazyload"
          />
          <img
          data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
          alt="gambar ${restaurant.name}"
          class="popular-img lazyload"
          />
        </picture>
      </div>
      <h4 class="popular-title">${restaurant.name}</h4>
    </div>
    <div class="popular-loc-rating">
      <span class="popular-loc"
        ><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</span
      >
      <span class="popular-rating"
        ><i class="far fa-star"></i> ${restaurant.rating}</span
      >
    </div>
    <p class="popular-desc">${restaurant.description}</p>
  </div>
`;

const createRestaurantOverviewTemplate = (restaurant) => `
<h3 class="restaurant__section-title" tabindex="0">Description</h3>
<p class="restaurant__description" tabindex="0">${restaurant.description}</p>
`;

const createRestaurantFoodsItemTemplate = (foods) => `
    <li tabindex="0">${foods.name}</li>
    `;

const createRestaurantDrinksItemTemplate = (drinks) => `
    <li tabindex="0">${drinks.name}</li>
    `;

const createRestaurantReviewsTemplate = (review) => `
<div class="restaurant__reviews-item">
  <h4 tabindex="0">${review.name}</h4>
  <span tabindex="0">${review.date}</span>
  <p tabindex="0">${review.review}</p>
</div>
`;

const spinnerTemplate = () => `
<div class="spinner-container">
  <span class="spinner-motion black" role="status"></span>
  <span class="spinner-motion red" role="status"></span>
  <span class="spinner-motion grey" role="status"></span>
</div>
`;

export {
  createRestaurantImageTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createSpanCategories,
  createRestaurantOverviewTemplate,
  createRestaurantFoodsItemTemplate,
  createRestaurantDrinksItemTemplate,
  createRestaurantReviewsTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createListRstaurantsNames,
  spinnerTemplate,
};
