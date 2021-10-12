import routeParams from '../routeParams';
import { cart, catalog } from '../index';
import updateCartAmount from './updateNumber';

export default function addToCart(docClass: string, cartView?: string ) {

  let docElements: Element[] = Array.from(document.getElementsByClassName(docClass));

  docElements.forEach((el) => {

    el.addEventListener('click', () => {

      let productId = parseInt((el as HTMLElement).dataset.id) | parseInt(routeParams().productId);

      cart.addProduct(catalog.findById(productId));

      if(cartView) {

        updateCartAmount(cartView, cart.getAmount());
    
      }
  
    })

  })
  
}