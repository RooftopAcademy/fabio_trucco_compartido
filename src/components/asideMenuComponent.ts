export default function asideMenuComponent(): string {
  return `
  <div class="aside-menu" id="aside-menu">
      <nav class="main-header-links aside">
          <ul>
              <li><a href="#/">HOME</a></li>
              <li><a href="#/store">STORE</a></li>
              <li><a href="#/about">ABOUT</a></li>
              <li><a href="#">
                  <div class="cart-link">
                      <img class="shopping-cart"src="/images/shopping-cart.png" alt="cart"><span class="cart-number">0</span>
                  </div>
              </a></li>
          </ul>
      </nav>
  </div>
  `;
}