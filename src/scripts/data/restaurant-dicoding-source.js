import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicoding {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(review) {
    if (review.review) {
      if (!review.name) {
        review.name = 'Anonymous';
      }
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      const responseJson = await response.json();
      return responseJson;
    }
    return null;
  }
}

export default RestaurantDicoding;
