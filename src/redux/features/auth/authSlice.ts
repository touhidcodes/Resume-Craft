import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../../types";

const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logout: (state) => {
      (state.token = null), (state.user = null);
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const userCurrentToken = (state: any) => state.auth.token;
export const userCurrentUser = (state: any) => state.auth.user;

export default authSlice.reducer;
