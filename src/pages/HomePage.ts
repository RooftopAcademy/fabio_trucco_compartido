import PageInterface from "../interfaces/PageInterface";

export default class HomePage implements PageInterface{

    render (c: HTMLElement): void {
        c.innerHTML = 'HomePage'
    }

    registerEvents (d : Document): void {

    }

}


