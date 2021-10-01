export default function isCheked(checkId: string) : boolean { 

    let element = <HTMLInputElement> document.getElementById(checkId);
    return element.checked;
    
}