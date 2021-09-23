
class Catalog{

    private _products: Product[]

    constructor(){
        this._products = [];
    }
    all(): Product[]{
        return this._products;
    }

    add(p: Product): void{
        this._products.push(p);
    }

    findById(id: number): Product{
        return this._products.find(p =>{  // Devuelve un objeto si es el mismo ID
            return p.getId() == id;
        })
    }
}