// DOM events 

const store = new Store;

store.fetchProducts();

let catalog = store.getCatalog();

renderListProducts(); 


function renderListProducts(){
    Array.from(document.getElementsByClassName('shop-items'))
    .forEach((list) => {
            list.innerHTML = productsList(catalog.all())
        })
}

function showError(source, message){
  alert(message)
  let input = document.getElementById(source);
  input.style.border = "2px solid red"
  document.getElementById("container-form").style.border = "2px solid red"
  input.focus();
}

let submitButton = document.getElementById("submit")
  .addEventListener("click", function(e){
    e.preventDefault();

    const email = document.getElementById('lmail').value;
    const name = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const country = document.getElementById('country').value;
    const subject = document.getElementById('subject').value;
    const checkMail = document.querySelector('.checkmail').checked;

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

      store.fetchUsers(store.user);

      console.log(store.getUsers())

      let div = document.createElement('div');
      div.innerHTML = "&#10003;&nbsp;&nbsp;";
      div.classList.add('success-message');
      let message = document.createTextNode("Great! We have sent you an e-mail to confirm your account");
      div.appendChild(message);

      document.getElementsByClassName('submit-click')[0].appendChild(div);
      document.getElementById('container-form').style.border = "2px solid green";
      document.getElementById('submit').style.backgroundColor = "#45a049";
      document.getElementById('submit').disabled = true;

      setTimeout(function(){
        document.getElementsByClassName("success-message")[0].remove();
        document.getElementById('container-form').style.border = "";
        document.getElementById('submit').style.backgroundColor = "#247255";
        document.getElementById('submit').disabled = false;
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

    
  })

let menuClick = 0;
let openMenu = function (){  //Despliega el menu
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    menuClick += 1;
    if (menuClick == 1){
    navMenu.style.display = "inline-block";
    }
    else{
    navMenu.style.display = "none";
    menuClick = 0;
    }
}


// Show / Hide aside-menu event

asideMenu = document.getElementById("aside-menu");

let myScrollFunc = function() {
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
      json = await res.json();

      if (!res.ok){ throw new Error("algo saió mal")}
      //console.log(json)

      // Storing useful comments on store.comments
      json.forEach((comment) => {
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

let commentsClick = 0;
let openComments = function (id){  // Displays user's reviews
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