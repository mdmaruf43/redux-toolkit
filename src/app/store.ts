import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerFoodReducer from "../features/customerSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customerFood: customerFoodReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;