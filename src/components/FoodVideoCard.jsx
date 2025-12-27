import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function FoodVideoCard() {
  return (
    <div>
      <div className="w-full bg-amber-300 h-[268px] rounded-[10px] relative overflow-hidden">
        <div className="absolute w-full h-full p-4 bottom-0 flex flex-col justify-end">
          <div className="w-full bg-amber-300 flex justify-between  ">
            <div className="flex gap-2 items-center *:text-white ">
              <ClockIcon className="size-6" />
              <p>20min</p>
            </div>
            <div className="size-9 bg-white rounded-[10px] flex items-center justify-center">
              <BookmarkIcon className="size-6 text-[#71B1A1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
