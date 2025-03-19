import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};
const getUsersThunk = createAsyncThunk("GET_USERS", async (_, { rejectWithValue }) => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error);
    // ditangani via action.payload & action.error.message
    return error;
    // ditangani via action.error
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser: (state, { payload }) => {
      state.data[payload.id] = payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload || error;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      });
  },
});

export const userAction = {
  ...usersSlice.actions,
  getUsersThunk,
};
export default usersSlice.reducer;
