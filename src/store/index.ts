import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalToggleReducer from './slices/modalToggleSlice';
import calendarSlice from './slices/calendarSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalToggleReducer,
    calendar: calendarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
