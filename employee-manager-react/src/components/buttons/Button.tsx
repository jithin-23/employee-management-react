import "./Button.css";

interface ButtonProps{
    title:string;
    type : "button";

}

const Button = (props: { title: string  }) => {
    return <button className="submit-button" >{props.title}</button>;
};

export default Button;
