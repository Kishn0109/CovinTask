import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./feature/counter/userSlice";

export default configureStore({
  reducer: {
    User: UserReducer
  }
});
