import { RootState } from "../../redux/types";

export const getStateCartItems = (store: RootState) => store.main.cart;