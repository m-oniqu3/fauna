import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Protected = ({ children }) => {
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  if (!isLoggedIn && !currentUser) {
    return <Navigate to="/account" />;
  } else return children;
};

export default Protected;
