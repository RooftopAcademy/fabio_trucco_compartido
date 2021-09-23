function productsList(products: Product[]): string[]{
    return products.map((product) => productItem(product));
    }
