export default function successMessageOnUserSubmit(): void {

    let div: HTMLElement = document.createElement('div');
    div.innerHTML = "&#10003;&nbsp;&nbsp;";
    div.classList.add('success-message');
    let message: Node = document.createTextNode("Great! We have sent you an e-mail to confirm your account");
    div.appendChild(message);

}