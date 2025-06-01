import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialState: EmployeeState = { employees: [] };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.ADD: {
      const newEmployee = action.payload;
      console.log(newEmployee);
      return { ...state, employees: [...state.employees, newEmployee] };
    }

    case EMPLOYEE_ACTION_TYPES.UPDATE: {
      const updateEmployee = action.payload;

      console.log(updateEmployee);
      return {
        ...state,
        employees: state.employees.map((employee) => {
          return (employee.employeeId === updateEmployee.employeeId
            ? updateEmployee
            : employee);
        }),
      };
    }
    case EMPLOYEE_ACTION_TYPES.DELETE: {
      console.log("Employee Deleted");
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.employeeId !== action.payload
        ),
      };
    }

    default: {
      console.log("Default");
      return state;
    }
  }
}

export default employeeReducer;
