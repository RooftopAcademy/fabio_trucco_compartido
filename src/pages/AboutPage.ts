import PageInterface from "../interfaces/PageInterface";
import aboutComponent from '../components/aboutComponent';
import displayHamburgerMenu from '../helpers/displayHamburger';


export default class AboutPage implements PageInterface {
    
    render(c: HTMLElement): void {

        c.innerHTML = aboutComponent()
    }

    registerEvents(): void {

        displayHamburgerMenu();

    }

}