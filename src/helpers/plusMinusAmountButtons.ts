import { cart, catalog } from '../index';
import updateNumber from './updateNumber';

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

      /**
       * Updates the cart view in the header
       * Shows the total with 2 decimals
       */
      
      updateNumber('cart-amount', cart.getAmount());  

      updateNumber('float-right calc', parseFloat(cart.calculateTotal().toFixed(2)));

    })

  })

}