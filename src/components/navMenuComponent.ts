import { cart } from '../index';

export default function navMenu (): string {

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
  <li>
      <a href="#/cart">
          <div class="cart-link">
              <img class="shopping-cart mh"src="./resources/images/shopping-cart.png" alt="cart"><span class="nav-bar">${cart.getAmount()}</span>
          </div>
      </a>
  </li>
  </ul>
  `;

}
  