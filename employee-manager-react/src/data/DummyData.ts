import type EmployeeType from "../types/EmployeeType";

//Dummy Data
const dummyEmployees: EmployeeType[] = [
  {
    name: "Micheal Scott",
    empId: "100",
    joinDate: "01-12-2010",
    role: "Regional Manager",
    status: "ACTIVE",
    experience: 8,
  },
  {
    name: "Dwight Schrute",
    empId: "101",
    joinDate: "05-05-2012",
    role: "Assistant to the Regional Manager",
    status: "PROBATION",
    experience: 10,
  },
  {
    name: "Jim Halpert",
    empId: "102",
    joinDate: "05-05-2020",
    role: "Salesman",
    status: "ACTIVE",
    experience: 3,
  },
  {
    name: "Pam Beesly",
    empId: "104",
    joinDate: "03-03-2023",
    role: "Office Adminstrator",
    status: "INACTIVE",
    experience: 2,
  }
];

export default dummyEmployees;
