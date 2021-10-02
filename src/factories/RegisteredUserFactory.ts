import RegisteredUser from '../entities/RegisteredUser';
import Store from '../entities/Store';
import RegisteredUserInterface from '../interfaces/RegisteredUserInterface';

export default class RegisteredUserFactory {
    
    static create(store: Store, registeredUser: RegisteredUserInterface) : RegisteredUser {

        let newRUser = new RegisteredUser;

        newRUser.setId(store.getNextUserId());
        
        newRUser.setEmail(registeredUser.email);
        newRUser.setFirstName(registeredUser.firstName);
        newRUser.setLastName(registeredUser.lastName);
        newRUser.setCountry(registeredUser.country);
        newRUser.setChecked(registeredUser.checked)

        newRUser.setNickname(registeredUser.nickname)    
        newRUser.setPhoneNumber(registeredUser.phoneNumber)
        newRUser.setPaymentMethods(registeredUser.paymentMethods)
        newRUser.setPassword(registeredUser.password)

        return newRUser;
    }
}