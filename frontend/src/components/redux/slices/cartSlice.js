import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const { _id } = action.payload;
      const existingItem = state.find(item => item._id === _id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Set quantity to 1 for new items
      }
    },
    removeItem(state, action) {
      return state.filter(item => item._id !== action.payload);
    },
    increaseQuantity(state, action) {
      const { _id } = action.payload;
      const item = state.find(item => item._id === _id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const { _id } = action.payload;
      const itemIndex = state.findIndex(item => item._id === _id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          return state.filter(item => item._id !== _id);
        }
      }
    },
    deleteAllItems(state,action){
        return []
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, increaseQuantity, decreaseQuantity,deleteAllItems } = cartSlice.actions;
