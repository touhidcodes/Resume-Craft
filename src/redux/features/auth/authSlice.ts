import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../../types";

const initialState: TAuthState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
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
