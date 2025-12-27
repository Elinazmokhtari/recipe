import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function FoodCard() {
  return (
    <div className="h-[150px] bg-red-200 rounded-[10px] relative ">
      <div className="absolute top-0 w-full h-full p-2.5 flex flex-col justify-between">
        <div className=" w-full flex justify-end">
          <div className="w-[37px] h-[16px] flex gap-1 items-center justify-center  rounded-[20px] bg-[#FFE1B3]">
            <StarIcon className="text-[#fece80] size-2" />
            <p className="text-[8px]">4.0</p>
          </div>
        </div>
        <div className="">
          <span className="font-semibold text-[11px] text-white">
            food name
          </span>
          <p className="text-[8px] text-[#A9A9A9]">chef name</p>
        </div>
      </div>
    </div>
  );
}
