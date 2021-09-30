import RegisteredUser from '../entities/RegisteredUser';
import Store from '../entities/Store';
import IUser from '../interfaces/UserInterface';

export default class RegisteredUserFactory {
    
    static create(store: Store, userInterface: IUser) : RegisteredUser {

        let newRUser = new RegisteredUser;

        newRUser.setId(store.getNextUserId());
        
        newRUser.setEmail(userInterface.email);
        newRUser.setFirstName(userInterface.firstName);
        newRUser.setLastName(userInterface.lastName);
        newRUser.setCountry(userInterface.country);
        newRUser.setSubject(userInterface.subject);
        newRUser.setChecked(userInterface.checked)

        return newRUser;
    }
}