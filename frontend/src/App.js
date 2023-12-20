import React from "react";
import HomeComponent from "./Pages/Home/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EditFormComponent from "./components/Forms/EditFormComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/edit" element={<EditFormComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
