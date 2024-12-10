import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalToggleReducer from './slices/modalToggleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
