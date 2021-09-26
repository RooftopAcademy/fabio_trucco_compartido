import Product from "../models/Product"

export default function productItem(product: Product): string{
    return `
    <article class="shop-item" id="shop-item ${product.getId()}">
        <span class="shop-item-name">${product.getName()}</span>
        <a href="details.html" id="shop-item-image"><img class="shop-item-image" src="${product.getImage()}" alt="CHESS"></a>
        <div class="shop-item-add">
            <span class="shop-item-price">$ ${product.getPrice()}</span>
            <button class="pair-single-btn" role="button" type="button">Add To Cart</button>
        </div>
        <br>
    </article>
    `
}
