import { app, cart } from '../index';

export default function discardProductFromCart() : void {

  let discardButton = Array.from(document.getElementsByClassName('discard-button'));

  discardButton?.forEach((button) => {
    button.addEventListener('click', () => {

      let productId = parseInt((button as HTMLElement).dataset.id);

      cart.discardProduct(productId);

      app.render('#/cart');

    })

  })

}