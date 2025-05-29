import "./InputBox.css";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputBox = ({
  id,
  type,
  placeholder,
  className,
  label,
  disabled,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={`input-box input-box-${className}`}>
      {label && <label>{label}</label>}
      <input
        className={`employee-input-field input-${className}`}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
