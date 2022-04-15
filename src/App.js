import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
