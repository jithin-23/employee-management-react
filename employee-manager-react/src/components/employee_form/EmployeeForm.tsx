import { departmentOptions, roleOptions, statusOptions } from "../../types/InputOptions";
import InputBox from "../input_box/InputBox";
import SelectBox from "../select_box/SelectBox";
import "./EmployeeForm.css";

export type EmployeeFormTypes = "create" | "edit";

const EmployeeForm = ({
  type,
  empId,
  values,
  onChange,
}: {
  type: EmployeeFormTypes;
  empId?: string;
  values: {
    employeeID: string;
    employeeName: string;
    password: string;
    email: string;
    age: string;
    joiningDate: string;
    department: string;
    status: string;
    role: string;
    experience: string;
    addressLine1: string;
    addressLine2: string;
    houseNo: string;
    pincode: string;
  };
  onChange: (field: string, value: string) => void;
}) => {
  

  return (
    <form>
      <div className="formContent">
        <div className="flex-container">
          <InputBox
            id="empId"
            placeholder="Employee ID"
            type="text"
            value={values.employeeID}
            label="Employee ID"
            disabled={type === "edit" ? true : false}
            className={type === "edit" ? "disabled" : ""}
            onChange={(event) => {
              onChange("employeeID", event.target.value);
            }}
          />

          <InputBox
            id="ename"
            placeholder="Employee Name"
            value={values.employeeName}
            type="text"
            label="Employee Name"
            onChange={(event) => {
              onChange("employeeName", event.target.value);
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
            value={values.joiningDate}
            placeholder="Joining Date"
            type="date"
            label="Joining Date"
            onChange={(event) => {
              onChange("joiningDate", event.target.value);
            }}
          />

          <SelectBox
            id="department"
            label="Department"
            options={departmentOptions}
            value={values.department}
            onChange={(event) => {
              onChange("department", event.target.value);
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
              value={values.addressLine1}
              id="line1"
              placeholder="Addres line 1"
              type="text"
              onChange={(event) => {
                onChange("addressLine1", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="line2"
              value={values.addressLine2}
              placeholder="Address line 2"
              type="text"
              onChange={(event) => {
                onChange("addressLine2", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="houseNo"
              value={values.houseNo}
              placeholder="House Number"
              type="text"
              onChange={(event) => {
                onChange("houseNo", event.target.value);
              }}
            />
            <input
              className="employee-input-field"
              id="pincode"
              value={values.pincode}
              placeholder="Pincode"
              type="text"
              onChange={(event) => {
                onChange("pincode", event.target.value);
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
          <InputBox
            value="Create"
            className="submit"
            type="submit"
            placeholder="Create"
            id="submit"
          />

          <InputBox
            value="Reset"
            className="reset"
            type="reset"
            placeholder="Reset"
            id="reset"
          />
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
