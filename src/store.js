import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./redux/CardSlice";

export default configureStore({
  reducer: {
    card: CardReducer,
  }
});
