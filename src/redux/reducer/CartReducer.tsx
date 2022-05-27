import { Action, ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { log } from 'console';

const initialState = {
    carts: [
        {id: "1", name: "Iphone", price: 1000, img: "https://i.pravatar.cc?u=1", quantity: 2},
    ]
}

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
      deleteProduct : (state,action) =>{
        state.carts = state.carts.filter(item => item.id !== action.payload)
      }
  }
});

export const {deleteProduct} = CartReducer.actions

export default CartReducer.reducer