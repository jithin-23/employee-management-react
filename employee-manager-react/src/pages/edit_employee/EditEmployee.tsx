import { useParams } from "react-router-dom";
import EmployeeForm from "../../components/employee_form/EmployeeForm";
import Header from "../../components/headers/Header";
import "./EditEmployee.css";
import { useState } from "react";
import dummyEmployees from "../../data/DummyData";

const EditEmployee = () => {
  const { id } = useParams();
  const employees = dummyEmployees;
  const employee = employees.find((data) => data.empId === id);
  if (!employee) return <>Employee Not Found</>;

  const [values, setValues] = useState({
    employeeID: employee.empId,
    employeeName: employee.name,
    password: "",
    email: "",
    age: "",
    joiningDate: employee.joinDate,
    department: "",
    status: employee.status,
    role: employee.role,
    experience: JSON.stringify(employee.experience),
    addressLine1: "",
    addressLine2: "",
    houseNo: "",
    pincode: "",
  });

  return (
    <div className="edit-employee-body">
      <Header title="Edit Employee" />

      <EmployeeForm
        type="edit"
        values={values}
        onChange={(field, value) => {
          setValues({ ...values, [field]: value });
        }}
      />
    </div>
  );
};

export default EditEmployee;
