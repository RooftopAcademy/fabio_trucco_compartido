export default function isCheckBoxCheked(checkId: string) : boolean { 

    let element = <HTMLInputElement> document.getElementById(checkId);
    return element.checked;
    
}