import Button from "../../components/buttons/Button.tsx";
import Input from "../../components/inputs/Input.tsx";
import Header from "../../components/headers/Header.tsx";
import "./Login.css";
import Image from "./images/Logo.tsx";
import { useEffect, useRef, useState } from "react";
import Counter from "../../components/counter/counter.tsx";
import MousePosition from "../../hooks/mousePosition.ts";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [labelText, setLabelText] = useState("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);

  const position = MousePosition();

  useEffect(() => {
    if (username.length >= 10)
      setLabelText("Username must be less than 10 characters");
    else setLabelText("");
  }, [username]);

  useEffect(() => {
    if (password.length < 8) setPasswordError(true);
    else setPasswordError(false);
  }, [password]);

  useEffect(() => {
    if (usernameRef.current) usernameRef.current.focus();
  }, []);



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
      {/* <Counter/> */}
      <label className="">
        x:{position.x} y:{position.y}
      </label>
      <div className="login-right">
        <div className="content">
          <Image src="/assets/kv-logo.png" alt="Keyvalue Logo" />
          <div className="form-content">
            <div className="input-box-login">
              <input
                className="input-box-field"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                ref={usernameRef}
                required
              />
              <button
                type="button"
                className="input-box-btn "
                onClick={() => setUsername("")}
                disabled={username.length === 0}
              >
                clear
              </button>{" "}
            </div>
            {username.length >= 10 && (
              <label className="error-label">{labelText}</label>
            )}
            <div className="input-box-login">
              <input
                className="input-box-field"
                type={showPassword ? "text":"password"}
                id="password"
                name="username"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
              <button
                type="button"
                className="input-box-btn "
                onClick={() => setPassword("")}
                disabled={password.length === 0}
              >
                clear
              </button>
            </div>
            {passwordError && (
              <label className="error-label">
                Password must be greater than 8 characters
              </label>
            )}
            <div>
            <input
              id="show_password"
              name="show_password"
              type="checkbox"
              checked={showPassword}
              onChange={(event) => {
                setShowPassword(event.target.checked);

              }}
            />
            <label htmlFor="show_password">Show Password</label></div>
            <Button title="Log In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
