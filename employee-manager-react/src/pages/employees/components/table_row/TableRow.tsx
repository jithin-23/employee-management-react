import "./TableRow.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import StatusCell from "../status_cell/StatusCell";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopupWindow from "../../../../components/pop_up/PopupWindow";

interface TableRowProps {
  name: string;
  id: string;
  joinDate: string;
  role: string;
  status: string;
  experience: string;
}

const TableRow = (props: TableRowProps) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleEdit = () => {
    navigate(`edit/${props.id}`);
  };

  const handleRowClick = () => {
    navigate(props.id);
  };

  return (
    <>
      {showPopup && (
        <PopupWindow
          onClick={(value) => {
            setShowPopup(value);
          }}
        />
      )}
      <tr className="list-table-row">
        <td
          className="list-table-cell"
          onClick={handleRowClick}
          style={{ cursor: "pointer" }}
        >
          {props.name}
        </td>
        <td className="list-table-cell">{props.id}</td>
        <td className="list-table-cell">{props.joinDate}</td>
        <td className="list-table-cell">{props.role}</td>
        <td className="list-table-cell">
          <StatusCell status={props.status} />
        </td>
        <td className="list-table-cell">{props.experience} years</td>
        <td className="list-table-cell">
          <button
            className="list-table-action-btn"
            type="button"
            // onClick={handleDelete}
            onClick={() => {
              setShowPopup(true);
            }}
          >
            <FaRegTrashCan className="react-icon-trash" />
          </button>

          <button
            type="button"
            className="list-table-action-btn"
            style={{ marginLeft: "20px" }}
          >
            <MdOutlineEdit className="react-icon-edit" onClick={handleEdit} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
