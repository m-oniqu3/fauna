import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  // state for login and current user
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");
    if (status) {
      setIsLoggedIn(status);
      setCurrentUser(user);
    }
    console.log(status);
  }, []);

  //unsubscribing to auth changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    //cleanup function
    return () => unsub();
  }, []);

  //context provider with values to share with the app
  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
