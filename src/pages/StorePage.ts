import PageInterface from "../interfaces/PageInterface";
import storeComponent from "../components/storeComponent";
import productsList from "../views/productsList";
import { catalog } from "../index";

export default class StorePage implements PageInterface{

    render(c: HTMLElement): void {

        c.innerHTML = storeComponent();

        renderListProducts();

    }

    registerEvents(d : Document): void {

    }

}

function renderListProducts(): void {

    let shopItems = document.getElementsByClassName('shop-items');
  
    Array.from(shopItems).forEach((list) => {
        list.innerHTML += productsList(catalog.all());
      }
    )
};