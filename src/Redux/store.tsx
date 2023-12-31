import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './slices/filterSlice';
import orderSliceReducer from './slices/orderSlice';
import confirmationSlice from './slices/confirmationSlice';


export const store = configureStore({
  reducer: {
    flyTicketFilter: filterSliceReducer,
    orderTicketData: orderSliceReducer,
    confirmationData: confirmationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
