Feature('Review Restaurants');

Scenario('Add a review for the first restaurant in the list', async ({ I }) => {
  const name = 'Aji Test';
  const review = 'Testing review';

  I.amOnPage('/');
  I.seeElement('.item-link');
  I.click(locate('.item-link').first());

  I.seeElement('#restaurant__review__form');
  I.fillField('#review-name', name);
  I.fillField('#review-review', review);
  I.click('#review-btn');

  I.refreshPage();

  I.see(name, locate('.restaurant__reviews-item h4').last());
  I.see(review, locate('.restaurant__reviews-item p').last());
});
