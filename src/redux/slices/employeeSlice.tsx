import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks/hooks";

export interface EmployeeState {
  employeeId: string;
}

const initialState: EmployeeState = {
  employeeId: "testing employee",
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    updateEmployeeData: (state, action: PayloadAction<string>) => {
      state.employeeId = action.payload;
    },
  },
});

export async function fetchEmployee(): Promise<any> {
  const dispatch = useAppDispatch();
  try {
    // Retrieve the data from the API
    // Insert the data into the store
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const { updateEmployeeData } = employeeSlice.actions;

export const employeeDetails = (state: RootState) => state.employee.employeeId;

export default employeeSlice.reducer;
