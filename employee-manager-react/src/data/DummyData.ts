import type EmployeeType from "../types/EmployeeType";

//Dummy Data
const dummyEmployees: EmployeeType[] = [
  {
    name: "Micheal Scott",
    empId: "E100",
    joinDate: "01-12-2010",
    role: "Regional Manager",
    status: "ACTIVE",
    experience: 8,
  },
  {
    name: "Dwight Schrute",
    empId: "E101",
    joinDate: "05-05-2012",
    role: "Assistant to the Regional Manager",
    status: "PROBATION",
    experience: 10,
  },
  {
    name: "Jim Halpert",
    empId: "E102",
    joinDate: "05-05-2020",
    role: "Salesman",
    status: "ACTIVE",
    experience: 3,
  },
  {
    name: "Pam Beesly",
    empId: "E103",
    joinDate: "03-03-2023",
    role: "Office Adminstrator",
    status: "INACTIVE",
    experience: 2,
  }
];

export default dummyEmployees;
