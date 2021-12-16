class FooterInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer-center">
      <div class="footer-content">
        <div class="footer-item">
          <h3 class="footer-title article-title">
            Need help
            <img
              src="/images/logo/dahar-logo.png"
              alt=""
              class="footer-logo"
            /><br />
            with anything?
          </h3>
          <p class="footer-desc">
            Let's hear about it! <a href="">Contact Us</a>
          </p>
        </div>
        <div class="footer-item footer-item-link">
          <h4 class="footer-title-2">Our Menu</h4>
          <div class="footer-item-list-1">
            <a href="#/list" class="footer-link-1" onclick="window.scrollTo(0,0);">Home</a>
            <a href="#/like" class="footer-link-1" onclick="window.scrollTo(0,0);">Favourite</a>
            <a href="https://www.linkedin.com/in/aji-prasetyo-b909aa222/" class="footer-link-1">About Us</a>
          </div>
        </div>
        <div class="footer-item footer-item-link">
          <h4 class="footer-title-2">Follow Us</h4>
          <div class="footer-item-list-2">
            <div class="footer-link-2" tabindex="0" aria-label="instagram">
              <i class="fab fa-instagram footer-link-logo"></i>
            </div>
            <div class="footer-link-2" tabindex="0" aria-label="github">
              <i class="fab fa-github footer-link-logo"></i>
            </div>
            <div class="footer-link-2" tabindex="0" aria-label="linkedin">
              <i class="fab fa-linkedin footer-link-logo"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="footer-copy">&copy;2021 Copyright Dahar.co</p>
    </div>
    `;
  }
}

customElements.define('footer-inner', FooterInner);
