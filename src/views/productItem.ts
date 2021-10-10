import Product from "../entities/Product"

export default function productItem(product: Product): string{
    return `
    <article class="shop-item" id="shop-item ${product.getId()}">
        <span class="shop-item-name">${product.getName()}</span>
        <picture class="shop-item-img" id="shop-item-image ${product.getId()}"><img class="shop-item-image" src="${product.getImage()}" alt="CHESS"></picture>
        <div class="shop-item-add">
            <span class="shop-item-price">$ ${product.getPrice()}</span>
            <button class="pair-single-btn" role="button" type="button" data-id="${product.getId()}">Add To Cart</button>
        </div>
        <br>
    </article>
    `
}
