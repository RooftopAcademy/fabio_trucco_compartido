function productItem(product){
    console.log(product)
    return `
    <article class="shop-item">
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
                <button class="comments" type="button" id="button-comments">User's Reviews</button>
            </ul>
        </div>      
        
    </article>
    `
}