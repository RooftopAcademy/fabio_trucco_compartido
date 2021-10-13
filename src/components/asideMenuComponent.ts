import { cart } from '../index';

export default function asideMenuComponent(): string {
  return `
  <div class="aside-menu" id="aside-menu">
      <nav class="main-header-links aside">
          <ul>
              <li><a href="#/">HOME</a></li>
              <li><a href="#/store">STORE</a></li>
              <li><a href="#/about">ABOUT</a></li>
              <li><a href="#/cart">
                  <div class="cart-link">
                      <img class="shopping-cart"src="../public/images/shopping-cart.png" alt="cart"><span class="cart-amount">${cart.getAmount()}</span>
                  </div>
              </a></li>
          </ul>
      </nav>
  </div>
  `;
}