import Product from '../entities/Product';
import cartItemComponent from '../components/cartItemComponent'

export default function cartItemList(cartList: Product []) : string[] {
  
  return cartList.map((item) => cartItemComponent(item));

}