import Product from "./Product";

export default class Cart{

    private _products: Product[]

    constructor(){
        this._products = [];
    }

    getProducts(): Product[]{
        return this._products
     } 
    addProduct(p: Product): number{
         return this._products.push(p)
     }
}

