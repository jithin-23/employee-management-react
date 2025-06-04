import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {

  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem("isloggedIn");
    return token === "true";
  };
  if (!isLoggedIn()) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.setItem("isloggedIn", JSON.stringify(false));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div className="logout-box">
        <button className="logout-btn" type="button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <Sidebar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
