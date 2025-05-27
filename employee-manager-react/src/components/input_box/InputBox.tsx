import Input from "../inputs/Input";
import "./InputBox.css";

const InputBox = (props: { id: string; type: string; placeholder: string }) => {
    return (
        <div className="input-box">
            <label>{props.placeholder}</label>
            <Input
                className=""
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
            />
        </div>
    );
};

export default InputBox;
