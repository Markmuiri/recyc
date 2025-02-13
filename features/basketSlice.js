import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);

export const selectEstimateTotal = (state, id) =>
  state.basket.items.reduce(
    (total, item) =>
      (total +=
        (item.estimatedPoint +
          item.additionalPoints1 +
          item.additionalPoints2) *
        item.amount),
    0
  );

export default basketSlice.reducer;