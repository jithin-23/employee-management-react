/**
 * Type definitions for the employee domain in the Redux store.
 * This file contains:
 * - Employee data structure and related types (Address, Role, Status)
 * - Redux action types and action interfaces
 * - State interface for the employee slice
 */

export interface Address {
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
}

export interface Department {
  id:number;
  name:string;
}

export const EmployeeRole = {
  UI: "UI",
  UX: "UX",
  DEVELOPER: "DEVELOPER",
  HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PROBATION: "PROBATION",
} as const;

export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
  id:string;
  employeeId: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: Role;
  dateOfJoining: string;
  experience: number;
  status: Status;
  department_id: number | string;
  department: Department;
}

export const EMPLOYEE_ACTION_TYPES = {
  ADD: "employee/ADD",
  DELETE: "employee/DELETE",
  UPDATE: "employee/UPDATE",
} as const;

export type EmployeeActionTypes =
  (typeof EMPLOYEE_ACTION_TYPES)[keyof typeof EMPLOYEE_ACTION_TYPES];

export interface EmployeeState {
  employees: Employee[];
}

export interface AddEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.ADD;
  payload: Employee; 
}

export interface DeleteEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.DELETE;
  payload: string; // employee id
}

export interface UpdateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.UPDATE;
  payload: Employee;
}

export type EmployeeAction = AddEmployeeAction | DeleteEmployeeAction | UpdateEmployeeAction;
