import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as API from "../../api/index";

export interface RoleState {
  data: any;
}

const initialState: RoleState = {
  data: [],
};

export const roleSlice = createSlice({
  name: "role",
  initialState,

  reducers: {
    updateRoleData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export function getRoles(dispatch: any) {
  API.fetchRoles()
    .then((response) => {
      const data = response?.data?.data;
      dispatch(updateRoleData(data));
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

interface data {
  name: string;
}

export function createRoles(dispatch: any, data: data) {
  API.createRoles(data.name)
    .then((response) => {
      const data = response?.data?.data;
      dispatch(updateRoleData(data));
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const { updateRoleData } = roleSlice.actions;

export const roleDetails = (state: RootState) => state.role.data;

export default roleSlice.reducer;
