(()=>{"use strict";const e=function(){function e(){this._products=[]}return e.prototype.getProducts=function(){return this._products},e.prototype.addProduct=function(e){return this._products.push(e)},e}(),t=function(){function e(){this._products=[]}return e.prototype.all=function(){return this._products},e.prototype.add=function(e){this._products.push(e)},e.prototype.findById=function(e){return this._products.find((function(t){return t.getId()==e}))},e}(),i=function(){function e(){this._id=null,this._email="",this._firstName="",this._lastName="",this._country="",this._subject="",this._checked=!0}return e.prototype.getId=function(){return this._id},e.prototype.setId=function(e){return this._id=e},e.prototype.getEmail=function(){return this._email},e.prototype.setEmail=function(e){if("string"!=typeof e||!e.includes("@"))throw"emailError";return this._email=e},e.prototype.getFirstName=function(){return this._firstName},e.prototype.setFirstName=function(e){if("string"!=typeof e||0==e.length)throw"firstNameError";return this._firstName=e},e.prototype.getLastName=function(){return this._lastName},e.prototype.setLastName=function(e){if("string"!=typeof e||0==e.length)throw"lastNameError";return this._lastName=e},e.prototype.getCountry=function(){return this._country},e.prototype.setCountry=function(e){return this._country=e},e.prototype.getSubject=function(){return this._subject},e.prototype.setSubject=function(e){return this._subject=e},e.prototype.getChecked=function(){return this._checked},e.prototype.setChecked=function(e){return this._checked=e},e}(),n=function(){function e(){this.id=null,this.name="",this.maker="",this.material="",this.theme="",this.price=null,this.description="",this.image="",this.buys=null}return e.prototype.getId=function(){return this.id},e.prototype.setId=function(e){return this.id=e},e.prototype.getName=function(){return this.name},e.prototype.setName=function(e){return this.name=e},e.prototype.getMaker=function(){return this.maker},e.prototype.setMaker=function(e){return this.maker=e},e.prototype.getMaterial=function(){return this.material},e.prototype.setMaterial=function(e){return this.material=e},e.prototype.getTheme=function(){return this.theme},e.prototype.setTheme=function(e){return this.theme=e},e.prototype.getPrice=function(){return this.price},e.prototype.setPrice=function(e){return this.price=e},e.prototype.getDescription=function(){return this.description},e.prototype.setDescription=function(e){return this.description=e},e.prototype.getImage=function(){return this.image},e.prototype.setImage=function(e){return this.image=e},e.prototype.getBuys=function(){return this.buys},e.prototype.setBuys=function(e){return this.buys=e},e.prototype.newBuy=function(){return this.buys++},e}(),o=function(){function e(){}return e.create=function(e){var t=new n;return t.setId(e.id),t.setName(e.name),t.setMaker(e.maker),t.setMaterial(e.material),t.setTheme(e.theme),t.setPrice(e.price),t.setDescription(e.description),t.setImage(e.image),t.setBuys(e.buys),t},e}(),r=function(){function n(){this._user=new i,this._products=[],this._catalog=new t,this._cart=new e,this._usersList=[],this._comments=[]}return n.prototype.getUser=function(){return this._user},n.prototype.getCart=function(){return this._cart},n.prototype.getCatalog=function(){return this._catalog},n.prototype.fetchProducts=function(){var e=this;[{id:1,name:"Classic Wood Set",maker:"Juan Gabriel",material:"pine",theme:"classic",price:1234.45,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:2,name:"Artisan Set",maker:"Ortega Hernán",material:"Caoba",theme:"classic",price:43289,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:3,name:"Azteca set",maker:"Quiroga Juan",material:"mayan stone",theme:"Colonial",price:2800.67,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:4,name:"Iron metal",maker:"Piotr Zwark",material:"iron",theme:"metal",price:12e3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:5,name:"Standard Staunton",maker:"Staunton",material:"plastic",theme:"classic",price:1500,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:6,name:"Standard",maker:"Royal",material:"plastic",theme:"classic",price:999.99,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:7,name:"Classic Wood Set",maker:"Fancy Chop",material:"pine",theme:"classic",price:2500,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12},{id:8,name:"Caña Set",maker:"Capablanca",material:"caña",theme:"cuban-style",price:13900,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/images/chess-set.png",buys:12}].forEach((function(t){e._catalog.add(o.create(t))}))},n.prototype.removeProductById=function(){},n.prototype.fetchUsers=function(){this._usersList.push(this._user)},n.prototype.getUsers=function(){return this._usersList},n.prototype.getComments=function(){return this._comments},n.prototype.addComment=function(e){this._comments.push(e)},n.prototype.loadUsersList=function(){},n.prototype.getNextId=function(){return this._usersList.length+1},n}();const a=function(){function e(){this._target=null,this._body="",this._userName=""}return e.prototype.getTarget=function(){return this._target},e.prototype.setTarget=function(e){return this._target=e},e.prototype.getBody=function(){return this._body},e.prototype.setBody=function(e){return this._body=e},e.prototype.getUserName=function(){return this._userName},e.prototype.setUserName=function(e){return this._userName=e},e}(),s=function(){function e(){}return e.create=function(e){var t=new a;return t.setTarget(e.postId),t.setBody(e.body),t.setUserName(e.name),t},e}();var u=new r;u.fetchProducts();var c,l=u.getCatalog();function m(e,t){alert(t);var i=document.getElementById(e);i&&(i.style.border="2px solid red",i.focus());var n=document.getElementById("container-form");n&&(n.style.border="2px solid red")}(c=document.getElementsByClassName("shop-items"))&&Array.from(c).forEach((function(e){e.innerHTML+=l.all().map((function(e){return function(e){return'\n    <article class="shop-item" id="shop-item '+e.getId()+'">\n        <span class="shop-item-name">'+e.getName()+'</span>\n        <a href="details.html" id="shop-item-image"><img class="shop-item-image" src="'+e.getImage()+'" alt="CHESS"></a>\n        <div class="shop-item-add">\n            <span class="shop-item-price">$ '+e.getPrice()+'</span>\n            <button class="pair-single-btn" role="button" type="button">Add To Cart</button>\n        </div>\n        <br>\n    </article>\n    '}(e)}))}));var d=document.getElementById("submit");d&&d.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("lmail").value,i=document.getElementById("fname").value,n=document.getElementById("lname").value,o=document.getElementById("country").value,r=document.getElementById("subject").value,a=document.getElementById("checkmail").checked,s=u.getUser();try{s.setId(u.getNextId()),s.setEmail(t),s.setFirstName(i),s.setLastName(n),s.setCountry(o),s.setSubject(r),s.setChecked(a),u.fetchUsers(),console.log(u.getUsers());var c=document.createElement("div");c.innerHTML="&#10003;&nbsp;&nbsp;",c.classList.add("success-message");var l=document.createTextNode("Great! We have sent you an e-mail to confirm your account");c.appendChild(l),document.getElementsByClassName("submit-click")[0].appendChild(c);var d=document.getElementById("container-form"),p=document.getElementById("submit");d&&(d.style.border="2px solid green"),p&&(p.style.backgroundColor="#45a049"),document.getElementById("submit").disabled=!0,setTimeout((function(){document.getElementsByClassName("success-message")[0].remove(),d&&(d.style.border=""),p&&(p.style.backgroundColor="#247255"),document.getElementById("submit").disabled=!1}),3e3)}catch(e){switch(alert(e),e){case"emailError":m("lmail","You must enter a valid email");break;case"firstNameError":m("fname","This field is required");break;case"lastNameError":m("lname","This field is required")}}}));var p=0;document.getElementById("hamburguer").addEventListener("click",(function(e){e.preventDefault;var t=document.getElementsByClassName("nav-menu")[0];1==(p+=1)?t.style.display="inline-block":(t.style.display="none",p=0)}));var h=document.getElementById("aside-menu");window.addEventListener("scroll",(function(){var e=window.scrollY,t=window.innerWidth;e>=270&&t>=1280&&h?h.className="aside-menu show":h&&(h.className="aside-menu")})),function(){var e,t,i,n;e=this,t=void 0,n=function(){var e,t,i;return function(e,t){var i,n,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(o=2&r[0]?n.return:r[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],n=0}finally{i=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,4,5]),[4,fetch("https://jsonplaceholder.typicode.com/comments")];case 1:return[4,(e=n.sent()).json()];case 2:if(t=n.sent(),!e.ok)throw new Error("algo saió mal");return t.forEach((function(e){if(e.postId&&(e.postId>=1||e.postId<=8)){var t=s.create(e);u.addComment(t)}})),console.log(u.getComments()),u.getComments().map((function(e){return function(e){var t="\n    <li >\n        <h3>Review by "+e.getUserName()+":</h3> \n        <br>\n        <p>"+e.getBody()+"</p>\n    </li>\n    ";document.getElementById("comments-list "+e.getTarget()).innerHTML=t}(e)})),[3,5];case 3:return i=n.sent(),console.log(i),[3,5];case 4:return[7];case 5:return[2]}}))},new((i=void 0)||(i=Promise))((function(o,r){function a(e){try{u(n.next(e))}catch(e){r(e)}}function s(e){try{u(n.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}();var f=0,y=document.getElementsByClassName("comments-button");y&&Array.from(y).forEach((function(e){e.addEventListener("click",(function(){var e=this.id,t=document.getElementById("comments-list "+e);f+=1,t&&(1==f?t.style.display="block":(t.style.display="none",f=0))}))})),document.getElementById("back-to-top").addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))})();