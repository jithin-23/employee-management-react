import { createSlice } from "@reduxjs/toolkit";
import type { Department, DepartmentState } from "./department.types";

const initialState: DepartmentState = {
  departments: []
};

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
});

export default departmentSlice.reducer;
