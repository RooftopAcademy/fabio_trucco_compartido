import Product from '../entities/Product';
import cartItemComponent from '../components/cartItemComponent'

export default function cartItemList(cartList: Product []) : string[] {

  /**
   * Convert Prodct[] to set and then back to array
   * to filter only not repeated values
   */

  let set = Array.from(new Set(cartList));  
                                            
  return set.map((item) => cartItemComponent(item));

}