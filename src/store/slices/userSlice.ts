import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  uid: string | null;
  email: string | null;
  emailVerified: boolean | null;
  providerData: object[];
}

const initialState: IUserState = {
  uid: null,
  email: null,
  emailVerified: null,
  providerData: [],
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
