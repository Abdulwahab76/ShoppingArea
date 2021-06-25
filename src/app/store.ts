import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
