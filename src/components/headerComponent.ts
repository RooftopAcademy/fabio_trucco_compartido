import { cart } from '../index'; 

export default function headerComponent(): string {
  return `
  <header class="main-header">

      <a href="index.html" class="brand-name large">Libra</a>

      <div class="bar">

          <span  class="hamburger" id="hamburger">&#9776;</span><span></span>

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
          </ul>

      </div>

      <nav class="main-header-links">

          <ul>
              <li><a href="#/">HOME</a></li>
              <li><a href="#/store">STORE</a></li>
              <li><a href="#/about">ABOUT</a></li>
              <li>
                  <a href="#/cart">
                      <div class="cart-link">
                          <img class="shopping-cart mh"src="/images/shopping-cart.png" alt="cart"><span class="cart-amount">${cart.getAmount()}</span>
                      </div>
                  </a>
              </li>
          </ul>
          
      </nav> 

  </header>
  `;
}