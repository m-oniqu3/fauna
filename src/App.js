import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import HomepageBase from "./components/home/HomepageBase";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomepageBase />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
