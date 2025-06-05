import "./input.css";

interface InputProps {
  type: string;
  id: string;
  name?: string;
  placeholder: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  endAdornment?: React.ReactNode | null;
  ref?: React.RefObject<HTMLInputElement | null>; 
}


const Input = ({
  type,
  id,
  name,
  placeholder,
  className,
  onChange,
  value,
  endAdornment = null,
  ref
  
}: InputProps
  
) => {
  return (
    <div className="input-wrapper">
      <input
        className={`login-input-field input-${className}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
      <label htmlFor={id}>{placeholder}</label>
      {endAdornment && endAdornment}
    </div>
  );
};

export default Input;
