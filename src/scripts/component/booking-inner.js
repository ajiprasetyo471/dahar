class BookingInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <div class="booking-center">
    <h3 class="article-title booking-title" tabindex="0">
      Booking Restaurant
    </h3>
    <form action="">
      <div class="row">
        <div class="col-1">
          <label for="name" class="booking-label">Name</label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="name"
            class="booking-input"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <label for="phone" class="booking-label">Phone</label>
        </div>
        <div class="col-2">
          <input
            type="number"
            id="phone"
            class="booking-input"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <label for="restaurant-select" class="booking-label"
            >Restaurants</label
          >
        </div>
        <div class="col-2">
          <select id="restaurant-select">
            <option value="" selected disabled hidden>Choose here</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <label for="date" class="booking-label">Date</label>
        </div>
        <div class="col-2">
          <input type="date" class="booking-input" id="date" />
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <label for="seats" class="booking-label"
            >Number of seats</label
          >
        </div>
        <div class="col-2">
          <input
            type="number"
            id="seats"
            class="booking-input"
            placeholder="Enter number of seats"
          />
        </div>
      </div>
      <div class="row">
        <button id="booking-btn" class="btn" type="submit">
          BOOKING
        </button>
      </div>
    </form>
  </div>
    `;
  }
}

customElements.define('booking-inner', BookingInner);
