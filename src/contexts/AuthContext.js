import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  // state for login and current user
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  /**
   *  check if the isLoggedIn key exists in localstorage
   * if it exists, set the isLoggedIn state to value returned from localstorage
   * this is done when the component first mounts
   */
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status) {
      setIsLoggedIn(status);
    }
  }, []);

  //subscribing to auth changes and setting the currentUser
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user?.email);
    });

    //cleanup function to unsubscribe from auth changes
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
