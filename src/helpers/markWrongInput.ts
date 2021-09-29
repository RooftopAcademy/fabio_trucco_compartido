export default function markWrongInput(input: string, inputContainer: string): void {
    let wrongInput: HTMLElement | null = document.getElementById(input);
    wrongInput.classList.add('error');
    wrongInput.focus();
  
    let container = document.getElementById(inputContainer)
    container.classList.add('error')
  }
  
