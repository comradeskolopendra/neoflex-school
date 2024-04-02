import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IShopItem, ICartItem } from "../../types/types";

interface ICategory {
    items: IShopItem[];
    title: string;
}

interface IStore {
    categories: {
        wireless: ICategory;
        wired: ICategory;
    };

    cart: ICartItem[];

    currentItem: IShopItem;
    isModalOpened: boolean;
}

const initialState: IStore = {
    categories: {
        wireless: {
            items: [
                { title: "Apple BYZ S852I", price: 2927, id: 1, rate: 4.7, onSalePrice: 3527 },
                { title: "Apple EarPods", price: 2327, id: 2, rate: 4.5 },
                { title: "Apple EarPods", price: 2327, id: 3, rate: 4.5 },
                { title: "Apple BYZ S852I", price: 2927, id: 4, rate: 4.7 },
                { title: "Apple EarPods", price: 2327, id: 5, rate: 4.5 },
                { title: "Apple EarPods", price: 2327, id: 6, rate: 4.5 },
            ],
            title: "Наушники"
        },
        wired: {
            items: [
                { title: "Apple AirPods", price: 9527, id: 7, rate: 4.7 },
                { title: "GERLAX GH-04", price: 6527, id: 8, rate: 4.7 },
                { title: "BOROFONE BO4", price: 7527, id: 9, rate: 4.7 },
            ],
            title: "Беспроводные наушники"
        }
    },

    cart: [],

    currentItem: {
        id: 0,
        price: 0,
        rate: 0,
        title: ""
    },
    isModalOpened: false
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setCartItem(state, action: PayloadAction<IShopItem>) {
            const addedHeadphone = action.payload;
            const headphone = state.cart.find(element => element.id === addedHeadphone.id);

            if (headphone) {
                headphone.quantity += 1;
            } else {
                state.cart = [...state.cart, { ...addedHeadphone, quantity: 1 }]
            }

            return state;
        },

        removeCartItemOne(state, action: PayloadAction<number>) {
            const headphone = state.cart.find(element => element.id === action.payload)!;

            if (headphone.quantity > 1) {
                headphone.quantity -= 1;
            } else {
                state.cart = [...state.cart.filter(element => element.id !== action.payload)];
            }

            return state;
        },

        removeCartItemAll(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.cart = [...state.cart.filter(item => item.id !== id)];

            return state
        },

        setCurrentItem(state, action: PayloadAction<IShopItem>) {
            state.currentItem = action.payload;
            return state;
        },

        changeModalOpened(state, action: PayloadAction<boolean>) {
            state.isModalOpened = action.payload;

            return state;
        }
    }
})

type StoreActionCreators = typeof mainSlice.actions;
export type StoreActions = ReturnType<StoreActionCreators[keyof StoreActionCreators]>;

export const {
    setCartItem,
    removeCartItemOne,
    removeCartItemAll,
    changeModalOpened,
    setCurrentItem
} = mainSlice.actions;

export default mainSlice.reducer;