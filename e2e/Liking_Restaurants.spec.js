const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('show empty favorite restaurants', ({ I }) => {
  I.seeElement('.favorite__empty');
  I.see('Favorite Restaurant and Cafe is empty', '.favorite__empty');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurant and Cafe is empty', '.favorite__empty');

  I.amOnPage('/');

  I.seeElement('.item-link');

  const firstRestaurant = locate('.item-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.popular-item');
  const likedRestaurantTitle = await I.grabTextFrom('.item-link');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurant and Cafe is empty', '.favorite__empty');
  I.amOnPage('/');

  I.seeElement('.item-link');

  const firstRestaurant = locate('.item-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.popular-item');
  const likedRestaurantTitle = await I.grabTextFrom('.item-link');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Favorite Restaurant and Cafe is empty', '.favorite__empty');
});
