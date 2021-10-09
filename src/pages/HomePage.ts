import PageInterface from "../interfaces/PageInterface";
import homeComponent from "../components/homeComponent";
import displayHamburgerMenu from '../helpers/hamburger';

export default class HomePage implements PageInterface{

    render (c: HTMLElement): void {
        c.innerHTML = homeComponent();
    }

    registerEvents (): void {

        displayHamburgerMenu();

    }

}


