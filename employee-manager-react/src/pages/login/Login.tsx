import Button from "../../components/buttons/Button.tsx";
import Input from "../../components/inputs/Input.tsx";
import Header from "../../components/headers/Header.tsx";
import "./Login.css";
import Image from "./images/Logo.tsx";

const Login = () => {
    return (
        <div className="body-content">
            <div className="login-left">
                <div className="login-image-container">
                    <img
                        className="login-image"
                        src="/assets/kv-login.jpeg"
                        alt="Login Page Image"
                    ></img>
                </div>
            </div>
            <div className="login-right">
                <div className="content">
                    <Image src="/assets/kv-logo.png" alt="Keyvalue Logo" />
                    <div className="form-content">
                        <Input type="text" id="username" placeholder="Email" />
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                        <Button title="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
