import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";
import navMenuComponent from './navMenuComponent';

export default function cartComponent() : string {
  return `
  ${headerComponent()}
  <main class="main-content">
      <div class="content cart-flex">

          ${navMenuComponent()}

          <div class="cart-content" id="cart-content">
              <h1 class="cart-title">Your selections</h1>
              <hr>

              <!-- cartItemComponent -->

          </div>

          <div class="purchase-div" id="purchase-div">

              <!-- purchaseComponent -->

          </div>

      </div>
  </main>
  ${footerComponent()}
  `;
}