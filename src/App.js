import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Navbar from "./components/nav/Navbar";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import AltHome from "./pages/AltHome";
import { AuthContext } from "./contexts/AuthContext";
import Protected from "./components/ui/Protected";

const App = () => {
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* show the appropriate Homepage when the user is logged in */}
        <Route
          path="/"
          exact
          element={
            !isLoggedIn ? (
              <Home />
            ) : (
              <Protected>
                <AltHome />
              </Protected>
            )
          }
        />
        <Route path="/garden" element={currentUser ? <Garden /> : <Form />} />
        {!isLoggedIn && <Route path="/account" element={<Form />} />}
      </Routes>
    </div>
  );
};

export default App;
