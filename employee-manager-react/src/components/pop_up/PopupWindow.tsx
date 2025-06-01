import { useDispatch } from "react-redux";
import "./PopupWindow.css";
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";

const PopupWindow = ({
  onClick,
  employeeId,
}: {
  onClick: (value: boolean) => void;
  employeeId: string;
}) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    onClick(false);
  };

  const handleSubmit = () => {
    dispatch({ type: EMPLOYEE_ACTION_TYPES.DELETE, payload: employeeId });
    onClick(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-content-title">Are you Sure?</div>
        <div className="popup-content-subtitle">
          Do you really want to delete employee?
        </div>
        <div className="popup-content-btn-grp">
          <button
            type="button"
            className="popup-btn popup-btn-confirm"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <button
            type="button"
            className="popup-btn popup-btn-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;
