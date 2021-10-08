export default function runSuccessStylingOnRegisterForm() {

    let containerForm = document.getElementById('container-form') as HTMLElement;
    let submitButton = document.getElementById('submit') as HTMLInputElement;

    containerForm.classList.add('form-success'); 
    submitButton.classList.add('on-submit');

    submitButton.disabled = true;
    
}