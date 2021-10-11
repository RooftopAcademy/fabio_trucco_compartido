import PageInterface from '../interfaces/PageInterface';
import cartComponent from "../components/cartComponent";
import displayHamburgerMenu from '../helpers/hamburger';
import cartItemList from '../views/cartItemList';
import purchaseComponent from '../components/purchaseComponent';
import discardProductFromCart from '../helpers/discardProductFromCart';
import plusMinusAmountButtons from '../helpers/plusMinusAmountButtons';
import { cart } from '../index';

export default class CartPage implements PageInterface{

  render (c: HTMLElement): void {

      c.innerHTML = cartComponent();

      let cartContainer = document.getElementById('cart-content');

      cartContainer.innerHTML += cartItemList(cart.getProducts());

      let purchaseDiv = document.getElementById('purchase-div');

      if ( cart.getProducts().length != 0 ) {

        purchaseDiv.innerHTML = purchaseComponent();

      } else {

        purchaseDiv.className = 'd-none';

      }

  }

  registerEvents (): void {

    displayHamburgerMenu();

    discardProductFromCart();

    plusMinusAmountButtons();

  }

}