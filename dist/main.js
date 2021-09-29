(()=>{"use strict";const t=function(){function t(){this._products=[]}return t.prototype.getProducts=function(){return this._products},t.prototype.addProduct=function(t){return this._products.push(t)},t.prototype.getCartAmount=function(){return this._products.length},t}(),e=function(){function t(){this._products=[]}return t.prototype.all=function(){return this._products},t.prototype.add=function(t){this._products.push(t)},t.prototype.findById=function(t){return this._products.find((function(e){return e.getId()==t}))},t}(),n=function(){function t(){this._id=null,this._email="",this._firstName="",this._lastName="",this._country="",this._subject="",this._checked=!0}return t.prototype.getId=function(){return this._id},t.prototype.setId=function(t){return this._id=t},t.prototype.getEmail=function(){return this._email},t.prototype.setEmail=function(t){if("string"!=typeof t||!t.includes("@"))throw"emailError";return this._email=t},t.prototype.getFirstName=function(){return this._firstName},t.prototype.setFirstName=function(t){if("string"!=typeof t||0==t.length)throw"firstNameError";return this._firstName=t},t.prototype.getLastName=function(){return this._lastName},t.prototype.setLastName=function(t){if("string"!=typeof t||0==t.length)throw"lastNameError";return this._lastName=t},t.prototype.getCountry=function(){return this._country},t.prototype.setCountry=function(t){return this._country=t},t.prototype.getSubject=function(){return this._subject},t.prototype.setSubject=function(t){return this._subject=t},t.prototype.getChecked=function(){return this._checked},t.prototype.setChecked=function(t){return this._checked=t},t}(),i=function(){function t(){}return t.prototype.getId=function(){return this.id},t.prototype.setId=function(t){return this.id=t},t.prototype.getName=function(){return this.name},t.prototype.setName=function(t){return this.name=t},t.prototype.getMaker=function(){return this.maker},t.prototype.setMaker=function(t){return this.maker=t},t.prototype.getMaterial=function(){return this.material},t.prototype.setMaterial=function(t){return this.material=t},t.prototype.getTheme=function(){return this.theme},t.prototype.setTheme=function(t){return this.theme=t},t.prototype.getPrice=function(){return this.price},t.prototype.setPrice=function(t){return this.price=t},t.prototype.getStock=function(){return this.stock},t.prototype.setStock=function(t){return this.stock=t},t.prototype.getStars=function(){return this.stars},t.prototype.setStars=function(t){return this.stars=t},t.prototype.getDescription=function(){return this.description},t.prototype.setDescription=function(t){return this.description=t},t.prototype.getImage=function(){return this.image},t.prototype.setImage=function(t){return this.image=t},t.prototype.getBuys=function(){return this.buys},t.prototype.setBuys=function(t){return this.buys=t},t.prototype.getGuarantee=function(){return this.guarantee},t.prototype.setGuarantee=function(t){return this.guarantee=t},t.prototype.newBuy=function(){return this.buys++},t}(),r=function(){function t(){}return t.create=function(t){var e=new i;return e.setId(t.id),e.setName(t.name),e.setMaker(t.maker),e.setMaterial(t.material),e.setTheme(t.theme),e.setPrice(t.price),e.setStock(t.stock),e.setStars(t.stars),e.setDescription(t.description),e.setImage(t.image),e.setBuys(t.buys),e.setGuarantee(t.guarantee),e},t}(),a=function(){function i(){this._user=new n,this._catalog=new e,this._cart=new t,this._usersList=[],this._comments=[]}return i.prototype.getUser=function(){return this._user},i.prototype.getCart=function(){return this._cart},i.prototype.getCatalog=function(){return this._catalog},i.prototype.fetchProducts=function(){var t=this;[{id:1,name:"Classic Wood Set",maker:"Juan Gabriel",material:"pine",theme:"classic",price:1234.45,stock:15,stars:3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:2,name:"Artisan Set",maker:"Ortega Hernán",material:"Caoba",theme:"classic",price:43289,stock:11,stars:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:3,name:"Azteca set",maker:"Quiroga Juan",material:"mayan stone",theme:"Colonial",price:2800.67,stock:11,stars:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:4,name:"Iron metal",maker:"Piotr Zwark",material:"iron",theme:"metal",price:12e3,stock:11,stars:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:5,name:"Standard Staunton",maker:"Staunton",material:"plastic",theme:"classic",price:1500,stock:2,stars:5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:6,name:"Standard",maker:"Royal",material:"plastic",theme:"classic",price:999.99,stock:1,stars:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:7,name:"Classic Wood Set",maker:"Fancy Chop",material:"pine",theme:"classic",price:2500,stock:2,stars:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1},{id:8,name:"Caña Set",maker:"Capablanca",material:"caña",theme:"cuban-style",price:13900,stock:2,stars:3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12,guarantee:1}].forEach((function(e){t._catalog.add(r.create(e))}))},i.prototype.removeProductById=function(){},i.prototype.fetchUsers=function(){this._usersList.push(this._user)},i.prototype.getUsers=function(){return this._usersList},i.prototype.getComments=function(){return this._comments},i.prototype.addComment=function(t){this._comments.push(t)},i.prototype.loadUsersList=function(){},i.prototype.getNextId=function(){return this._usersList.length+1},i}();function o(t,e,n){alert(n),function(t,e){var n=document.getElementById(t);n.style.border="2px solid red",n.focus(),document.getElementById(e).style.border="2px solid red"}(t,e)}const s=function(){function t(){this._target=null,this._body="",this._userName=""}return t.prototype.getTarget=function(){return this._target},t.prototype.setTarget=function(t){return this._target=t},t.prototype.getBody=function(){return this._body},t.prototype.setBody=function(t){return this._body=t},t.prototype.getUserName=function(){return this._userName},t.prototype.setUserName=function(t){return this._userName=t},t}(),u=function(){function t(){}return t.create=function(t){var e=new s;return e.setTarget(t.postId),e.setBody(t.body),e.setUserName(t.name),e},t}();var c,l,m,d,p,g,h,f=new a,y=f.getCatalog();f.fetchProducts(),(c=document.getElementsByClassName("shop-items"))&&Array.from(c).forEach((function(t){t.innerHTML+=y.all().map((function(t){return function(t){return'\n    <article class="shop-item" id="shop-item '+t.getId()+'">\n        <span class="shop-item-name">'+t.getName()+'</span>\n        <picture class="shop-item-img" id="shop-item-image '+t.getId()+'"><img class="shop-item-image" src="'+t.getImage()+'" alt="CHESS"></picture>\n        <div class="shop-item-add">\n            <span class="shop-item-price">$ '+t.getPrice()+'</span>\n            <button class="pair-single-btn" role="button" type="button">Add To Cart</button>\n        </div>\n        <br>\n    </article>\n    '}(t)}))})),m=document.getElementsByClassName("shop-item-img"),null===(l=Array.from(m))||void 0===l||l.forEach((function(t){t.addEventListener("click",(function(t){var e=this.id.slice(-1);localStorage.setItem("id",e),window.location.href="details.html"}))})),function(){if("http://127.0.0.1:5500/details.html"==window.location.href){var t=Number(localStorage.getItem("id")),e=y.findById(t);document.getElementsByClassName("content details")[0].innerHTML=function(t){for(var e=["<img src='/images/star.png' class='rating-star '>","<img src='/images/star.png' class='rating-star '>","<img src='/images/star.png' class='rating-star '>","<img src='/images/star.png' class='rating-star '>","<img src='/images/star.png' class='rating-star '>"],n=0;n<t.getStars();n++)e[n]="<img src='/images/star.png' class='rating-star active'>";return'\n    <div class="up-section">\n    <div class="article-image">\n        <img class="detail-image" src="'+t.getImage()+'" alt="CHESS">\n    </div>\n\n    <div class="right-column">\n        <h3 class="stock">Stock: '+t.getStock()+'</h3>\n        <br>\n        <div class="quantity-buttons">\n            <h3 class="amount">Amount</h3>&nbsp;&nbsp;<input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="quantity-input" size="1" >\n        </div>\n        <br><br>\n        <button class="buy-button" id ="buy-button">Buy Now</button>\n        <br><br>\n        <div class="features">\n            <img  src="/images/security.png" alt="safe" class="icon-image">\n            <p class="buy-text">Get the product you expected or we\'ll give you back the money.</p>\n        </div>\n        <div class="features">\n            <img src="/images/guarantee.png" alt="guarantee" class="icon-image">\n            <p class="buy-text">'+t.getGuarantee()+' years factory guarantee.</p>\n        </div>\n    </div>\n    <div class="mid-column">\n        <h3 class="extra-details">New | '+t.getBuys()+' sold</h3>\n        <h1 class="product-item-name">'+t.getName()+'</h1>\n        <div class="rating" aria-label="Rating of this item is '+t.getStars()+' out of 5">\n            '+e.join("")+"\n        </div>\n        <h1>"+t.getPrice()+'</h1>\n        <br>\n        <h4>Must-know details:</h4>\n        <ul class="details-list">\n            <li class="details-item">Maker: '+t.getMaker()+'</li>\n            <li class="details-item">Material: '+t.getMaterial()+' </li>\n            <li class="details-item">Theme: '+t.getTheme()+'</li>\n        </ul>\n    </div>\n    </div>\n    \n    <div class="down-section">\n    \n        <p class="text">\n            '+t.getDescription()+'\n        </p>\n        <br>\n        <h1 class="user-reviews">User reviews: </h1>\n        <ul class="reviews'+t.getId()+'">\n\n        </ul>\n    </div>\n    '}(e)}}(),(d=document.getElementById("submit"))&&d.addEventListener("click",(function(t){t.preventDefault();var e=document.getElementById("lmail").value,n=document.getElementById("fname").value,i=document.getElementById("lname").value,r=document.getElementById("country").value,a=document.getElementById("subject").value,s=document.getElementById("checkmail").checked,u=f.getUser();try{u.setId(f.getNextId()),u.setEmail(e),u.setFirstName(n),u.setLastName(i),u.setCountry(r),u.setSubject(a),u.setChecked(s),f.fetchUsers(),console.log(f.getUsers());var c=document.createElement("div");c.innerHTML="&#10003;&nbsp;&nbsp;",c.classList.add("success-message");var l=document.createTextNode("Great! We have sent you an e-mail to confirm your account");c.appendChild(l),document.getElementsByClassName("submit-click")[0].appendChild(c);var m=document.getElementById("container-form"),d=document.getElementById("submit");m&&(m.style.border="2px solid green"),d&&(d.style.backgroundColor="#45a049"),document.getElementById("submit").disabled=!0,setTimeout((function(){document.getElementsByClassName("success-message")[0].remove(),m&&(m.style.border=""),d&&(d.style.backgroundColor="#247255"),document.getElementById("submit").disabled=!1}),3e3)}catch(t){switch(alert(t),t){case"emailError":o("lmail","container-form","You must enter a valid email");break;case"firstNameError":o("fname","container-form","This field is required");break;case"lastNameError":o("lname","container-form","This field is required")}}})),p=0,document.getElementById("hamburger").addEventListener("click",(function(t){t.preventDefault;var e=document.getElementsByClassName("nav-menu")[0];1==(p+=1)?e.className="nav-menu active":(e.className="nav-menu",p=0)})),window.addEventListener("scroll",(function(){var t=document.getElementById("aside-menu"),e=window.scrollY,n=window.innerWidth;t.className=e>=80&&n>=1280&&t?"aside-menu show":"aside-menu"})),g=0,(h=document.getElementsByClassName("comments-button"))&&Array.from(h).forEach((function(t){t.addEventListener("click",(function(){var t=this.id,e=document.getElementById("comments-list "+t);g+=1,e&&(1==g?e.style.display="block":(e.style.display="none",g=0))}))})),document.getElementById("back-to-top").addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})),function(){var t,e,n,i;t=this,e=void 0,i=function(){var t,e,n;return function(t,e){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch("https://jsonplaceholder.typicode.com/comments")];case 1:return[4,(t=i.sent()).json()];case 2:if(e=i.sent(),!t.ok)throw new Error("algo saió mal");return function(t,e){e.forEach((function(e){!function(t,e){var n=t.getCatalog().all().length;if(e.postId<=n){var i=u.create(e);t.addComment(i)}}(t,e)}))}(f,e),f.getComments().map((function(t){return function(t){var e='\n    <hr>\n    <li class="review-item">\n        <h3>Username: '+t.getUserName()+"</h3>\n        <h3>Comment: "+t.getBody()+"</h3>\n    </li>\n    ",n=document.getElementsByClassName("reviews"+t.getTarget())[0];n&&(n.innerHTML+=e)}(t)})),[3,4];case 3:return n=i.sent(),console.log(n),[3,4];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(r,a){function o(t){try{u(i.next(t))}catch(t){a(t)}}function s(t){try{u(i.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((i=i.apply(t,e||[])).next())}))}()})();