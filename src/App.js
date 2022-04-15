import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
