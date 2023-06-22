import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";
import shiftReducer from "./slices/shiftSlice";
import roleReducer from "./slices/roleSlice";
import demoReducer from "./slices/demoSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    shift: shiftReducer,
    role: roleReducer,
    demo: demoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
