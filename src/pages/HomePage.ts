import PageInterface from "../interfaces/PageInterface";
import homeComponent from "../components/homeComponent";

export default class HomePage implements PageInterface{

    render (c: HTMLElement): void {
        c.innerHTML = homeComponent();
    }

    registerEvents (d : Document): void {

    }

}


