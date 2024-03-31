import { rootReducer } from "./index";
import { StoreActions } from "./store/store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch<TReturned = void> = (action: StoreActions) => TReturned;