import Store from "./models/Store";
import productsList from "./views/productsList";
import commentsList from "./views/commentsList";
import productDetails from "./views/productDetails";
import commentInterface from './interfaces';
import displayHamburgerMenu from "./helpers/hamburger";
import showError from './helpers/showError';
import showAsideMenu from './helpers/showAsideMenu';
import backToTop from './helpers/backToTop';
import selectComments from './helpers/selectComments';


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

renderUserCommentsOnDetail();

backToTop();

function renderListProducts(): void{
  let shopItems = document.getElementsByClassName('shop-items');
  if (shopItems){
    Array.from(shopItems).forEach((list) => {
      list.innerHTML += productsList(catalog.all())
    })
  }  
}

function saveProductId(): void {
  let detail: HTMLCollection = document.getElementsByClassName("shop-item-img")
  Array.from(detail)?.forEach((el) =>{
    el.addEventListener("click", function(e){
      
      let productId: string = this.id.slice(-1);

      localStorage.setItem('id', productId);

      window.location.href = `details.html`;
    })
  })
}


function renderDetail(): void{
  if (window.location.href == "http://127.0.0.1:5500/details.html") {
    let productId: number = Number(localStorage.getItem('id'));
  
    let product = catalog.findById(productId); 
  
    let content = document.getElementsByClassName("content details")[0];
    content.innerHTML = productDetails(product);
  }
}


function submitUser(): void{
  let submitButton = document.getElementById("submit")
  if (submitButton){
    submitButton.addEventListener("click", function(e): void{
      
      e.preventDefault();
  
      const email = (document.getElementById('lmail') as HTMLInputElement).value;
      const name = (document.getElementById('fname')as HTMLInputElement).value;
      const last = (document.getElementById('lname')as HTMLInputElement).value;
      const country = (document.getElementById('country')as HTMLInputElement).value;
      const subject = (document.getElementById('subject')as HTMLInputElement).value;
      const element = <HTMLInputElement> document.getElementById("checkmail");
      let isChecked: boolean = element.checked;
      const checkMail = isChecked;
  
      let user = store.getUser();
      //debugger;
      try{
        user.setId(store.getNextId())
        user.setEmail(email);
        user.setFirstName(name);
        user.setLastName(last);
        user.setCountry(country);
        user.setSubject(subject);
        user.setChecked(checkMail);
  
        store.fetchUsers();
  
        console.log(store.getUsers())
  
        let div: HTMLElement = document.createElement('div');
        div.innerHTML = "&#10003;&nbsp;&nbsp;";
        div.classList.add('success-message');
        let message: Node = document.createTextNode("Great! We have sent you an e-mail to confirm your account");
        div.appendChild(message);
  
        document.getElementsByClassName('submit-click')[0].appendChild(div);
  
        let container = document.getElementById('container-form')
        let submit = document.getElementById('submit');
        if ( container ){ container.style.border = "2px solid green"}
        if ( submit ) { submit.style.backgroundColor = "#45a049";}
        (document.getElementById('submit') as HTMLInputElement).disabled = true;
  
        setTimeout(function(){
          document.getElementsByClassName("success-message")[0].remove();
          if (container) { 
            container.style.border = "" 
          }
          if ( submit ){
            submit.style.backgroundColor = "#247255";
          }
          (document.getElementById('submit') as HTMLInputElement).disabled = false;
        }, 3000)
      }
      catch(err){
        alert(err)
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
}

(() => {
  async function getCommentsFromApi() {
    try{
      let res = await fetch('https://jsonplaceholder.typicode.com/comments'),
      json: commentInterface[] = await res.json();

      if (!res.ok){ throw new Error("algo saió mal")}

      selectComments(store, json);

      commentsList(store.getComments());

    }catch(err){
        console.log(err)
    }
  }
  getCommentsFromApi();
})()

function renderUserCommentsOnDetail(): void {

  let commentsClick: number = 0;

  let commentsButton = document.getElementsByClassName("comments-button")

  if (commentsButton){
    Array.from(commentsButton).forEach(button => {
      button.addEventListener("click", function(): void{

        let buttonId: string = this.id
        const commentsList = document.getElementById(`comments-list ${buttonId}`)
        commentsClick += 1;

        if (commentsList){

          if (commentsClick == 1){
            commentsList.style.display = "block";
            }

          else{
            commentsList.style.display = "none";
            commentsClick = 0;
          }
        }
      })
    })
  }
}




