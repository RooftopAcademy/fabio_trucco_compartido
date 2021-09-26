import Product from './Product'
import Cart from './Cart'
import Catalog from './Catalog'
import User from './User'
import ProductFactory from '../factories/ProductFactory'
import UserComment from './UserComment'

export default class Store{
    private _user: User
    private _products: Product[]
    private _catalog: Catalog
    private _cart: Cart
    private _usersList: User[]
    private _comments: UserComment[]

    constructor(){
        this._user = new User;  //Si está registrado o no?? Log in
        this._products = [];
        this._catalog = new Catalog;
        this._cart = new Cart;
        this._usersList = [];
        this._comments = [];
    }

    getUser(){
        return this._user;
    }

    getCart(){
        return this._cart;
    }

    getCatalog(){
        return this._catalog;
    }

    fetchProducts(): void{

        let data = [
            {id:1, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:2, name: "Artisan Set", maker: "Ortega Hernán", 
            material: "Caoba", theme : "classic", price: 43289, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:3, name: "Azteca set", maker: "Quiroga Juan", 
            material: "mayan stone", theme : "Colonial", price: 2800.67, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:4, name: "Iron metal", maker: "Piotr Zwark", 
            material: "iron", theme : "metal", price: 12000, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:5, name: "Standard Staunton", maker: "Staunton", 
            material: "plastic", theme : "classic", price: 1500, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:6, name: "Standard", maker: "Royal", 
            material: "plastic", theme : "classic", price: 999.99, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:7, name: "Classic Wood Set", maker: "Fancy Chop", 
            material: "pine", theme : "classic", price: 2500.0, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12},
            {id:8, name: "Caña Set", maker: "Capablanca", 
            material: "caña", theme : "cuban-style", price: 13900, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "/images/chess-set.png", buys: 12}
        ]
           
        data.forEach((item) => {
            this._catalog.add(ProductFactory.create(item))
        })
    }

    removeProductById(){
        
    }
    
    fetchUsers(){
        this._usersList.push(this._user);
    }

    getUsers() {
        return this._usersList;
    }

    getComments(){
        return this._comments;
    }

    addComment(c: UserComment){
        this._comments.push(c);
    }

    loadUsersList(){
        // Load the users list by fetching an api and getting all users
    }

    getNextId(): number{
        return this._usersList.length + 1;
    }
}


