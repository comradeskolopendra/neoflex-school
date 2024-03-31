export interface IShopItem {
    title: string;
    rate: number;
    price: number;
    onSalePrice?: number;
    id: number;
}

export interface ICartItem extends IShopItem {
    quantity: number;
}
