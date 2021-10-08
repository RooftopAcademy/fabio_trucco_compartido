import headerComponent from "./headerComponent"
import footerComponent from "./footerComponent"
import asideMenuComponent from "./asideMenuComponent"
import backToTopComponent from "./backToTopComponent"

export default function storeComponent(): string {
  return `

  ${headerComponent()}
  
  <main class="main-content">

      ${asideMenuComponent()}

      <div class="content">
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