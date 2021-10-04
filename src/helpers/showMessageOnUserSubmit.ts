export default function showMessageOnUserSubmit(referenceId: string, msg: string, style: string) : void {

    let mainDiv : HTMLElement = document.getElementById(referenceId)
                    
    mainDiv.innerHTML += `<div class="${style}">${msg}<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span></div>`  

}