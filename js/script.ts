// DOM events 

const store = new Store;

store.fetchProducts();

let catalog = store.getCatalog();

renderListProducts(); 


function renderListProducts(): void{
    Array.from(document.getElementsByClassName('shop-items'))
    .forEach((list) => {
            list.innerHTML += productsList(catalog.all())
        })
}

function showError(source: string, message: string): void{
  alert(message)
  let input = document.getElementById(source);
  input.style.border = "2px solid red"
  document.getElementById("container-form").style.border = "2px solid red"
  input.focus();
}

function submitClick(): void{
    const email = (document.querySelector('lmail') as HTMLInputElement).value;
    const name = (document.getElementById('fname')as HTMLInputElement).value;
    const last = (document.getElementById('lname')as HTMLInputElement).value;
    const country = (document.getElementById('country')as HTMLInputElement).value;
    const subject = (document.getElementById('subject')as HTMLInputElement).value;
    const checkMail = (document.getElementById('checkmail')as HTMLInputElement).checked;

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
      document.getElementById('container-form').style.border = "2px solid green";
      document.getElementById('submit').style.backgroundColor = "#45a049";
      (document.getElementById('submit') as HTMLInputElement).disabled = true;

      setTimeout(function(){
        document.getElementsByClassName("success-message")[0].remove();
        document.getElementById('container-form').style.border = "";
        document.getElementById('submit').style.backgroundColor = "#247255";
        (document.getElementById('submit') as HTMLInputElement).disabled = false;
      }, 3000)
    }
    catch(err){
      alert(err)
      switch(err){
        case "emailError":
          showError("lmail", "You must enter a valid email");
          break;
        case "firstNameError":
          showError("fname", "This field is required")
          break;
        case "lastNameError":
          showError("lname", "This field is required")
          break;
      }
    }
  }

let menuClick: number = 0;
let openMenu = function (): void{  //Despliega el menu
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    menuClick += 1;
    if (menuClick == 1){
    (navMenu as HTMLElement).style.display = "inline-block";
    }
    else{
    (navMenu as HTMLElement).style.display = "none";
    menuClick = 0;
    }
}


// Show / Hide aside-menu event

let asideMenu: HTMLElement = document.getElementById("aside-menu");

let myScrollFunc = function(): void {
  let y = window.scrollY;
  let x = window.innerWidth;

  if (y >= 270 && x >= 1280) {
    asideMenu.className = "aside-menu show"
  } else {
    asideMenu.className = "aside-menu"
  }
};

window.addEventListener("scroll", myScrollFunc);

// Consuling an API for information

(() => {
  async function getData(){
    try{
      let res = await fetch('https://jsonplaceholder.typicode.com/comments'),
      json: object[] = await res.json();

      if (!res.ok){ throw new Error("algo saió mal")}
      //console.log(json)

      // Storing useful comments on store.comments
      json.forEach((comment: object) => {
        if ( comment["postId"] >= 1 || comment["postId"] <= 8 ) {
          let newComment = CommentFactory.create(comment);
          store.addComment(newComment);
        } 
      })
      console.log(store.getComments())

      commentsList(store.getComments());

    }catch(err){
        console.log(err)
    }finally{
        //console.log("debería mostrarse..")
    }
  }
  getData();
})()

let commentsClick: number = 0;
let openComments = function (id: string): void{  // Displays user's reviews
  const commentsList = document.getElementById(`comments-list ${id.slice(-1)}`);  
  // Use the id of the button to modify the comments list
  commentsClick += 1;
  if (commentsClick == 1){
  commentsList.style.display = "block";
  }
  else{
  commentsList.style.display = "none";
  commentsClick = 0;
  }
}