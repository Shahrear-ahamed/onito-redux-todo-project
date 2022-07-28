import { configureStore } from "@reduxjs/toolkit";
import receiptsReducer from "./features/ReceiptSlice";

export const store = configureStore({
  reducer: {
    receipts: receiptsReducer,
  },
});
