import Product from '../entities/Product';
import cartItemComponent from '../components/cartItemComponent';
import emptyCartComponent from '../components/emptyCartComponent';

export default function cartItemList(cartList: Product []) : string[] | string {

  /**
   * Convert Prodct[] to set and then back to array
   * to filter only not repeated values
   */

  if(cartList.length == 0) { 

    return emptyCartComponent();
    
  }

  let set = Array.from(new Set(cartList));  
                                            
  return set.map((item) => cartItemComponent(item));

}