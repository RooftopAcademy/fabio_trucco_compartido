import User from '../entities/User';
import Store from '../entities/Store';
import IUser from '../interfaces/UserInterface';

export default class UserFactory {
    
    static create(store: Store, userInterface: IUser) : User {

        let newUser = new User;

        newUser.setId(store.getNextUserId());
        newUser.setEmail(userInterface.email);
        newUser.setFirstName(userInterface.firstName);
        newUser.setLastName(userInterface.lastName);
        newUser.setCountry(userInterface.country);
        newUser.setSubject(userInterface.subject);
        newUser.setChecked(userInterface.checked)

        return newUser;
    }
}