import PageInterface from "../interfaces/PageInterface";
import routeParams from "../routeParams";
import { store, catalog } from '../index';
import productDetails from '../views/productDetails';
import productDetailsComponent from "../components/productDetailsComponent";
import CommentInterface from '../interfaces/CommentInterface';
import selectComments from '../helpers/selectComments';
import commentsList from '../views/commentsList';
import displayHamburgerMenu from '../helpers/hamburger';
import backToTop from '../helpers/backToTop';
import showAsideMenu from '../helpers/showAsideMenu';


export default class ProductDetailsPage implements PageInterface {

    render(c: HTMLElement): void {

        c.innerHTML = productDetailsComponent();

       renderDetail();

       renderComments();  // Podría ser un evento en caso de apretar un botón

    }

    registerEvents(): void {

        showAsideMenu();

        displayHamburgerMenu();

        backToTop();

    }

}

function renderDetail(): void {

    const productId: number = parseInt(routeParams().productId);

    let product = catalog.findById(productId);

    let content = document.getElementsByClassName("content details")[0];
    content.innerHTML = productDetails(product);

}

function renderComments() {

    async function getCommentsFromApi() {

        try {

          let res = await fetch('https://jsonplaceholder.typicode.com/comments'),
          json: CommentInterface[] = await res.json();
    
          if (!res.ok) { throw new Error("algo salió mal")}
    
          selectComments(store, json);
    
          commentsList(store.getComments());
    
        }
        catch(err) {

            console.log(err)
            
        }

    }
    getCommentsFromApi();
}