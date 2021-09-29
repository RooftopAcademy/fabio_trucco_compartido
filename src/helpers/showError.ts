import markWrongInput from "./markWrongInput";

export default function showError(input: string, inputContainer: string, message: string): void {

    alert(message)
    
    markWrongInput(input, inputContainer);
    
}