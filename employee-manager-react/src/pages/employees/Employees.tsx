import Header from "../../components/headers/Header";
import "./Employees.css";

import TableRow from "./components/table_row/TableRow";
import type EmployeeType from "../../types/EmployeeType";
import dummyEmployees from "../../data/DummyData";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store, { useAppDispatch, useAppSelector } from "../../store/store";
import type {
  Employee,
  EmployeeState,
} from "../../store/employee/employee.types";
import { useGetEmployeesQuery } from "../../api-service/employees/employees.api";

const Employees = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  // const data = useSelector(state => state.employees)
  // const data = useAppSelector((state) => state.employee.employees);

  // const employees: Employee[] = data;
  // const employees: EmployeeType[] = dummyEmployees;

  // const {data:employees} = useGetEmployeesQuery({});
  const { data = [] } = useGetEmployeesQuery({});
  const employees = data;
  // console.log(employees)

  const filteredEmployees = status
    ? employees.filter((employee: Employee) => employee.status === status)
    : employees;

  return (
    <div className="employees-body">
      <Header title="Employee List" filterby={true} headerBtn={"create"} />

      <table className="list-table">
        <thead>
          <tr className="list-table-header">
            <th className="list-table-column">Employee Name</th>
            <th className="list-table-column">Employee ID</th>
            <th className="list-table-column">Joining Date</th>
            <th className="list-table-column">Role</th>
            <th className="list-table-column">Status</th>
            <th className="list-table-column">Experience</th>
            <th className="list-table-column">Actions</th>
          </tr>
        </thead>

        <tbody className="list-table-body">
          {filteredEmployees.map((employee: Employee) => (
            <TableRow
              key={employee.id}
              id={employee.id}
              name={employee.name}
              employee_id={employee.employeeId}
              joinDate={
                // new Date(employee.dateOfJoining).toString()
                new Date(employee.dateOfJoining).toDateString()
              }
              role={employee.role}
              status={employee.status}
              experience={employee.experience.toString()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
