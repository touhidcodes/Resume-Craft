import { createSlice } from "@reduxjs/toolkit";
import { CoverLetterInitialState } from "../../../types/coverLetterTypes";
import coverLetterApi from "./coverLetterApi";

type TInitialState = {
  coverLetter: CoverLetterInitialState | null;
};

const initialState: TInitialState = {
  coverLetter: null,
};

const coverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      coverLetterApi.endpoints.getCoverLetter.matchFulfilled,
      (state, action) => {
        state.coverLetter = action.payload.data;
      }
    );
  },
});

export default coverLetterSlice.reducer;
