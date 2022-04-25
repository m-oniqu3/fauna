import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Navbar from "./components/nav/Navbar";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import AltHome from "./pages/AltHome";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* show the appropriate Homepage when the user is logged in */}
        <Route path="/" exact element={!isLoggedIn ? <Home /> : <AltHome />} />
        <Route path="/garden" element={<Garden />} />
        {!isLoggedIn && <Route path="/account" element={<Form />} />}
      </Routes>
    </div>
  );
};

export default App;
