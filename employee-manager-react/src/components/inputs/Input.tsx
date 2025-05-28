import "./input.css";

const Input = ({
  type,
  id,
  placeholder,
  className,
  onChange,
  value,
  endAdornment = null,
}: {
  type: string;
  id: string;
  placeholder: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  endAdornment?: React.ReactNode;
}) => {
  return (
    <div>
      <input
        className={`input-field input-${className}`}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />

      {endAdornment ? endAdornment : null}
    </div>
  );
};

export default Input;
