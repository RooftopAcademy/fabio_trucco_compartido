import User from '../models/User';
import Store from '../models/Store';
import IUser from '../interfaces/IUser';

export default class UserFactory {
    
    static create(store: Store, userInterface: IUser) : User {

        let newUser = new User;

        newUser.setId(store.getNextUserId());
        newUser.setFirstName(userInterface.firstName);
        newUser.setLastName(userInterface.lastName);
        newUser.setCountry(userInterface.country);
        newUser.setSubject(userInterface.subject);
        newUser.setChecked(userInterface.checked)

        return newUser;
    }
}