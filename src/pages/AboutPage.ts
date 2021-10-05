import PageInterface from "../interfaces/PageInterface";
import aboutComponent from '../components/aboutComponent';

export default class AboutPage implements PageInterface {
    
    render(c: HTMLElement): void {

        c.innerHTML = aboutComponent()
    }

    registerEvents(d : Document): void {

    }

}