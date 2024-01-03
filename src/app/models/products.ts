export interface product {
    id: number,
    name: string,
    price: number,
    nuts: boolean,
    image: string,
    vegeterian: boolean,
    spiciness: number,
    categoryId: number,
}

export interface categoryProducts {
    id: number,
    name: string,
    products: product[]
}

export interface productToBasket {
    quantity: number;
    price: number;
    productId: number;
}

export interface productFromBasket {
    quantity: number;
    price: number;
    product: product;
}
