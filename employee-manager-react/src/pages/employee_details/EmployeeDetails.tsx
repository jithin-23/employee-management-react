import { useParams } from "react-router-dom";
import Header from "../../components/headers/Header";
import dummyEmployees from "../../data/DummyData";
import "./EmployeeDetails.css";
import StatusCell from "../employees/components/status_cell/StatusCell";

const EmployeeDetails = () => {
  const { id } = useParams();
  const employees = dummyEmployees;

  const employee = employees.find((data) => data.empId === id);

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
            <span className="details-card-subtitle">{employee.empId}</span>
          </div>

          <div className="details-card">
            <span className="details-card-title">Joining Date</span>
            <span className="details-card-subtitle">{employee.joinDate}</span>
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
            <span className="details-card-subtitle">
              {employee.experience}
            </span>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default EmployeeDetails;
