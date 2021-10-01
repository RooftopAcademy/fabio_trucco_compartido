import User from './User';

export default class RegisteredUser extends User{

    protected _nickname: string
    protected _phoneNumber: string;
    protected _paymentMethods: string[];
    protected _password: string;

    getNickname(): string {
        return this._nickname;
    }
    
    setNickname(value: string): void {
        if (value.length == 0){
            throw 'nickname error'
        }
        this._nickname = value;
    }

    getPhoneNumber(): string {
        return this._phoneNumber;
    }
    
    setPhoneNumber(value: string): void {
        if ( value.length < 12 ){
            throw "phoneNumberError"
        }
        this._phoneNumber = value;
    }

    getPaymentMethods(): string[] {
        return this._paymentMethods;
    }
    
    setPaymentMethods(value: string[]): void {
        if (value.length == 0){
            throw 'paymentMethodsError'
        }
        this._paymentMethods = value;
    }

    getPassword(): string {
        return this._password;
    }
    
    setPassword(value: string): void {
        if (value.length < 6){
            throw "passwordError";
        }
        this._password = value;
    }
}