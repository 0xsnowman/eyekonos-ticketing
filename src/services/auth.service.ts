import axios from "axios";
import { BACKEND_BASE_URL } from "../config/axios";

export const loginService = async (email: string, password: string) => {
  try {
    const result = await axios.post(
      BACKEND_BASE_URL + "/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
    return {
      success: true,
      data: result.data,
    };
  } catch (err) {
    return { success: false, message: "Something went wrong during login" };
  }
};

export const signUpService = async (email: string, password: string) => {
  try {
    const result = await axios.post(BACKEND_BASE_URL + "/auth/signup", {
      email,
      password,
    });
    return {
      success: true,
      data: result.data,
    };
  } catch (err) {
    return { success: false, message: "Something went wrong during sign up" };
  }
};

export const verifyCodeService = async (token: string) => {
  try {
    const result = await axios.post(BACKEND_BASE_URL + "/auth/verify-email", {
      token,
    });
    return {
      success: true,
      data: result.data,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong during verifying code",
    };
  }
};
