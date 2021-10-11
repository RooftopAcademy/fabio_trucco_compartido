import Product from "../entities/Product";
import { cart } from '../index';

export default function cartItemComponent(product: Product) : string {

  let amount = cart.countProduct(product.getId());

  return `
  <div class="cart-item">
      <span class="cart-item-data"><img class="cart-image" src="${product.getImage()}" alt="chess-set" width="60px" height="60px"></span>
      <span class="cart-item-data">${product.getName()}</span>
      <span class="cart-item-data">$${product.getPrice()}</span>
      <div class="cart-item-data">
          <button class="button-amount" id="plus-button" data-id="${product.getId()}">+</button>
          <span class="amount" id="amount ${product.getId()}">${amount}</span>
          <button class="button-amount" id="minus-button" data-id="${product.getId()}">-</button>
      </div>
      <span class="cart-item-data">
          <button class="discard-button" data-id="${product.getId()}" type="button">Discard</button>
      </span>
  </div>
  `;

}