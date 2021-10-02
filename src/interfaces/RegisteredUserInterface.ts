export default interface RegisteredUserInterface {

    email: string,
    firstName: string,
    lastName: string,
    country: string,
    checked: boolean,
    nickname: string,
    phoneNumber: string,
    paymentMethods: string[],
    password: string

}