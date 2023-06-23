import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State =
  | "START"
  | "REQUEST"
  | "PENDING"
  | "SOMEPENDING"
  | "FINAL"
  | "ALGORITHM"
  | "APPROVAL"
  | "COMPLETED"
  | "DOWNLOAD"
  | "REJECTED";

export interface DemoState {
  state: State;
  shift: "MORNING" | "AFTERNOON" | "FULL-DAY";
}

const initialState: DemoState = {
  state: "REQUEST",
  shift: "MORNING",
};

export const demoSlice = createSlice({
  name: "demo",
  initialState,

  reducers: {
    updateState: (state, action: PayloadAction<State>) => {
      state.state = action.payload;
    },
    updateShift: (state, action: PayloadAction<any>) => {
      state.shift = action.payload;
    },
  },
});

export const { updateState, updateShift } = demoSlice.actions;

export const stateData = (state: RootState) => state.demo.state;
export const shiftData = (state: RootState) => state.demo.shift;

export default demoSlice.reducer;
