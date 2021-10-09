import Product from "./Product";

export default class Cart {

    private _products: Map<Product, number>;  // It saves the product and its amount

    constructor(){
        this._products = new Map;
    }

    public getProducts(): Map<Product, number> {
        return this._products;
    } 

    public addProduct(p: Product, amount: number): void {
        this._products.set(p, amount);
    }

    public findProductById(id: number): Product {
        return Array.from(this._products.keys()).find((p) =>{ 
            return p.getId() == id;
        });
    }

    public discartProduct(id: number): void {

        Array.from(this._products.keys()).filter((p) => {
            p.getId() != id; 
        })
    }

}

