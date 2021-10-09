import PageInterface from '../interfaces/PageInterface';
import cartComponent from "../components/cartComponent";
import displayHamburgerMenu from '../helpers/hamburger';

export default class CartPage implements PageInterface{

  render (c: HTMLElement): void {

      c.innerHTML = cartComponent();
      
  }

  registerEvents (): void {

      displayHamburgerMenu();

  }

}