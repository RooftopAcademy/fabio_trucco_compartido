class Product{
    constructor(){
        this.id = Number;
        this.name = String;  //Título del juego
        this.maker = String;  // Fabricante o marca
        this.material = String;
        this.theme = String;  //Temática: clásica, españoles contra incas, guerreros, geométrico etc.
        this.price = Number;
    }
    getId(){
        return this.id;
    }
    setId(value){
        return this.id = value;
    }
    getName(){
        return this.name;
    }
    setName(value){
        return this.name = value;
    }

    getMaker(){
        return this.maker;
    }
    setMaker(value){
        return this.maker = value;
    }

    getMaterial(){
        return this.material;
    }
    setMaterial(value){
        return this.material = value;
    }
    getTheme(){
        return this.theme;
    }
    setTheme(value){
        return this.theme = value;
    }
    getPrice(){
        return this.price;
    }
    setPrice(value){
        return this.price = value;
    }

}