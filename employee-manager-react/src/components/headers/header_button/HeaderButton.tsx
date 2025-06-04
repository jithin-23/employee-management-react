import { useNavigate } from "react-router-dom";
import "./HeaderButton.css";

export type HeaderButtonTypes = "create" | "edit";

const HeaderButton = ({
  type = "create",
  empId,
}: {
  type: HeaderButtonTypes;
  empId?: string;
}) => {
  const iconSrc =
    type === "create" ? "/assets/icons/plus.png" : "/assets/icons/edit.png";
  const text = type === "create" ? "Create Employee" : "Edit Employee";

  const navigate = useNavigate();

  const handleHeaderButtonClick = () => {
    if (type === "create") navigate("/employee/create");
    else navigate(`/employee/edit/${empId}`);
  };

  return (
    <div className="header-button-grp">
      <button
        className="header-button-grp-btn"
        type="button"
        onClick={handleHeaderButtonClick}
      >
        <img className="header-button-grp-icon" src={iconSrc}></img>
      </button>
      <div className="header-button-grp-text">{text}</div>
    </div>
  );
};

export default HeaderButton;
