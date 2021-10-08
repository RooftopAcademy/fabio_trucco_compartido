import PageInterface from "../interfaces/PageInterface";
import routeParams from "../routeParams";
import { store, catalog } from '../index';
import productDetails from '../views/productDetails';
import productDetailsComponent from "../components/productDetailsComponent";
import commentsList from '../views/commentsList';
import displayHamburgerMenu from '../helpers/hamburger';
import backToTop from '../helpers/backToTop';
import showAsideMenu from '../helpers/showAsideMenu';
import toggleArrowOnClick from '../helpers/toggleArrowOnClick';
import toggleDisplay from '../helpers/toggleDisplay';


export default class ProductDetailsPage implements PageInterface {

    render(c: HTMLElement): void {

        c.innerHTML = productDetailsComponent();

       renderDetail();

       renderComments(); 

    }

    registerEvents(): void {

        showAsideMenu();

        displayHamburgerMenu();

        backToTop();

        toggleCommentsOnClick();

    }

}

function renderDetail(): void {

    const productId: number = parseInt(routeParams().productId);

    let product = catalog.findById(productId);

    let content = document.getElementsByClassName("content details")[0];
    content.innerHTML = productDetails(product);

}

function renderComments() {

    commentsList(store.getComments());

}


function toggleCommentsOnClick() {

    const userReviewsButton = document.getElementsByClassName('user-reviews')[0];

    userReviewsButton.addEventListener('click', () => {
        
        toggleArrowOnClick('arrow');

        toggleDisplay(`reviews${routeParams().productId}`);

    })
}