class HeroInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-center">
      <h1 class="hero-title" tabindex="0">
        Simple way to<br />find your<br />
        <img
          src="/images/logo/dahar-logo.png"
          alt="hero logo"
          class="hero-logo"
        />
        restaurant
      </h1>
      <p class="hero-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <button onclick="window.location.href='#popular'" class="hero-btn btn">DISCOVER</button>
    </div>
    `;
  }
}

customElements.define('hero-inner', HeroInner);
