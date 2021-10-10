import PageInterface from '../interfaces/PageInterface';
import cartComponent from "../components/cartComponent";
import displayHamburgerMenu from '../helpers/hamburger';
import cartItemList from '../views/cartItemList';
import purchaseComponent from '../components/purchaseComponent';
import { cart } from '../index';

export default class CartPage implements PageInterface{

  render (c: HTMLElement): void {

      c.innerHTML = cartComponent();

      let cartContainer = document.getElementById('cart-content');

      cartContainer.innerHTML += cartItemList(cart.getProducts());

      if ( cart.getProducts().length != 0 ) {

        let purchaseDiv = document.getElementById('purchase-div');

        purchaseDiv.innerHTML = purchaseComponent();

      }
      
  }

  registerEvents (): void {

      displayHamburgerMenu();

  }

}