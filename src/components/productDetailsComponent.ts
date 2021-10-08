import footerComponent from "./footerComponent"
import headerComponent from "./headerComponent"
import asideMenuComponent from "./asideMenuComponent"
import backToTopComponent from "./backToTopComponent";

export default function productDetailsComponent(): string {

  return `
  ${headerComponent()}
  
  <main class="main-content">
  
      ${asideMenuComponent()}
  
      <div class="content details">
  
      </div>
  
  </main>
  
  ${backToTopComponent()}
  ${footerComponent()}
  `;

}