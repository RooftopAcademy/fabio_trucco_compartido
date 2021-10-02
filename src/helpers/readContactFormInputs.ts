import multipleChecks from './multipleChecks'
import isCheckBoxChecked from './isCheckBoxChecked'
import RegisteredUserInterface from '../interfaces/RegisteredUserInterface';


export default function readContactFormInputs (): RegisteredUserInterface {

    return {

        email : (document.getElementById('lmail') as HTMLInputElement).value,
        firstName : (document.getElementById('fname')as HTMLInputElement).value,
        lastName : (document.getElementById('lname')as HTMLInputElement).value,
        country : (document.getElementById('country')as HTMLInputElement).value,
        checked : isCheckBoxChecked('checkmail'),
        nickname: (document.getElementById('nick') as HTMLInputElement).value,
        phoneNumber: (document.getElementById('phone') as HTMLInputElement).value,
        paymentMethods: multipleChecks(['credit', 'debit', 'crypto']),
        password: (document.getElementById('password') as HTMLInputElement).value,

    }
    
}