import { lazy, Suspense, useState } from "react";
import Header from "../../components/headers/Header";
import "./CreateEmployee.css";
import {
  EMPLOYEE_ACTION_TYPES,
  EmployeeRole,
  EmployeeStatus,
} from "../../store/employee/employee.types";
import { useDispatch } from "react-redux";
import store, { useAppDispatch } from "../../store/store";
import { addEmployee } from "../../store/employee/employeeReducer";
import { useCreateEmployeesMutation } from "../../api-service/employees/employees.api";
import type { CreateEmployePayload } from "../../api-service/employees/types";
import { useNavigate } from "react-router-dom";

const EmployeeForm = lazy(
  () => import("../../components/employee_form/EmployeeForm")
);

const CreateEmployee = () => {
  const [values, setValues] = useState<CreateEmployePayload>({
    employee_id: "",
    name: "",
    password: "",
    email: "",
    age: 0,
    dateOfJoining: "",
    department_id: 1,
    status: EmployeeStatus.INACTIVE,
    role: EmployeeRole.DEVELOPER,
    experience: 0,
    address: {   
      line1: "",
      line2: "",
      houseNo: "",
      pincode: "",
    },
  });

  // const dispatch = useDispatch();
  // const dispatch = useAppDispatch();

  const [triggerCreateEmployee] = useCreateEmployeesMutation();
  const navigate = useNavigate();

  const handleCreate = () => {
    
    if (!values.dateOfJoining)
      values.dateOfJoining = new Date().toISOString().slice(0, 10);
    console.log("Payload being sent:", JSON.stringify(values, null, 2)); 

    triggerCreateEmployee(values)
      .unwrap()
      .then((response) => {
        console.log("Employee Created Succesfully", response);
        navigate("/employee")
      })
      .catch((error) => {
        console.error("Error creating employee:", error);
      });
  };

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
          onClick={
            handleCreate
            // dispatch({ type: EMPLOYEE_ACTION_TYPES.ADD, payload: values })
            // dispatch(addEmployee(values))
          }
        />
      </Suspense>
    </div>
  );
};

export default CreateEmployee;
