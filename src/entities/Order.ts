import Product from './Product';
import ProductInterface from '../interfaces/ProductInterface';

export default abstract class Order {
  
  static arr: Product[];

  byId() {

    return Order.arr.sort((a, b) => {

      return this.byKey(a, b, 'id');

    });
  }

  byName() {

    return Order.arr.sort((a, b) => {

      return this.byKey(a, b, 'pName');

    });
  }

  private byKey(a: Product, b: Product, key: keyof ProductInterface) {

    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;

  }
}
