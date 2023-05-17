import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Drinks from "./bar/Drinks";
import Food from "./kitchen/Food";
import Rooms from "./suite/Rooms";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex-1 bg-black">
      <NavBar />
      <Routes>
      <Route path="/" element={<Drinks /> } />
      <Route path="/kitchen" element={<Food />} />
      <Route path="/suite" element={<Rooms />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
