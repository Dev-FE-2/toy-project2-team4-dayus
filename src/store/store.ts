import { auth } from '@/apis/firebase/auth';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';

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

const userStore = configureStore({ reducer: userSlice.reducer });

export type RootState = ReturnType<typeof userStore.getState>;

export const { setUser, clearUser } = userSlice.actions;
export default userStore;

export const initializeAuth = (): Promise<void> => {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) {
        userStore.dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            providerData: user.providerData,
          }),
        );
      } else {
        userStore.dispatch(clearUser());
      }
      resolve();
    });
  });
};
