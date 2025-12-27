import React from "react";
import serve from "../assets/img/serve.png";
export default function IngridentCard() {
  return (
    <div>
      <div className="my-6 flex justify-between items-center *:text-[#A9A9A9] *:text-[13px] ">
        <div className="flex items-center gap-2">
          <img src={serve} alt="" />
          <p>1 serve</p>
        </div>
        <p className="">10 Items</p>
      </div>
      <div className="w-full bg-[#D9D9D9] p-3  rounded-[10px] flex gap-3 items-center">
        <div className="size-[51px] bg-white rounded-[10px] flex items-center justify-center">
          img
        </div>
        <p className="font-semibold text-[16px]">Ingrident name</p>
      </div>
    </div>
  );
}
