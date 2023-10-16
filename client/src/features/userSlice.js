import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { data: {}, isLogin: false },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const user = action.payload;
      state.user.data = user;
      state.user.isLogin = true;
    },
    deleteUser: (state, action) => {
      state.user.data = {};
      state.user.isLogin = false;
    },
  },
});

export const { saveUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
