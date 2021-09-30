import RUserInterface from '../interfaces/RUserInterface';

export default function readContactFormInputs (): RUserInterface {

    let element = <HTMLInputElement> document.getElementById("checkmail");
    let isChecked: boolean = element.checked;

    return {

        email : (document.getElementById('lmail') as HTMLInputElement).value,
        firstName : (document.getElementById('fname')as HTMLInputElement).value,
        lastName : (document.getElementById('lname')as HTMLInputElement).value,
        country : (document.getElementById('country')as HTMLInputElement).value,
        checked : isChecked,
        nickname: 
        phoneNumber: 
        paymentsMethods: 
        password:        
    }
    
}