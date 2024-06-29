import { configureStore } from '@reduxjs/toolkit'
import commonSliceReducer from './slices/commonSlice'

export const store = configureStore({
    reducer: commonSliceReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
})