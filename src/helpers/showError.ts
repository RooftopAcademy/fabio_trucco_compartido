import showMessageOnUserSubmit from './showMessageOnUserSubmit';
import markWrongInput from "./markWrongInput";

export default function showError(input: string, inputContainer: string, message: string): void {

    
    /**
     * The label containers ids are constructed by the word 'label' + '-' + 'inputId'
     */

    let labelContainerId = `label-${input}`;
    let styleClassName = 'input-error';

    showMessageOnUserSubmit(labelContainerId, message, styleClassName)
    
    markWrongInput(input, inputContainer);
    
}