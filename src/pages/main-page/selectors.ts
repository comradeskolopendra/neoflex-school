import type { RootState } from "../../redux/types";

export const getStateCategories = (store: RootState) => store.main.categories;
export const getStateIsModalOpened = (store: RootState) => store.main.isModalOpened;
export const getStateFocusedItem = (store: RootState) => store.main.currentItem;