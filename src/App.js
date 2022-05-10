import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Navbar from "./components/nav/Navbar";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import AltHome from "./pages/AltHome";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  //destructured from context
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* show the appropriate Homepage when the user is logged in */}
        <Route path="/" exact element={!isLoggedIn ? <Home /> : <AltHome />} />

        {/* only show garden page when user is logged in */}
        <Route path="/garden" element={isLoggedIn ? <Garden /> : <Form />} />

        {/* if user tries to access account page while logged in they will be redirected to the home page */}
        <Route
          path="/account"
          element={!isLoggedIn ? <Form /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default App;
