import { lazy, Suspense, useState } from "react";
import Header from "../../components/headers/Header";
import "./CreateEmployee.css";

const EmployeeForm = lazy(
  () => import("../../components/employee_form/EmployeeForm")
);

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

      <Suspense fallback={<div>Create Form is loading please wait...</div>}>
        <EmployeeForm
          type="create"
          values={values}
          onChange={(field, value) => {
            setValues({ ...values, [field]: value });
          }}
        />
      </Suspense>
    </div>
  );
};

export default CreateEmployee;
