import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../src/features/user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});