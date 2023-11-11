import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { EInput } from "../components/auth-input";
import { validateEmail } from "../utils/email-validator";
import { signUpService } from "../services/auth.service";

export const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const signupHandler = async () => {
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
    if (confirm === "") {
      toast.warn("Please confirm your password");
      return;
    }
    if (confirm !== password) {
      toast.warn("Wrong confirmation");
      return;
    }
    const result = await signUpService(email, password);
    if (result.success) {
      toast.success(result.data.message);
      setTimeout(() => history.push("/verify"), 4000);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="signup-page">
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
      <div className="signup-logo-area">
        <p>Sign Up</p>
      </div>
      <div className="signup-page-input-form">
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
        <EInput
          placeholder="Confirm Password..."
          description="Confirm Password"
          value={confirm}
          type={"password"}
          onChange={(e: any) => setConfirm(e.target.value)}
        />
        <div className="action-button" onClick={signupHandler}>
          Sign Up
        </div>
        <div className="signup-page-input-form__before" />
        <div className="signup-page-input-form__after" />
      </div>
    </div>
  );
};
