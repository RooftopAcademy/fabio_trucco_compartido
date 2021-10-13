import Cart from './Cart'
import Catalog from './Catalog'
import InvitedUser from './InvitedUser'
import RegisteredUser from './RegisteredUser'
import ProductFactory from '../factories/ProductFactory'
import UserComment from './UserComment'

export default class Store {
    private _user: InvitedUser
    private _catalog: Catalog
    private _cart: Cart
    private _usersList: RegisteredUser[]
    private _comments: UserComment[]

    constructor() {
        this._user = new InvitedUser;  //Si está registrado o no?? Log in
        this._catalog = new Catalog;
        this._cart = new Cart;
        this._usersList = [];
        this._comments = [];
    }

    getUser() {
        
        return this._user;
    }

    getCart() {

        return this._cart;

    }

    getCatalog() {

        return this._catalog;
    }

    fetchProducts(): void {

        let data = [
            {id:1, name: "Classic Wood Set", maker: "Juan Gabriel", 
            material: "pine", theme : "classic", price: 1234.45, stock: 15, stars: 3, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set.png", buys: 12, guarantee: 1},
            {id:2, name: "Artisan Set", maker: "Ortega Hernán", 
            material: "Caoba", theme : "classic", price: 43289, stock: 11, stars: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-1.png", buys: 12, guarantee: 1},
            {id:3, name: "Azteca set", maker: "Quiroga Juan", 
            material: "mayan stone", theme : "Colonial", price: 2800.67, stock: 11, stars: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-2.png", buys: 12, guarantee: 1},
            {id:4, name: "Iron metal", maker: "Piotr Zwark", 
            material: "iron", theme : "metal", price: 12000, stock: 11, stars: 4
            , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-3.png", buys: 12, guarantee: 1},
            {id:5, name: "Standard Staunton", maker: "Staunton", 
            material: "plastic", theme : "classic", price: 1500, stock: 2, stars: 5
            , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-4.png", buys: 12, guarantee: 1},
            {id:6, name: "Standard", maker: "Royal", 
            material: "plastic", theme : "classic", price: 999.99, stock: 1, stars: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-5.png", buys: 12, guarantee: 1},
            {id:7, name: "Classic Wood Set", maker: "Fancy Chop", 
            material: "pine", theme : "classic", price: 2500.0, stock: 2, stars: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-6.png", buys: 12, guarantee: 1},
            {id:8, name: "Caña Set", maker: "Capablanca", 
            material: "caña", theme : "cuban-style", price: 13900, stock: 2, stars: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "../public/images/chess-sets/chess-set-7.png", buys: 12, guarantee: 1}
        ]
           
        data.forEach((item) => {
            this._catalog.add(ProductFactory.create(item))
        })
    }
    
    fetchUser(newRUser: RegisteredUser) {

        // Include the newly registered user to the list
        this._usersList.push(newRUser);
    }

    getUsers() {

        return this._usersList;

    }

    getComments() {

        return this._comments;

    }

    addComment(c: UserComment) {

        this._comments.push(c);

    }

    loadUsersList() {
        // Load the users list by fetching an api and getting all users
    }

    getNextUserId(): number {

        return this._usersList.length + 1;

    }
}


