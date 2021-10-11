import { cart } from "../index";

export default function updateCartAmount(docClass: string) : void {

  let amount = cart.getAmount();
  
  Array.from(document.getElementsByClassName(docClass))
    .forEach((el) => {

      el.innerHTML = amount.toString();
      
    })

}