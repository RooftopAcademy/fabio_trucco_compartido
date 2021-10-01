import multipleChecks from './multipleChecks'
import isChecked from './isChecked'
import RUserInterface from '../interfaces/RUserInterface';


export default function readContactFormInputs (): RUserInterface {

    return {

        email : (document.getElementById('lmail') as HTMLInputElement).value,
        firstName : (document.getElementById('fname')as HTMLInputElement).value,
        lastName : (document.getElementById('lname')as HTMLInputElement).value,
        country : (document.getElementById('country')as HTMLInputElement).value,
        checked : isChecked('checkmail'),
        nickname: (document.getElementById('nick') as HTMLInputElement).value,
        phoneNumber: (document.getElementById('phone') as HTMLInputElement).value,
        paymentMethods: multipleChecks(['credit', 'debit', 'crypto']),
        password: (document.getElementById('password') as HTMLInputElement).value,

    }
    
}