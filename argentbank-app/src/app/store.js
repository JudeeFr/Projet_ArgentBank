import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from '../reducers/login.reducer'
import { userReducer } from '../reducers/user.reducer'

export default configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  },
});