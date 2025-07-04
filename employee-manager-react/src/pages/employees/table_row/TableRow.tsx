import "./TableRow.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusCell from "../../../components/status_cell/StatusCell";
import PopupWindow from "../../../components/pop_up/PopupWindow";

interface TableRowProps {
  id:string
  name: string;
  employee_id: string;
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
    navigate((props.id).toString());
  };

  return (
      <tr className="list-table-row">
        <td
          className="list-table-cell"
          onClick={handleRowClick}
          style={{ cursor: "pointer" }}
        >
          {props.name}
        </td>
        <td className="list-table-cell">{props.employee_id}</td>
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

          {showPopup && (
            <PopupWindow
            id= {props.id}
              onClick={(value) => {
                setShowPopup(value);
              }}
            />
          )}
        </td>
      </tr>
  );
};

export default TableRow;
