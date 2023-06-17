import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// SHIFTS API
export const fetchShifts = () => API.get(`/shifts`);
export const fetchShiftByDate = (date: string) => API.get(`/shifts/${date}`);
export const createShifts = (
  name: string,
  startTime: string,
  endTime: string,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean,
  roles: Array<object>
) =>
  API.post(`/shifts`, {
    name: name,
    startTime: startTime,
    endTime: endTime,
    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday,
    sunday: sunday,
    roles: roles,
  });

// EMPLOYEE API
export const fetchEmployees = () => API.get(`/employees`);
export const createEmployees = (
  name: string,
  phoneNumber: string,
  hourlyRate: number,
  roleIds: number
) =>
  API.post(`/employees`, {
    name: name,
    phoneNumber: phoneNumber,
    hourlyRate: hourlyRate,
    roleIds: roleIds,
  });

// ROLE API
export const fetchRoles = () => API.get(`/roles`);
export const createRoles = (name: string) =>
  API.post(`/roles`, {
    name: name,
  });
