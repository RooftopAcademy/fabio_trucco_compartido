import Cart from './Cart'
import Catalog from './Catalog'
import InvitedUser from './InvitedUser'
import RegisteredUser from './RegisteredUser'
import UserComment from './UserComment';
import ProductInterface from '../interfaces/ProductInterface';
import ProductFactory from '../factories/ProductFactory';

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

    async fetchProducts() {

        let baseUrl = 'http://localhost:3500/api/data';

        let res = await fetch(baseUrl);
        let json: ProductInterface[] = await res.json();
                
        if (!res.ok) { throw new Error("algo salió mal") }
    
        json.forEach((item) => {
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


