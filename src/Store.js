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
            {id:2, name: "Artisan Set", maker: "Ortega Hernán", 
            material: "Caoba", theme : "classic", price: 43289},
            {id:3, name: "Azteca set", maker: "Quiroga Juan", 
            material: "mayan stone", theme : "Colonial", price: 2800.67},
            {id:4, name: "Iron metal", maker: "Piotr Zwark", 
            material: "iron", theme : "metal", price: 12000},
            {id:5, name: "Standard Staunton", maker: "Staunton", 
            material: "plastic", theme : "classic", price: 1500},
            {id:6, name: "Standard", maker: "Royal", 
            material: "plastic", theme : "classic", price: 999.99},
            {id:7, name: "Classic Wood Set", maker: "Fancy Chop", 
            material: "pine", theme : "classic", price: 2500.0},
            {id:8, name: "Caña Set", maker: "Capablanca", 
            material: "caña", theme : "cuban-style", price: 13900}
        ]
           
        data.forEach((item) => {
            this.catalog.add(ProductFactory.create(item))
        })
    }

    removeProductById(){
        
    }
    
    fetchUsers(){
        this.usersList.push(this.user);
    }

    getUsers() {
        return this.usersList;
    }

}

