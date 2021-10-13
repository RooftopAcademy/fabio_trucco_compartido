import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";
import asideMenuComponent from "./asideMenuComponent";
import backToTopComponent from "./backToTopComponent";
import navMenuComponent from './navMenuComponent';

export default function storeComponent(): string {
  return `

  ${headerComponent()}
  
  <main class="main-content">

      ${asideMenuComponent()}

      <div class="content">

          ${navMenuComponent()}

          <br>
          <div class="shop-items">
              <!-- JavaScript -->
          </div>
      </div>

  </main>
  
  ${backToTopComponent()}
  ${footerComponent()}

  `;
}