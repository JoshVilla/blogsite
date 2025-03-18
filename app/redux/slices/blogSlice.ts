
import { IBlog } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  blog: IBlog | {};
}

const initialState: BlogState = {
  blog: {},
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<IBlog>) => {
      state.blog = action.payload;
    },
    clearBlog: (state) => {
      state.blog = {};
    },
  },
});

export const { setBlog, clearBlog } = blogSlice.actions;
export default blogSlice.reducer;
