import { useParams } from "react-router-dom";
import EmployeeForm from "../../components/employee_form/EmployeeForm";
import Header from "../../components/headers/Header";
import "./EditEmployee.css";
import { useState } from "react";
import dummyEmployees from "../../data/DummyData";
import { useDispatch, useSelector } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
} from "../../store/employee/employee.types";

const EditEmployee = () => {
  const { id } = useParams();
  // const employees = dummyEmployees;
  // const employee = employees.find((data) => data.empId === id);
  // if (!employee) return <>Employee Not Found</>;

  const employees = useSelector((state) => state.employees);
  const employee = employees.find((data: Employee) => data.employeeId === id);
  if (!employee) return <>Employee Not Found</>;

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    employeeId: employee.employeeId,
    name: employee.name,
    password: employee.password,
    email: employee.email,
    age: employee.age,
    dateOfJoining: employee.dateOfJoining,
    departmentId: employee.departmentId,
    status: employee.status,
    role: employee.role,
    experience: employee.experience,
    address: {
      houseNo: employee.address.line1,
      line1: employee.address.line2,
      line2: employee.address.houseNo,
      pincode: employee.address.pincode,
    },
  });

  return (
    <div className="edit-employee-body">
      <Header title="Edit Employee" />

      <EmployeeForm
        type="edit"
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
        onClick={() => dispatch({ type: EMPLOYEE_ACTION_TYPES.UPDATE, payload: values })}
      />
    </div>
  );
};

export default EditEmployee;
