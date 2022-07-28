import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  receipts: [],
};

export const receiptsSlice = createSlice({
  name: "receipts",
  initialState,
  reducers: {
    addReceipts: (state, action) => {
      state.receipts.push(action.payload);
    },
  },
});

export const { addReceipts } = receiptsSlice.actions;
export default receiptsSlice.reducer;
