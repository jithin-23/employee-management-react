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
        {props.options.map((item) => {
          return (
            <option className="input-field" value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
