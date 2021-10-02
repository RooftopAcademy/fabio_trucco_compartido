import Product from "../entities/Product";

export default class ProductFactory{
    static create(obj: {
        id: number, 
        name: string,
        maker: string, 
        material: string, 
        theme: string, 
        price: number,
        stock: number,
        stars: number,
        description: string,
        image: string,
        buys: number,
        guarantee: number}): Product {

        let product = new Product;

        product.setId(obj['id'])
        product.setName(obj['name'])
        product.setMaker(obj['maker'])
        product.setMaterial(obj['material'])
        product.setTheme(obj['theme'])
        product.setPrice(obj['price'])
        product.setStock(obj['stock'])
        product.setStars(obj['stars'])
        product.setDescription(obj['description'])
        product.setImage(obj['image'])
        product.setBuys(obj['buys'])
        product.setGuarantee(obj['guarantee'])

        return product;
    }
}