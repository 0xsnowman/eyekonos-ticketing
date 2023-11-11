import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setAuthToken } from "../utils/set-auth-token";
import { getItem } from "../utils/localstorage";
// import { getCurrentUser } from "../actions/auth";

import { KEY_AUTH } from "../config/localstorage";

import { PUBLIC_ROUTES } from "../config/routes";

import { UserInterface } from "../types/user";

interface AuthContextInterface {
  user: UserInterface | null;
  loadUserData: () => void;
  signOut: () => void;
  setUserData: (result: any) => void;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// ====================
// Serve current user
// ====================
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();
  const [user, setUser] = useState<UserInterface | null>(null);

  const setUserData = (result: any) => {
    setUser({
      email: result.user.email,
      name: result.user.name,
      _id: result.user._id,
    });
  };

  const loadUserData = () => {
    if (!isSignedIn()) {
      signOut();
    }
  };

  const signOut = () => {
    setAuthToken(null);
    setUser(null);
    history.push(PUBLIC_ROUTES.login);
  };

  useEffect(() => {
    loadUserData();
  }, [history]);

  return (
    <AuthContext.Provider value={{ user, loadUserData, signOut, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const isSignedIn = () => {
  return getItem(KEY_AUTH) !== "";
};
