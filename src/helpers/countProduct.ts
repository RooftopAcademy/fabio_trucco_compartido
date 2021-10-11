import { cart } from '../index';

export default function countProduct(productId : number) : number {

  return cart.getProducts().filter( product => product.getId() == productId ).length;

}