import User from './User';

export default class RegisteredUser extends User{

    protected _adress: string;
    protected _phoneNumber: string;
    protected _paymentsMethods: string[];

    getAdress(): string {
        return this._adress;
    }
    
    setAdress(value: string): void {
        this._adress = value;
    } 

    getPhoneNumber(): string {
        return this._phoneNumber;
    }
    
    setPhoneNumber(value: string): void {
        this._phoneNumber = value;
    }

    getPaymentsMethods(): string[] {
        return this._paymentsMethods;
    }
    
    setPaymentsMethods(value: string[]): void {
        this._paymentsMethods = value;
    }
}