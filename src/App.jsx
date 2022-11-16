import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Stuff from "./components/Stuff/Stuff";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
