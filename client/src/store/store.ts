import { configureStore } from '@reduxjs/toolkit'
import regSlice from "./reducers/registration-reducer";
export const store = configureStore({
    reducer: {
        registration: regSlice,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch