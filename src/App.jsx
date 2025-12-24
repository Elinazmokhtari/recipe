import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PageLayOut from "./components/layouts/PageLayOut";
import FoodList from "./pages/FoodList";
import Food from "./pages/Food";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Splash />} />
        <Route path="/" element={<Home />} />
        <Route element={<PageLayOut />}>
          <Route path="/foodlist" element={<FoodList />} />
          <Route path="/food" element={<Food />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
