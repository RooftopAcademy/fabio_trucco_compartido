import Store from "./entities/Store";
import UserFactory from './factories/UserFactory';
import productsList from "./views/productsList";
import commentsList from "./views/commentsList";
import productDetails from "./views/productDetails";
import displayHamburgerMenu from "./helpers/hamburger";
import showError from './helpers/showError';
import showAsideMenu from './helpers/showAsideMenu';
import backToTop from './helpers/backToTop';
import selectComments from './helpers/selectComments';
import successMessageOnUserSubmit from './helpers/successMessageOnUserSubmit';
import read from './helpers/readContactFormInputs';
import CommentInterface from './interfaces/CommentInterface';
import runSuccessStylingOnContactForm from "./helpers/runSuccessStylingOnContactForm";
import revertSuccessStylingOnContactForm from "./helpers/revertSuccessStylingOnContactForm";


// DOM events 

const store = new Store;

let catalog = store.getCatalog();

store.fetchProducts();

renderListProducts(); 

saveProductId();

renderDetail();

submitUser();

displayHamburgerMenu();

showAsideMenu();

backToTop();

function renderListProducts(): void {

  let shopItems = document.getElementsByClassName('shop-items');

  Array.from(shopItems).forEach((list) => {
      list.innerHTML += productsList(catalog.all())
    }
  )
}

function saveProductId(): void {

  let detail: HTMLCollection = document.getElementsByClassName("shop-item-img");

  Array.from(detail)?.forEach((el) =>{
    el.addEventListener("click", function(e){
      
      let productId: string = this.id.slice(-1);

      localStorage.setItem('id', productId);

      window.location.href = `details.html`;
    })
  })
}


function renderDetail(): void {

  if (window.location.href == "http://127.0.0.1:5500/details.html") {
    let productId: number = Number(localStorage.getItem('id'));
  
    let product = catalog.findById(productId); 
  
    let content = document.getElementsByClassName("content details")[0];
    content.innerHTML = productDetails(product);
  }
}

function submitUser(): void {

    let submitButton: HTMLElement = document.getElementById("submit") as HTMLElement;
  
    submitButton?.addEventListener("click", function(e): void {
      
        e.preventDefault();

        try{

          UserFactory.create(store, read())

          store.fetchUsers();

          runSuccessStylingOnContactForm();

          successMessageOnUserSubmit();

          setTimeout( revertSuccessStylingOnContactForm, 3000 );
        }
        catch(err){
          switch(err){
            case "emailError":
              showError("lmail", "container-form", "You must enter a valid email");
              break;
            case "firstNameError":
              showError("fname", "container-form", "This field is required")
              break;
            case "lastNameError":
              showError("lname", "container-form", "This field is required")
              break;
          }
        }
    })
  }
  
  (() => {
    async function getCommentsFromApi() {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments'),
        json: CommentInterface[] = await res.json();
  
        if (!res.ok){ throw new Error("algo saió mal")}
  
        selectComments(store, json);
  
        commentsList(store.getComments());
  
      }
      catch(err) {
          console.log(err)
      }
    }
    getCommentsFromApi();
})()





