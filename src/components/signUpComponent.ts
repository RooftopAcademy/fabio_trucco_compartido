import backToTopComponent from "./backToTopComponent";
import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";
import navMenuComponent from './navMenuComponent';

export default function signUpComponent() : string {
  return `
  ${headerComponent()}

  <main class="main-content">
    <div class="content content-menu">

      ${navMenuComponent()}

      <div class="box">
        <h1 class="welcome"> 
            Hi! Welcome to <a href="about.html" brand-name brand-name-welcome">Libra</a>, 
            the place where you can find the most beautiful 
            and professional chess sets. <a href="store.html">Check it out!</a>
        </h1>
      
      </div>
      
      <div class="container" id="container-form">
        <form action="/register" id="user-form" method="post">
      
            <div class="label" id="label-lmail">
                <label for="lmail">E-mail</label>
            </div>
            <input type="text" id="lmail" name="email" placeholder="Your e-mail....">
            
            <div class="label" id="label-fname">
                <label for="fname">First Name</label>
            </div>
            <input type="text" id="fname" name="firstname" placeholder="Your name...">
      
            <div class="label" id="label-lname">
                <label for="lname">Last Name</label>
            </div>
            <input type="text" id="lname" name="lastname" placeholder="Your last name...">
        
            <label for="country">Country</label>
            <select id="country" name="country">
      
                <option value="usa">Argentina</option>
                <option value="australia">Australia</option>
                <option value="usa">Bolivia</option>
                <option value="usa">Brasil/option>
                <option value="canada">Canada</option>
                <option value="usa">Chile</option>
                <option value="usa">Perú</option>
                <option value="usa">Uruguay</option>
                <option value="usa">USA</option>
      
            </select>
      
            <div class="label" id="label-credit">
                <label for="paymentsMethods">Payments methods</label>
            </div>
            <br>
            <div class="payment-methods">
      
                <input type="checkbox" class="check" id="credit" checked>
                <label for="check-label" >Credit card</label>
      
                <input type="checkbox" class="check" id="debit" checked>
                <label for="check-label" >Debit</label>
      
                <input type="checkbox" class="check" id="crypto" checked>
                <label for="check-label" >Crypto</label>
      
            </div>
            <br>
      
            <div class="label" id="label-nick">
                <label for="nick">Nickname</label>
            </div>
            <input type="text" id="nick" name="nickname" placeholder="Choose your nick...">
      
            <div class="label" id="label-phone">
                <label for="phone">Phone Number</label>
            </div>
            <input type="text" id="phone" name="phonenNumber" placeholder="Your phone...">
      
            <div class="label" id="label-password">
                <label for="password">Password</label>
            </div>
            <input type="password" id="password" name="password" placeholder="No less than 6 chars">
      
            <input type="checkbox" class="check" id="checkmail" checked>
            <label for="check-label" >&nbsp;&nbsp;Send me e-mails and updated offers!</label>
            <br>
            <div class="submit-click" id="submit-click">
                <input type="submit" value="Submit" id="submit" >
                &nbsp;&nbsp;&nbsp;
            </div>
        </form>
      </div>
    </div>
  </main>

  ${backToTopComponent()}

  ${footerComponent()}
  `;
}