import Header from "../../components/headers/Header";
import "./Employees.css";

import TableRow from "./components/table_row/TableRow";
import type EmployeeType from "../../types/EmployeeType";
import dummyEmployees from "../../data/DummyData";

const Employees = () => {
  const employees: EmployeeType[] = dummyEmployees;

  return (
    <div className="employees-body">
      <Header title="Employee List" filterby={true} headerBtn={"create"} />

      <table className="list-table">
        <thead className="list-table-header">
          <tr>
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
          {employees.map((employee: EmployeeType) => (
            <TableRow
              name={employee.name}
              id={employee.empId}
              joinDate={employee.joinDate}
              role={employee.role}
              status={employee.status}
              experience={JSON.stringify(employee.experience)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;