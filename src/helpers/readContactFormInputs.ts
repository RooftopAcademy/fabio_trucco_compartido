import IUser from '../interfaces/UserInterface';

export default function readContactFormInputs (): IUser {

    let element = <HTMLInputElement> document.getElementById("checkmail");
    let isChecked: boolean = element.checked;

    return {

       email : (document.getElementById('lmail') as HTMLInputElement).value,
       firstName : (document.getElementById('fname')as HTMLInputElement).value,
       lastName : (document.getElementById('lname')as HTMLInputElement).value,
       country : (document.getElementById('country')as HTMLInputElement).value,
       subject : (document.getElementById('subject')as HTMLInputElement).value,
       checked : isChecked
       
    }
    
}