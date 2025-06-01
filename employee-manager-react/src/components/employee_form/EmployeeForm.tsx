import type {
  Address,
  Role,
  Status,
} from "../../store/employee/employee.types";
import {
  departmentOptions,
  roleOptions,
  statusOptions,
} from "../../types/InputOptions";
import InputBox from "../input_box/InputBox";
import SelectBox from "../select_box/SelectBox";
import "./EmployeeForm.css";

export type EmployeeFormTypes = "create" | "edit";

const EmployeeForm = ({
  type,
  empId,
  values,
  onChange,
  onClick,
}: {
  type: EmployeeFormTypes;
  empId?: string;
  values: {
    employeeId: string;
    email: string;
    name: string;
    age: string;
    address: Address;
    password: string;
    role: string;
    dateOfJoining: string;
    experience: string;
    status: string;
    departmentId: string;
  };
  onChange: (field: string, value: string) => void;
  onClick?: () => void;
}) => {
  return (
    <form>
      <div className="formContent">
        <div className="flex-container">
          <InputBox
            id="empId"
            placeholder="Employee ID"
            type="text"
            value={values.employeeId}
            label="Employee ID"
            disabled={type === "edit" ? true : false}
            className={type === "edit" ? "disabled" : ""}
            onChange={(event) => {
              onChange("employeeId", event.target.value);
            }}
          />

          <InputBox
            id="ename"
            placeholder="Employee Name"
            value={values.name}
            type="text"
            label="Employee Name"
            onChange={(event) => {
              onChange("name", event.target.value);
            }}
          />

          <InputBox
            id="password"
            value={values.password}
            placeholder="Password"
            type="password"
            label="Password"
            onChange={(event) => {
              onChange("password", event.target.value);
            }}
          />

          <InputBox
            id="email"
            placeholder="Email"
            type="email"
            label="Email"
            value={values.email}
            onChange={(event) => {
              onChange("email", event.target.value);
            }}
          />

          <InputBox
            id="age"
            placeholder="Age"
            type="number"
            label="Age"
            value={values.age}
            onChange={(event) => {
              onChange("age", event.target.value);
            }}
          />

          <InputBox
            id="joiningDate"
            value={values.dateOfJoining}
            placeholder="Joining Date"
            type="date"
            label="Joining Date"
            onChange={(event) => {
              onChange("dateOfJoining", event.target.value);
            }}
          />

          <SelectBox
            id="department"
            label="Department"
            options={departmentOptions}
            value={values.departmentId}
            onChange={(event) => {
              onChange("departmentId", event.target.value);
            }}
          />

          <SelectBox
            id="status"
            label="Status"
            options={statusOptions}
            value={values.status}
            onChange={(event) => {
              onChange("status", event.target.value);
            }}
          />

          <SelectBox
            id="role"
            label="Role"
            options={roleOptions}
            value={values.role}
            onChange={(event) => {
              onChange("role", event.target.value);
            }}
          />

          <div className="input-box">
            <label>Address</label>
            <input
              className="employee-input-field"
              value={values.address.line1}
              id="line1"
              placeholder="Addres line 1"
              type="text"
              onChange={(event) => {
                onChange("address.line1", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="line2"
              value={values.address.line2}
              placeholder="Address line 2"
              type="text"
              onChange={(event) => {
                onChange("address.line2", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="houseNo"
              value={values.address.houseNo}
              placeholder="House Number"
              type="text"
              onChange={(event) => {
                onChange("address.houseNo", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="pincode"
              value={values.address.pincode}
              placeholder="Pincode"
              type="text"
              onChange={(event) => {
                onChange("address.pincode", event.target.value);
              }}
            />
          </div>

          <InputBox
            id="experience"
            value={values.experience}
            placeholder="Experience"
            type="number"
            label="Experience"
            onChange={(event) => {
              onChange("experience", event.target.value);
            }}
          />
        </div>
        <div className="create-employee-buttons">
          {/* <InputBox
            value="Create"
            className="submit"
            type="button"
            placeholder="Create"
            id="submit"
          /> */}

          <button
            value= {type === "edit" ? "Save" : "Create"}
            className="form-create-btn"
            type="button"
            id="create"
            onClick={onClick}
          >
            {type === "edit" ? "Save" : "Create"}
          </button>

          {/* <InputBox
            value="Reset"
            className="reset"
            type="reset"
            placeholder="Reset"
            id="reset"
          /> */}

          <button
            value="Reset"
            className="form-reset-btn"
            type="reset"
            id="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
