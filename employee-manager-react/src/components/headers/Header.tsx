import "./Header.css";

const Header = (props: { title: string }) => {
    return <div className="heading">{props.title}</div>;
};

export default Header;
