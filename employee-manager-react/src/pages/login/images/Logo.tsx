import "./Logo.css";

const Image = (props: { src: string; alt: string }) => {
    return <img className="input-page-logo" src={props.src} alt={props.alt} />;
};

export default Image