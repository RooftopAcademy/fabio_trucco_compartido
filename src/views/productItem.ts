import Product from "../models/Product"

export default function productItem(product: Product): string{
    return `
    <article class="shop-item" id="shop-item ${product.getId()}">
        <span class="shop-item-name">${product.getName()}</span>
        <img class="shop-item-image" src="images/chess-set.png" alt="CHESS">
        <div class="shop-item-add">
            <span class="shop-item-price">$ ${product.getPrice()}</span>
            <button class="pair-single-btn" role="button" type="button">Add To Cart</button>
        </div>
        <br>
        <div class="shop-item-detail">
            <ul>
                <li>Maker: ${product.getMaker()}</li>
                <li>Material: ${product.getMaterial()}</li>
                <li>Theme: ${product.getTheme()}</li>
                <br>
                <button class="comments-button" type="button" id="comments-button ${product.getId()}" onclick="openComments(this.id)">User's Reviews</button>
            </ul>
        </div> 
        <div class="comments-div" id="comments-div">
            <ul class="comments-list" id="comments-list ${product.getId()}">
                
            </ul>
        </div>
    </article>
    `
}
