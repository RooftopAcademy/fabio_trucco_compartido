import PageInterface from "../interfaces/PageInterface";
import storeComponent from "../components/storeComponent";
import productsList from "../views/productsList";
import displayHamburgerMenu from '../helpers/hamburger';
import backToTop from '../helpers/backToTop';
import showAsideMenu from '../helpers/showAsideMenu';
import { catalog } from "../index";

export default class StorePage implements PageInterface {

    render(c: HTMLElement): void {

        c.innerHTML = storeComponent();

        renderListProducts('shop-items');

    }

    registerEvents(): void {

        showAsideMenu();

        displayHamburgerMenu();

        backToTop();

        seeProductDetails();

    }

}

function renderListProducts(docElementId: string): void {

    let docElement = document.getElementsByClassName(docElementId);
  
    Array.from(docElement).forEach((list) => {
        list.innerHTML += productsList(catalog.all());
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
  
  
//   function renderDetail(): void {
  
//     if (window.location.href == "http://127.0.0.1:5500/details.html") {
//       let productId: number = Number(localStorage.getItem('id'));
    
//       let product = catalog.findById(productId); 
    
//       let content = document.getElementsByClassName("content details")[0];
//       content.innerHTML = productDetails(product);
//     }
//   }