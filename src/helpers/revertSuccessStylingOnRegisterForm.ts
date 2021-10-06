export default function revertSuccessStylingOnRegisterForm() {
    
    document.getElementsByClassName("success-message")[0].remove();

    let containerForm = document.getElementById('container-form') as HTMLElement;
    let submitButton = document.getElementById('submit') as HTMLInputElement;

    containerForm.classList.remove('form-success'); 
    containerForm.classList.remove('error'); 
    submitButton.classList.remove('on-submit');

    submitButton.disabled = false;

}