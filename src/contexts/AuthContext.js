import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoggedIn((prevState) => !prevState);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
