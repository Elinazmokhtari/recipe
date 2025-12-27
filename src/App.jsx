import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PageLayOut from "./components/layouts/PageLayOut";
import FoodList from "./pages/FoodList";
import Food from "./pages/Food";
import Splash from "./components/Splash";

function App() {
  const status = localStorage.getItem("status");
  const [splashStatus, setSplashStatus] = useState(status ? true : false);
  console.log(splashStatus);

  if (splashStatus === true) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayOut />}>
          <Route path="/foodlist" element={<FoodList />} />
          <Route path="/food" element={<Food />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <div>
        <Splash setSplashStatus={setSplashStatus} />
      </div>
    );
  }
}
export default App;
