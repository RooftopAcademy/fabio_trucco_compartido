import { cart, catalog } from '../index';
import updateCartAmount from './updateCartAmount';

export default function plusMinusAmountButtons() : void {

  let plusMinusButtons = Array.from(document.getElementsByClassName('button-amount'));

  plusMinusButtons?.forEach((button) => {
    button.addEventListener('click', () => {

      let productId = parseInt((button as HTMLElement).dataset.id);

      if ( button.id == 'plus-button' ) {

        cart.addProduct(catalog.findById(productId));

        document.getElementById(`amount ${productId}`).innerHTML = cart.countProduct(productId).toString();

      } else {

        cart.discountProduct(productId);

        document.getElementById(`amount ${productId}`).innerHTML = cart.countProduct(productId).toString();

      }

      updateCartAmount('cart-amount');  // Updates the cart view in the header

    })

  })

}