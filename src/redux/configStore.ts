import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './reducer/CartReducer'
export const store = configureStore({
  reducer: {
    CartReducer
  },
})


export type RootState = ReturnType<typeof store.getState>