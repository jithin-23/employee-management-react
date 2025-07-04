import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../components/employee_form/EmployeeForm";
import Header from "../../components/headers/Header";
import "./EditEmployee.css";
import { useEffect, useState } from "react";
import dummyEmployees from "../../temp-unused/data/DummyData";
import { useDispatch, useSelector } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  EmployeeRole,
  EmployeeStatus,
  type Employee,
} from "../../store/employee/employee.types";

import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../api-service/employees/employees.api";
import type { CreateEmployePayload } from "../../api-service/employees/types";
import dayjs from "dayjs";

const EditEmployee = () => {
  const { id } = useParams();

  const { data } = useGetEmployeeByIdQuery({ id });
  const employee: Employee = data;

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

  useEffect(() => {
    if (!employee) return;
    setValues({
      employee_id: employee.employeeId,
      name: employee.name,
      password: employee.password,
      email: employee.email,
      age: employee.age,
      dateOfJoining: employee.dateOfJoining,
      department_id: employee.department.id,
      status: employee.status,
      role: employee.role,
      experience: employee.experience,
      address: {
        line1: employee.address.line1,
        line2: employee.address.line2,
        houseNo: employee.address.houseNo,
        pincode: employee.address.pincode,
      },
    });
  }, [employee]);

  const [triggerUpdateEmployee] = useUpdateEmployeeMutation();
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (!id) return <>Employee Id not available </>;
    triggerUpdateEmployee({ payload: values, id: id })
      .unwrap()
      .then((response) => {
        console.log("Employee Updated Succesfully", response);
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error creating employee:", error);
      });
  };

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
        onClick={handleUpdate}
      />
    </div>
  );
};

export default EditEmployee;
