import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    refreshToken: "",
    info: {},
    email: "",
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
    getAccessToken: (state, action) => {
      state.token = action.payload;
      return state;
    },

    login: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state.info = {};
      state.token = "";
      state.refreshToken = "";
      return state;
    },
    updateProfile: (state, action) => {
      state.info = { ...state.info, ...action.payload };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveEmail,
  removeEmail,
  login,
  logout,
  getAccessToken,
  updateProfile,
} = userSlice.actions;
export default userSlice.reducer;
