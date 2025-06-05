export type CreateEmployeeResponse = {
  email: string;
  employee_id: string;
  age: string;
  name: string;
  password: string;
  role: string;
  status: string;
  dateOfJoining: string;
  experience: number;
};

export type CreateEmployePayload = {
  email: string;
  employee_id: string;
  age: number;
  name: string;
  password: string;
  role: string;
  status: string;
  dateOfJoining: string;
  experience: number;
  department_id: number;
  address: {
    line1: string;
    line2: string;
    houseNo: string;
    pincode: string;
  };
};

export type UpdateEmployeeResponse = {
  email: string;
  employee_id: string;
  age: string;
  name: string;
  password: string;
  role: string;
  status: string;
  dateOfJoining: string;
  experience: number;
};

export type UpdateEmployePayload = {
  id: string;
  payload: {
    email: string;
    employee_id: string;
    age: number;
    name: string;
    role: string;
    status: string;
    dateOfJoining: string;
    experience: number;
    department_id: number;
    address: {
      line1: string;
      line2: string;
      houseNo: string;
      pincode: string;
    };
  };
};

