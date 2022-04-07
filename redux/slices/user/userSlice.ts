import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "app/store";

export interface userState {
  User: any | null;
  token: string | null;
  isLogged: boolean;
}

const initialState: userState = {
  User: null,
  token: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{ user: any; token: string }>
    ) => {
      state.User = action.payload?.user;
      state.token = action.payload?.token;
      state.isLogged = true;
    },
    logOut: (state) => {
      state.User = null;
      state.token = null;
      state.isLogged = false;
    },
  },
});

export const { setUserData, logOut } = userSlice.actions;

export default userSlice.reducer;
