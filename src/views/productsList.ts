import productItem from "./productItem";
import Product from "../models/Product";

export default function productsList(products: Product[]): string[]{
    return products.map((product) => productItem(product));
}

