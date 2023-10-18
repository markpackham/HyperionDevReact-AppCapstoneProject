import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Guest",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state) => {
      state.userName = "";
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
