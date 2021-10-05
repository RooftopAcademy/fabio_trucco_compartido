import PageInterface from "../interfaces/PageInterface";
import signUpComponent from '../components/signUpComponent'

export default class SignUpPage implements PageInterface{

    render(c: HTMLElement): void {
        c.innerHTML = signUpComponent();
    }

    registerEvents(d : Document): void {

    }

}