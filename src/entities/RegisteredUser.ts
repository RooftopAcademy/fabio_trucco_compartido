import User from './User';

export default class RegisteredUser extends User{

    protected _nickname: string
    protected _phoneNumber: string;
    protected _paymentsMethods: string[];
    protected _password: string;

    getNickname(): string {
        return this._nickname;
    }
    
    setNickname(value: string): void {
        this._nickname = value;
    }

    getPhoneNumber(): string {
        return this._phoneNumber;
    }
    
    setPhoneNumber(value: string): void {
        if (value.length < 12 || typeof value != "string"){
            throw "phoneNumberError"
        }
        this._phoneNumber = value;
    }

    getPaymentsMethods(): string[] {
        return this._paymentsMethods;
    }
    
    setPaymentsMethods(value: string[]): void {
        this._paymentsMethods = value;
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