import { cart } from '../index';

export default function purchaseComponent() : string {

  let total = cart.calculateTotal().toFixed(2);

  return `
  <div class="row">
      <span class="float-left">Subtotal: </span>
      <span class="float-right calc" id="subtotal">${total}</span>
  </div>
  <div class="row">
      <span class="float-left">Taxes: </span>
      <span class="float-right">00.00</span>
  </div>
  <div class="row">
      <span class="float-left">Shipping cost: </span>
      <span class="float-right">00.00</span>
  </div>
  <hr class="hr">
  <div class="row">
      <span class="float-left">Total: </span>
      <span class="float-right calc" id="total">${total}</span>
  </div>

  <div class="container-space-around">
      <span class="float-left">How to pay: </span>
      <select class="payment-method" name="payment-method" required>
          <option value="credit">Credit card</option>
          <option value="debit" >Debit card</option>
          <option value="crypto">Crypto</option>
      </select>
  </div>

  <div class="container-space-around">
      <button class="buy-button-now" id ="buy-button">Buy Now</button>
  </div>
  `;

}