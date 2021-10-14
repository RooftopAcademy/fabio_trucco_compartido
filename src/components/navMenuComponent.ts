import { cart } from '../index';

export default function navMenuComponent (): string {

  return `
  <ul class="nav-menu" >
  <li class="nav-item">
      <a href="#/">HOME</a>
  </li>
  <li class="nav-item">
      <a href="#/store">STORE</a>
  </li>
  <li class="nav-item">
      <a href="#/about">ABOUT</a>
  </li>
  <li class="nav-item">
      <a href="#/cart">
          <div class="cart-link">
              <img class="shopping-cart mh"src="/images/shopping-cart.png" alt="cart"><span class="nav-bar">${cart.getAmount()}</span>
          </div>
      </a>
  </li>
  </ul>
  `;

}
  