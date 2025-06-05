import "./Login.css";
import { useEffect, useRef, useState } from "react";
import MousePosition from "./mousePosition.ts";
import { useNavigate } from "react-router-dom";
import { UseLocalStorage } from "../hooks/useLocalStorage.ts";
import Input from "../pages/login/inputs/Input.tsx";
import { useLoginMutation } from "../api-service/auth/login.api.ts";

const Login2 = () => {
  const [error, setError] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [labelText, setLabelText] = useState("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = UseLocalStorage(
    "showPassword",
    false
  );
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!submitButtonRef.current) return;
    submitButtonRef.current.disabled =
      password.length < 8 || username.length === 0;
  }, [username, password]);

  const position = MousePosition();

  const navigate = useNavigate();

  useEffect(() => {
    if (username.length >= 10)
      setLabelText("Username must be less than 20 characters");
    else setLabelText("");
  }, [username]);

  useEffect(() => {
    if (password.length < 8) setPasswordError(true);
    else setPasswordError(false);
  }, [password]);

  useEffect(() => {
    if (usernameRef.current) usernameRef.current.focus();
    localStorage.setItem("isloggedIn", "false");
  }, []);

  const handleSubmit = async () => {
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);

    // const response = await login({ email: username, password: password });
    // if (response.data?.accesstoken) {
    //   localStorage.setItem("token", response.data.accesstoken);
    //   navigate("/employee");
    // }

    login({ email: username, password: password })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.accesstoken);
        localStorage.setItem("isloggedIn", "true");
        navigate("/employee");
      })
      .catch((error) => {
        setError(error.data.message);
      });
  };

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
      {/* <label className="">
        x:{position.x} y:{position.y}
      </label> */}
      <div className="login-right">
        <div className="content">
          <img className="input-page-logo" src="/assets/kv-logo.png" alt="Keyvalue Logo" />
          <div className="form-content">
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              ref={usernameRef}
              endAdornment={
                <button
                  className="input-box-btn"
                  type="button"
                  onClick={() => setUsername("")}
                  disabled={username.length === 0}
                >
                  clear
                </button>
              }
            />
            {username.length >= 30 && (
              <label className="error-label">{labelText}</label>
            )}
            

            <Input
              className="input-box-field"
              type={showPassword ? "text" : "password"}
              id="password"
              name="username"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              endAdornment={
                <button
                  type="button"
                  className="input-box-btn "
                  onClick={() => setPassword("")}
                  disabled={password.length === 0}
                >
                  clear
                </button>
              }
            />
            {passwordError && (
              <label className="error-label">
                Password must be greater than 8 characters
              </label>
            )}
            <div className="checkbox-group">
              <input
                id="show_password"
                name="show_password"
                type="checkbox"
                checked={showPassword}
                onChange={(event) => {
                  setShowPassword(event.target.checked);
                }}
              />
              <label htmlFor="show_password">Show Password</label>
            </div>

            <p>{error}</p>
            <button
              title="Log In"
              className="login-btn"
              onClick={handleSubmit}
              ref={submitButtonRef}
              disabled={isLoading}
              type="submit"
            >
              Log In{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
