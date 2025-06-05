import "./uncontrolled_inputs.css";
import { useRef, useEffect } from "react";
// import kvLogo from "../../assets/kv-logo.png";
// import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "./Button";
import LoginInput from "./LoginInput";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleNativeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formdata = new FormData(form);
    const username = formdata.get("username") as string;
    console.log("Username: ", username);
    const password = formdata.get("password") as string;
    console.log("Username: ", password);
  };

  const clearUsername = () => {
    if (!usernameRef.current) return;
    usernameRef.current.value = "";
    if (clearButtonRef.current) clearButtonRef.current.disabled = true;
  };

  const updateClearButton = (value: string) => {
    if (!usernameRef.current) return;
    if (!clearButtonRef.current) return;
    console.log("Hii");
    if (value.length > 0) {
      clearButtonRef.current.disabled = false;
      clearButtonRef.current.onclick = clearUsername;
    } else {
      clearButtonRef.current.disabled = true;
    }
  };

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img
              src="/assets/kv-login.jpeg"
              alt="KV Login"
              className="login-image"
            />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src="/assets/kv-logo.png" alt="KV Logo" />
          <form onSubmit={handleNativeSubmit}>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="username"
              onChange={(event) => {
                updateClearButton(event.target.value);
              }}
              endAdornment={
                <button
                  type="button"
                  onClick={clearUsername}
                  disabled={true}
                  ref={clearButtonRef}
                >
                  Clear
                </button>
              }
            />

            <LoginInput
              id="login-password-input"
              label="Password"
              name="password"
            />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
