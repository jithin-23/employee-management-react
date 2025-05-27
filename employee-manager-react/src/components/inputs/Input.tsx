import "./input.css";

const Input = ({
    type,
    id,
    placeholder,
    className 
}: {
    type: string;
    id: string;
    placeholder: string;
    className?: string;
}) => {
    return (
        <input
            className={`input-field input-${className}`}
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default Input;
