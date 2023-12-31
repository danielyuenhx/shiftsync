import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as API from "../../api/index";

export interface ShiftState {
  data: any;
  selectedShift: any;
  calendarShift: string;
  // TO BE REMOVED
  showLogs: boolean;

  // FOR DEMO ONLY
  state: string;
  shiftId: number;
  step: string;
}

const initialState: ShiftState = {
  data: [],
  selectedShift: [],
  calendarShift: "Morning Shift",
  showLogs: false,
  state: "Request",
  shiftId: 1,
  step: "CLICK REQUEST",

  // CLICK REQUEST
  // REQUEST EMPLOYEE
  // PENDING/APPROVED
  // FIND REPLACEMENT
  // REPLACEMENT FOUND

};

export const shiftSlice = createSlice({
  name: "shift",
  initialState,

  reducers: {
    updateState: (state, action: PayloadAction<any>) => {
      state.state = action.payload;
    },
    updateShiftId: (state, action: PayloadAction<any>) => {
      state.shiftId = action.payload;
    },
    updateStep: (state, action: PayloadAction<any>) => {
      state.step = action.payload;
    },
    updateCalendarShift: (state, action: PayloadAction<any>) => {
      state.calendarShift = action.payload;
    },
    setShifts: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    updateShiftData: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, ...action.payload];
    },
    updateSelectedShift: (state, action: PayloadAction<any>) => {
      state.selectedShift = action.payload;
    },
    updateShowLogs: (state, action: PayloadAction<any>) => {
      state.showLogs = action.payload;
    },
  },
});

export function getShifts(dispatch: any) {
  API.fetchShifts()
    .then((response) => {
      const data = response?.data?.data;
      dispatch(setShifts(data));
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export async function createShifts(
  dispatch: any,
  data: {
    name: string;
    startTime: string;
    endTime: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    roles: Array<object>;
  }
) {
  try {
    const response = await API.createShifts(
      data.name,
      data.startTime,
      data.endTime,
      data.monday,
      data.tuesday,
      data.wednesday,
      data.thursday,
      data.friday,
      data.saturday,
      data.sunday,
      data.roles
    );
    const fetched = response?.data?.data;
    dispatch(updateShiftData(fetched));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getShiftsByDate(dispatch: any, data: any) {
  API.fetchShiftByDate(data)
    .then((response) => {
      const data = response?.data?.data;
      console.log(data);
      dispatch(updateSelectedShift(data));
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const {
  setShifts,
  updateShiftData,
  updateSelectedShift,
  updateCalendarShift,
  updateShowLogs,
  updateState,
  updateShiftId,
  updateStep,
} = shiftSlice.actions;

export const shiftDetails = (state: RootState) => state.shift.data;
export const selectedShift = (state: RootState) => state.shift.selectedShift;
export const calendarShift = (state: RootState) => state.shift.calendarShift;
export const showLogs = (state: RootState) => state.shift.showLogs;
export const state = (state: RootState) => state.shift.state;
export const shiftId = (state: RootState) => state.shift.shiftId;
export const step = (state: RootState) => state.shift.step;

export default shiftSlice.reducer;
