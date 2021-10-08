import PageInterface from "../interfaces/PageInterface";
import Product from "../entities/Product";
import storeComponent from "../components/storeComponent";
import productsList from "../views/productsList";
import displayHamburgerMenu from '../helpers/hamburger';
import backToTop from '../helpers/backToTop';
import showAsideMenu from '../helpers/showAsideMenu';
import { catalog } from "../index";

export default class StorePage implements PageInterface {

    render(c: HTMLElement): void {

        c.innerHTML = storeComponent();

        renderListProducts('shop-items', catalog.all());

    }

    registerEvents(): void {

        showAsideMenu();

        displayHamburgerMenu();

        backToTop();

        seeProductDetails();

    }

}

function renderListProducts(docElementId: string, products: Product[]): void {

    let docElement = document.getElementsByClassName(docElementId);
  
    Array.from(docElement).forEach((list) => {
        list.innerHTML += productsList(products);
      }
    )
};

function seeProductDetails(): void {

    let detail: HTMLCollection = document.getElementsByClassName("shop-item-img");
  
    Array.from(detail)?.forEach((el) => {
      el.addEventListener("click", function(){
        
        let productId: string = this.id.slice(-1);
  
        window.location.href = `#/details/${productId}`;

      })
    })
  }
  