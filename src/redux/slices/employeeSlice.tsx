import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as API from "../../api/index";
export interface EmployeeState {
  data: any;
}

const initialState: EmployeeState = {
  data: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    updateEmployeeData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export function getEmployees(dispatch: any) {
  API.fetchEmployees()
    .then((response) => {
      const data = response?.data?.data;
      dispatch(updateEmployeeData(data));
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

interface data {
  name: string;
  phoneNumber: string;
  hourlyRate: number;
  roleIds: number;
}

export async function createEmployees(dispatch: any, data: data) {
  try {
    const response = await API.createEmployees(
      data.name,
      data.phoneNumber,
      data.hourlyRate,
      data.roleIds
    );
    dispatch(updateEmployeeData(response?.data?.data));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const { updateEmployeeData } = employeeSlice.actions;

export const employeeDetails = (state: RootState) => state.employee.data;

export default employeeSlice.reducer;
