import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    refreshToken: "",
    avatarUrl: "",
    fullName: "",
    email: "",
    roles: [],
  },
  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
      return state;
    },
    removeEmail: (state) => {
      state.email = "";
      return state;
    },
    // getAccessToken: (state, action) => {
    //   state.token = action.payload;
    //   return state;
    // },

    login: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.email = "";
      state.roles = [];

      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveEmail, removeEmail, login, logout } = userSlice.actions;
export default userSlice.reducer;
