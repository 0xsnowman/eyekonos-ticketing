import axios from "axios";
import { setItem } from "./localstorage";
import { KEY_AUTH } from "../config/localstorage";

// ====================
// save auth to axios and localstorage
// ====================
export const setAuthToken = (token: string | null) => {
  if (token === null) {
    delete axios.defaults.headers.common["Authorization"];
    setItem(KEY_AUTH, "");
  } else {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    setItem(KEY_AUTH, token);
  }
};
