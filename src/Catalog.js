
class Catalog{
    constructor(){
        this.products = [];
    }
    all(){
        return this.products;
    }

    add(p){
        this.products.push(p);
    }

    findById(id){
        return this.products.find(p =>{  // Devuelve un objeto si es el mismo ID
            return p.id == id;
        })
    }
}