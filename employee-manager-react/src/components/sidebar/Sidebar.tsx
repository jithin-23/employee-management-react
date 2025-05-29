import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator("/employee")
  }
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="/assets/kv-logo.png"
        alt="KeyValue Logo>"
      />
      <nav>
        <div className="nav-item">
          <a href="#" onClick={handleClick}>
            <img className="icon" src="/assets/icon.svg" alt="Employee Icon" />
            <span>Employee List</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
