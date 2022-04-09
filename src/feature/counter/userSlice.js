import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User-information",
  initialState: {
    value: []
  },
  reducers: {
    loaddata: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = actions.payload;
      // console.log(state.value)
      // console.log(actions.payload)
    }
  }
});

// Action creators are generated for each case reducer function
export const { loaddata } = userSlice.actions;

export default userSlice.reducer;
