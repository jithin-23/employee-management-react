import { lazy, Suspense, useState } from "react";
import Header from "../../components/headers/Header";
import "./CreateEmployee.css";
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";
import { useDispatch } from "react-redux";
import store from "../../store/store";

const EmployeeForm = lazy(
  () => import("../../components/employee_form/EmployeeForm")
);

const CreateEmployee = () => {
  const [values, setValues] = useState({
    employeeId: "",
    name: "",
    password: "",
    email: "",
    age: "",
    dateOfJoining: "",
    departmentId: "",
    status: "",
    role: "",
    experience: "",
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    },
  });

  const dispatch = useDispatch();

  return (
    <div className="create-employee-body">
      <Header title="Create Employee" />

      <Suspense fallback={<div>Create Form is loading please wait...</div>}>
        <EmployeeForm
          type="create"
          values={values}
          onChange={(field, value) => {
            if (field.startsWith("address.")) {
              const key = field.split(".")[1];
              setValues({
                ...values,
                address: {
                  ...values.address,
                  [key]: value,
                },
              });
            } else {
              setValues({ ...values, [field]: value });
            }
          }}
          onClick={() =>
            dispatch({ type: EMPLOYEE_ACTION_TYPES.ADD, payload: values })
          }
        />
      </Suspense>
    </div>
  );
};

export default CreateEmployee;
