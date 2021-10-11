import { cart } from "../index";

export default function updateNumber(docClass: string, num: number) : void {
  
  Array.from(document.getElementsByClassName(docClass))
    .forEach((el) => {

      el.innerHTML = num.toString();
      
    })

}