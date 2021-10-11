import Product from "./Product";

export default class Cart {

    private _products: Product []

    constructor() {

        this._products = [];

    }

    public getProducts(): Product [] {

        return [...this._products];

    } 

    private setProducts(array: Product[]) : void {

        this._products = array;

    }

    public addProduct(p: Product): void {

        this._products.push(p);
        
    }

    public findProductById(id: number): Product {

        return this._products.find((p) =>{ 
            return p.getId() == id;
        });

    }

    public discardProduct(id: number): void {

        let newArray = this._products.filter(p =>  p.getId() !== id );

        this.setProducts(newArray);

    }

    public getAmount() : number {

        return this._products.length;

    }

}

