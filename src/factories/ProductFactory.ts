import Product from "../entities/Product";
import ProductInterface from "../interfaces/ProductInterface";

export default class ProductFactory{
    static create(obj: ProductInterface): Product {

        let product = new Product;

        product.setId(obj['id'])
        product.setName(obj['pName'])
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