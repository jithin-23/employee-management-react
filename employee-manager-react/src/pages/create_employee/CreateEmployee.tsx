import { useState } from "react";
import EmployeeForm from "../../components/employee_form/EmployeeForm";
import Header from "../../components/headers/Header";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  const [values, setValues] = useState({
    employeeID: "",
    employeeName: "",
    password: "",
    email: "",
    age: "",
    joiningDate: "",
    department: "",
    status: "",
    role: "",
    experience: "",
    addressLine1: "",
    addressLine2: "",
    houseNo: "",
    pincode: "",
  });

  return (
    <div className="create-employee-body">
      <Header title="Create Employee" />

      <EmployeeForm
        type="create"
        values={values}
        onChange={(field, value) => {
          setValues({ ...values, [field]: value });
        }}
      />
    </div>
  );
};

export default CreateEmployee;
