import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  name: string;
  username: string;
  id: string;
  image: string;
}

const initialState: IinitialState = {
  name: "",
  username: "",
  id: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (user, action: PayloadAction<IinitialState>): IinitialState => ({
      ...action.payload,
    }),
  },
});

export const { logIn: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
