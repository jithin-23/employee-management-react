import "./StatusCell.css"

const StatusCell = ({ status }: { status: string }) => {
  let background;
  let text;
  if (status === "ACTIVE") {
    background = "#D3F4BE";
    text = "Active";
  } else if (status === "PROBATION") {
    background = "#F5ECB8";
    text = "Probation";
  } else {
    background = "#FFBFBF";
    text = "Inactive";
  }

  return (
    <div className="list-table-status" style={{ background: background }}>
      {text}
    </div>
  );
};

export default StatusCell;
