import Product from "../models/Product";

export default class ProductFactory{
    static create(obj: {
        id: number, 
        name: string,
        maker: string, 
        material: string, 
        theme: string, 
        price: number}): Product {

        let product = new Product;

        product.setId(obj['id'])
        product.setName(obj['name'])
        product.setMaker(obj['maker'])
        product.setMaterial(obj['material'])
        product.setTheme(obj['theme'])
        product.setPrice(obj['price'])

        return product;
    }
}