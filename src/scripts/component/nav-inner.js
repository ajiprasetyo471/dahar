class NavInner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="nav-center">
      <div class="nav-logo">
        <img
          src="/images/logo/dahar-logo.png"
          alt="nav logo"
          class="nav-logo-detail"
        />
        <span class="nav-title" tabindex="0">Dahar</span>
      </div>
      <button id="hamburger">☰</button>
      <ul class="nav-list">
        <li class="nav-item"><a href="">HOME</a></li>
        <li class="nav-item"><a href="#">FAVOURITE</a></li>
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/aji-prasetyo-b909aa222/"
            >ABOUT US</a
          >
        </li>
      </ul>
    </div>
    `;
  }
}

customElements.define('nav-inner', NavInner);
