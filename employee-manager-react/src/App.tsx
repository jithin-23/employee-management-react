import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CreateEmployee from "./pages/create_employee/CreateEmployee";
import Login from "./pages/login/Login";
import UncontrolledLogin from "./pages/login/uncontrolled_login.tsx/unontrolled_inputs";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not_found/NotFound";
import EmployeeDetails from "./pages/employee_details/EmployeeDetails";
import Employees from "./pages/employees/Employees";
import EditEmployee from "./pages/edit_employee/EditEmployee";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      { path: "", element: <Employees /> },
      { path: "create", element: <CreateEmployee /> },
      { path: "edit/:id", element: <EditEmployee /> },
      { path: ":id", element: <EmployeeDetails /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
