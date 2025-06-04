import type { SelectStatus } from "../../types/SelectType";
import "./SelectBox.css";

const SelectBox = (props: SelectStatus) => {
  return (
    <div className="select-box">
      <label>{props.label}</label>
      <select
        className="select"
        name={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      >
        <option className="input-field" disabled value="">
          {" "}
          Select {props.label}
        </option>
        {props.options.map((item) => {
          return (
            <option key={item.value} className="input-field" value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
