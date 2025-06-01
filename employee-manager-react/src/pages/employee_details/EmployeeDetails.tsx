import { useParams } from "react-router-dom";
import Header from "../../components/headers/Header";
import dummyEmployees from "../../data/DummyData";
import "./EmployeeDetails.css";
import StatusCell from "../employees/components/status_cell/StatusCell";
import { useSelector } from "react-redux";
import type { Employee } from "../../store/employee/employee.types";

const EmployeeDetails = () => {
  const { id } = useParams();
  // const employees = dummyEmployees;

  // const employee = employees.find((data) => data.empId === id);

  const employees = useSelector((state) => state.employees);
  const employee = employees.find((data: Employee) => data.employeeId === id);

  return (
    <div>
      <Header title="Employee Details" headerBtn="edit" empId={id} />

      {employee && (
        <div className="employee-details-body">
          <div className="details-card">
            <span className="details-card-title">Employee Name</span>
            <span className="details-card-subtitle">{employee.name}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Employee ID</span>
            <span className="details-card-subtitle">{employee.employeeId}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Email</span>
            <span className="details-card-subtitle">{employee.email}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Joining Date</span>
            <span className="details-card-subtitle">
              {employee.dateOfJoining}
            </span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Role</span>
            <span className="details-card-subtitle">{employee.role}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Status</span>
            <StatusCell status={employee.status} />
          </div>

          <div className="details-card">
            <span className="details-card-title">Experience</span>
            <span className="details-card-subtitle">{employee.experience}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Age</span>
            <span className="details-card-subtitle">{employee.age}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Address</span>
            <span className="details-card-subtitle">
              {employee.address.line1},{employee.address.line2},
              {employee.address.houseNo}, {employee.address.pincode}
            </span>
          </div>          

          <div className="details-card">
            <span className="details-card-title">Department</span>
            <span className="details-card-subtitle">
              {employee.departmentId}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
