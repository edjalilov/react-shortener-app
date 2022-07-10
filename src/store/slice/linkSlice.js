import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    const response = await fetch(BASE_URL + url, { method: "POST" });
    return await response.json();
  }
);

const initialState = {
  items: [],
  loading: "idle",
};

const linkSlice = createSlice({
  name: "links",
  initialState,
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = "rejected";
    },
    [createShortLink.pending]: (state) => {
      state.loading = "loading";
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;
      state.loading = "idle";
      if (ok) {
        state.items.push(result);
        state.loading = "idle";
      } else {
        state.loading = "error";
      }
    },
  },
});

export const selectLoading = state => state.links.loading;
export const selectLinks = state => state.links.items;
export default linkSlice.reducer;
