import type { RootState } from "../../redux/types";

export const getStateCategories = (store: RootState) => store.main.categories;