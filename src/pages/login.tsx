import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { EInput } from "../components/auth-input";
import { validateEmail } from "../utils/email-validator";
import { getItem, setItem } from "../utils/localstorage";
import { KEY_AUTH, KEY_AUTH_REFRESH } from "../config/localstorage";
import { loginService } from "../services/auth.service";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    if (email === "") {
      toast.warn("Please input email");
      return;
    } else if (!validateEmail(email)) {
      toast.warn("Please input a valid email");
      return;
    }
    if (password === "") {
      toast.warn("Please input password");
      return;
    }
    const result = await loginService(email, password);
    if (result.success) {
      toast.success("Welcome");
      setItem(KEY_AUTH, result.data.access_token);
      setItem(KEY_AUTH_REFRESH, result.data.refresh_token);
      setTimeout(() => history.push("/"), 4000);
    } else {
      toast.error(result.message);
    }
  };

  useEffect(() => {
    const isAuth = getItem(KEY_AUTH);
    if (isAuth) {
      history.push("/");
    }
  }, []);

  return (
    <div className="login-page">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="login-logo-area">
        <p>Login</p>
      </div>
      <div className="login-page-input-form">
        <EInput
          placeholder="Email@website.com..."
          description="Email address"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <EInput
          placeholder="Password..."
          description="Password"
          value={password}
          type={"password"}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <div className="action-button" onClick={loginHandler}>
          Login
        </div>
        <div className="login-page-input-form__before" />
        <div className="login-page-input-form__after" />
      </div>
    </div>
  );
};
