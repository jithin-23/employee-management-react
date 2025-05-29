import "./Button.css";

const Button = (props: { title: string  }) => {
    return <button className="submit-button" >{props.title}</button>;
};

export default Button;
