class ProductFactory{
    static create(obj){
        let product = new Product;

        product.setId(obj.id)
        product.setName(obj.name)
        product.setMaker(obj.maker)
        product.setMaterial(obj.material)
        product.setTheme(obj.theme)
        product.setPrice(obj.price)

        return product;
    }

}