import { createSlice } from "@reduxjs/toolkit";
import { ResumeInitialState } from "../../../types/resumeTypes";
import resumeApi from "./resumeApi";

type TInitialState = {
  resume: ResumeInitialState | null;
  // sectionCompletion: {}
};

const initialState: TInitialState = {
  resume: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateActiveSection: (state, action) => {
      // Ensure state.resume is not null before trying to update
      if (state.resume) {
        const allSections = state.resume.allSection.map((item) =>
          item.name === action.payload.name
            ? { ...item, isActive: !action.payload.isActive }
            : item
        );
        state.resume.allSection = allSections;
      }
    },

    setActiveSections: (state, action) => {
      if (state.resume) {
        state.resume.allSection = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      resumeApi.endpoints.getResumeData.matchFulfilled,
      (state, action) => {
        console.log(action.payload.data);
        state.resume = action.payload.data.resume;
      }
    );
  },
});

export const { updateActiveSection, setActiveSections } = resumeSlice.actions;

export default resumeSlice.reducer;
