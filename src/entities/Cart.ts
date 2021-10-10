import Product from "./Product";

export default class Cart {

    private _products: Map<Product, number>;  // It saves the product and its amount

    constructor() {

        this._products = new Map;

    }

    public getProducts(): Map<Product, number> {

        return this._products;

    } 

    public addProduct(p: Product, amount: number = 1): void {

        /**
         * If product is not in the Map, then set it with amount = 1 by default.
         * Else increment by 1 its value(amount).
         */

        if(!this._products.has(p)){
            this._products.set(p, amount);
        } else {
            for (let [key, value] of Array.from(this._products)) {
                if( key == p ){
                    value++;
                }
            }
        }
        
    }

    public findProductById(id: number): Product {

        return Array.from(this._products.keys()).find((p) =>{ 
            return p.getId() == id;
        });

    }

    public discardProduct(id: number): void {

        Array.from(this._products.keys()).filter((p) => {
            p.getId() != id; 
        })
    }

    public countProducts() : number {

        return Array.from(this._products.values()).reduce((a, b) => {
            return a+b;
        })

    }

}

