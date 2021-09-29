export default function markWrongInput(input: string, inputContainer: string): void {
    let wrongInput: HTMLElement | null = document.getElementById(input);
    wrongInput.style.border = "2px solid red";
    wrongInput.focus();
  
    let container = document.getElementById(inputContainer)
    container.style.border = "2px solid red";
  }
  
