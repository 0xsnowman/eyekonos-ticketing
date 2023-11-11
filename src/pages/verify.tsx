import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { EInput } from "../components/auth-input";
import { getItem } from "../utils/localstorage";
import { KEY_AUTH } from "../config/localstorage";
import { verifyCodeService } from "../services/auth.service";

export const Verify = () => {
  const history = useHistory();
  const [code, setCode] = useState("");

  const verifyHandler = async () => {
    if (code === "") {
      toast.warn("Please input code");
      return;
    } else if (code.length !== 6) {
      toast.warn("Verify code length is 6");
      return;
    }
    const result = await verifyCodeService(code);
    if (result.success) {
      toast.success(result.data.message);
      setTimeout(() => history.push("/login"), 4000);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="verify-page">
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
      <div className="verify-logo-area">
        <p>Verify Email</p>
      </div>
      <div className="verify-page-input-form">
        <EInput
          placeholder="Input verification code"
          description="Verification Code"
          value={code}
          onChange={(e: any) => setCode(e.target.value)}
        />
        <div className="action-button" onClick={verifyHandler}>
          Verify
        </div>
        <div className="verify-page-input-form__before" />
        <div className="verify-page-input-form__after" />
      </div>
    </div>
  );
};
