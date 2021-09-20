class Store{
    constructor(){
        this.user = new User;  //Si está registrado o no?? Log in
        this.product = new Product;
        this.catalog = new Catalog;
        this.cart = new Cart;
        this.usersList = [];
    }

    getUser(){
        return this.user;
    }

    getCart(){
        return this.cart;
    }

    getCatalog(){
        return this.catalog;
    }

    fetchProducts(){

        let data = [
            {id:1, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45},
            {id:2, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45},
            {id:3, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45},
            {id:4, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45}
        ]
           
        data.forEach((item) => {
            this.catalog.add(ProductFactory.create(item))
        })
    }
    
    fetchUsers(){
        this.usersList.push(this.user);
    }

}

