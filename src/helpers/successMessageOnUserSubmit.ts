export default function successMessageOnUserSubmit(): HTMLElement {

    let div: HTMLElement = document.createElement('div');
    div.innerHTML = "&#10003;&nbsp;&nbsp;";
    div.classList.add('success-message');
    let message: Node = document.createTextNode("Great! We have sent you an e-mail to confirm your account");
    div.appendChild(message);

    return document.getElementsByClassName('submit-click')[0].appendChild(div);

}