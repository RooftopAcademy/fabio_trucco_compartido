import UserComment from "./UserComment"

export default class Product{
    protected id: number
    protected name: string
    protected maker: string
    protected material: string
    protected theme: string
    protected price: number
    protected description: string
    protected image: string
    protected buys: number

    constructor(){
        this.id = null;
        this.name = "";  //Título del juego
        this.maker = "";  // Fabricante o marca
        this.material = '';
        this.theme = '';  //Temática: clásica, españoles contra incas, guerreros, geométrico etc.
        this.price = null;
        this.description = "";
        this.image = ""
        this.buys = null;
    }
    getId(){
        return this.id;
    }
    setId(value: number){
        return this.id = value;
    }
    getName(){
        return this.name;
    }
    setName(value: string){
        return this.name = value;
    }

    getMaker(){
        return this.maker;
    }

    setMaker(value: string){
        return this.maker = value;
    }

    getMaterial(){
        return this.material;
    }

    setMaterial(value: string){
        return this.material = value;
    }

    getTheme(){
        return this.theme;
    }

    setTheme(value: string){
        return this.theme = value;
    }

    getPrice(){
        return this.price;
    }

    setPrice(value: number){
        return this.price = value;
    }

    getDescription(){
        return this.description;
    }

    setDescription(value:string){
        return this.description = value
    }
    getImage(){
        return this.image;
    }
    setImage(value: string){
        return this.image = value;
    }
    getBuys(){
        return this.buys;
    }
    setBuys(value: number){
        return this.buys = value;
    }
    public newBuy() {
        return this.buys++;
    }
}

