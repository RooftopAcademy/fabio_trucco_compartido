export default class Product{
    protected id: number
    protected pName: string
    protected maker: string
    protected material: string
    protected theme: string
    protected price: number
    protected stock: number
    protected stars: number
    protected description: string
    protected image: string
    protected buys: number
    protected guarantee: number

    getId(){
        return this.id;
    }
    setId(value: number){
        return this.id = value;
    }
    getName(){
        return this.pName;
    }
    setName(value: string){
        return this.pName = value;
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

    getStock(){
        return this.stock;
    }

    setStock(value: number){
        return this.stock = value;
    }

    getStars(){
        return this.stars;
    }

    setStars(value: number){
        return this.stars = value;
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

    getGuarantee(){
        return this.guarantee;
    }
    setGuarantee(value: number){
        return this.guarantee = value;
    }

    public newBuy() {
        return this.buys++;
    }
}

