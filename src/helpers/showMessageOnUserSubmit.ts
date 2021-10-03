export default function showMessageOnUserSubmit(referenceId: string, msg: string, style: string) : HTMLElement {

    let div: HTMLElement = document.createElement('div');

    div.classList.add(style);  
    let message: Node = document.createTextNode(msg);
    div.appendChild(message);

    return document.getElementsByClassName(referenceId)[0].appendChild(div);  

}