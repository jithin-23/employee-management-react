import "./PopupWindow.css";

const PopupWindow = ({
  onClick,
}: {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCancel = () => {
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
            onClick={handleCancel}
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
