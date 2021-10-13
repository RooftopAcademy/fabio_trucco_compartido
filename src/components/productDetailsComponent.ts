import footerComponent from "./footerComponent"
import headerComponent from "./headerComponent"
import asideMenuComponent from "./asideMenuComponent"
import backToTopComponent from "./backToTopComponent";
import navMenuComponent from './navMenuComponent';

export default function productDetailsComponent(): string {

  return `
  ${headerComponent()}
  
  <main class="main-content">
  
      ${asideMenuComponent()}
  
      <div class="content details">
        
        ${navMenuComponent()}
        
      </div>
  
  </main>
  
  ${backToTopComponent()}
  ${footerComponent()}
  `;

}