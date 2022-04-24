import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Navbar from "./components/nav/Navbar";
import Garden from "./pages/Garden";
import Home from "./pages/Home";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      {/* {isLoggedIn && currentUser && <p> {currentUser.email} </p>} */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/garden" element={<Garden />} />
        {!isLoggedIn && <Route path="/account" element={<Form />} />}
      </Routes>
    </div>
  );
};

export default App;
