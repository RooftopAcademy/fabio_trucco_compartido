import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";
import navMenuComponent from './navMenuComponent';

export default function homeComponent() : string {
  return  `
  ${headerComponent()}
  <main class="main-content">
        <div class="content home">

            ${navMenuComponent()}
            
            <picture class="column" id="home-pic">
                <img src="/images/chess-drawing.png" alt="chess family">
            </picture>
            <div class="column">

                <h1 class="welcome"> 
                    Hi! Welcome to <a href="#/about" brand-name brand-name-welcome">Libra</a>, 
                    the place where you can find the most beautiful 
                    and professional chess sets. <a href="#/store">Check it out!</a>
                </h1>

                <form class="login-form" action="/login" method="post">
                    <label for="user-login" class="label">Your nick or email</label>
                    <input type="text" class="input-login" placeholder="   e.g.  awesome@nick.com">

                    <label for="password-login" class="label">Your password</label>
                    <input type="password" class="input-login" placeholder="   Your password here">
                </from>

                <button class="login-button" id="login-button">Login</button>
                
                <div class="bail-out">
                    <a href="#/signup" class="bail-out-links">Create new account</a>
                    <a href="#" class="bail-out-links">Forgot password?</a>
                </div>

            </div>
        </div>
        
    </main>
    
    ${footerComponent()}
    `;
}