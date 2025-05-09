import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   isLoading: {
  //     movie: false,
  //     genre: false,
  //   },
  movie: {
    isLoading: false,
    isSuccess: false,
    isRejected: false,
  },
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("movie_pending", (state) => {
      state.movie.isLoading = true;
      state.movie.isRejected = false;
      state.movie.isSuccess = false;
    });
  },
});

// export const {} = fetchSlice.actions;
export default fetchSlice.reducer;
