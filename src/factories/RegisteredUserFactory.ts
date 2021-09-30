import RegisteredUser from '../entities/RegisteredUser';
import Store from '../entities/Store';
import RUserInterface from '../interfaces/RUserInterface';

export default class RegisteredUserFactory {
    
    static create(store: Store, registeredUser: RUserInterface) : RegisteredUser {

        let newRUser = new RegisteredUser;

        newRUser.setId(store.getNextUserId());
        
        newRUser.setEmail(registeredUser.email);
        newRUser.setFirstName(registeredUser.firstName);
        newRUser.setLastName(registeredUser.lastName);
        newRUser.setCountry(registeredUser.country);
        newRUser.setChecked(registeredUser.checked)

        newRUser.setNickname(registeredUser.nickname)    
        newRUser.setPhoneNumber(registeredUser.phoneNumber)
        newRUser.setPaymentsMethods(registeredUser.paymentsMethods)
        newRUser.setPassword(registeredUser.password)

        return newRUser;
    }
}