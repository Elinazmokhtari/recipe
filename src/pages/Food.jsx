import React, { useState } from "react";
import FoodVideoCard from "../components/FoodVideoCard";
import IngridentCard from "../components/IngridentCard";
import RecipePart from "../components/RecipePart";

export default function Food() {
  const [activeTab, setActiveTab] = useState("Ingrident");
  return (
    <div className="mt-5">
      <FoodVideoCard />
      <div className="*:font-semibold py-3.5">
        <p>selected food name</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center text-white *:font-semibold *:text-[11px] *:rounded-[10px] *:p-2.5 ">
        <div
          className={`${
            activeTab === "Ingrident"
              ? "bg-[#129575] text-white"
              : " text-[#129575]"
          } `}
          onClick={() => setActiveTab("Ingrident")}
        >
          Ingrident
        </div>
        <div
          className={`${
            activeTab === "Recipe"
              ? "bg-[#129575] text-white"
              : " text-[#129575]"
          }`}
          onClick={() => setActiveTab("Recipe")}
        >
          Recipe
        </div>
      </div>
      {activeTab === "Ingrident" ? <IngridentCard /> : <RecipePart />}
    </div>
  );
}
