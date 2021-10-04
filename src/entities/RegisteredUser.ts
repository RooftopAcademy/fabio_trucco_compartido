import UserInputError from './UserInputError';
import User from './User';

export default class RegisteredUser extends User {

    protected _nickname: string
    protected _phoneNumber: string;
    protected _paymentMethods: string[];
    protected _password: string;

    getNickname(): string {
        return this._nickname;
    }
    
    /**
     * If a setter throws is faulty it throws an InputError
     * with info to be rendered
     */

    setNickname(value: string): void {
        if (value.length == 0){
            throw new UserInputError('nick', 'container-form', 'Enter a valid nickname')
        }
        this._nickname = value;
    }

    getPhoneNumber(): string {
        return this._phoneNumber;
    }
    
    setPhoneNumber(value: string): void {
        if ( value.length < 12 ){
            throw new UserInputError('phone', 'container-form', 'Enter a valid phone number')
        }
        this._phoneNumber = value;
    }

    getPaymentMethods(): string[] {
        return this._paymentMethods;
    }
    
    setPaymentMethods(value: string[]): void {
        if (value.length == 0){
            throw new UserInputError('credit', 'container-form', 'You have to choose at least one payment method')
        }
        this._paymentMethods = value;
    }

    getPassword(): string {
        return this._password;
    }
    
    setPassword(value: string): void {
        if (value.length < 6){
            throw new UserInputError('password', 'container-form', 'Choose a valid password')
        }
        this._password = value;
    }
}