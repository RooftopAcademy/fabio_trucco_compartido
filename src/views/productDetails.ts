import Product from "../entities/Product";

export default function productDetails(product: Product) {
    
    let stars: string[] = [
        `<img src='/images/star.png' class='rating-star '>`,
        `<img src='/images/star.png' class='rating-star '>`,
        `<img src='/images/star.png' class='rating-star '>`,
        `<img src='/images/star.png' class='rating-star '>`,
        `<img src='/images/star.png' class='rating-star '>`
    ];
    let active: string = `<img src='/images/star.png' class='rating-star active'>`

    for (let i=0; i< product.getStars(); i++){
        stars[i] = active;
    }
    
    return `
    <div class="up-section">
    <div class="article-image">
        <img class="detail-image" src="${product.getImage()}" alt="CHESS">
    </div>

    <div class="right-column">
        <h3 class="stock">Stock: ${product.getStock()}</h3>
        <br>
        <div class="quantity-buttons">
            <h3 class="amount">Amount</h3>&nbsp;&nbsp;<input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="quantity-input" size="1" >
        </div>
        <br><br>
        <button class="buy-button" onclick="window.location.href='#/cart'" id ="buy-button">Go to cart</button>
        <br><br>
        <div class="features">
            <img  src="../public/images/security.png" alt="safe" class="icon-image">
            <p class="buy-text">Get the product you expected or we'll give you back the money.</p>
        </div>
        <div class="features">
            <img src="../public/images/guarantee.png" alt="guarantee" class="icon-image">
            <p class="buy-text">${product.getGuarantee()} years factory guarantee.</p>
        </div>
    </div>
    <div class="mid-column">
        <h3 class="extra-details">New | ${product.getBuys()} sold</h3>
        <h1 class="product-item-name">${product.getName()}</h1>
        <div class="rating" aria-label="Rating of this item is ${product.getStars()} out of 5">
            ${stars.join('')}
        </div>
        <h1>${product.getPrice()}</h1>
        <br>
        <h4>Must-know details:</h4>
        <ul class="details-list">
            <li class="details-item">Maker: ${product.getMaker()}</li>
            <li class="details-item">Material: ${product.getMaterial()} </li>
            <li class="details-item">Theme: ${product.getTheme()}</li>
        </ul>
    </div>
    </div>
    
    <div class="down-section">
    
        <p class="text">
            ${product.getDescription()}
        </p>
        <br>
        <button class="user-reviews" id="user-reviews-button">
            <h1>User reviews</h1>
            <img class="arrow" id="arrow">
        </button>
        <ul class="reviews${product.getId()} d-none" id="reviews${product.getId()}">

        </ul>
    </div>
    `
}