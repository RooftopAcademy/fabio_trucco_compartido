import User from './User';

export default class RegisteredUser extends User{

    protected adress: string;
    protected phoneNumber: string;
    protected paymentsMethods: string[];

}