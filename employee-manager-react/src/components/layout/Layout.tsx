import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../headers/Header";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";
import { useEffect } from "react";

const Layout = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("isloggedIn");
    return token === "true";
  };
  const navigate = useNavigate();


  if (!isLoggedIn()) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.setItem("isloggedIn", JSON.stringify(false));
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
