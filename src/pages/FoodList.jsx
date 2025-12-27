import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import FoodCard from "../components/FoodCard";

export default function FoodList() {
  return (
    <>
      <div className="w-full flex items-center gap-5 mt-7 ">
        <div className="flex-1 border border-[#D9D9D9] flex items-center gap-1 p-2 rounded-[10px]">
          <MagnifyingGlassIcon className="text-[#D9D9D9] size-[22px]" />
          <Input type={"text"} placeholder={"Search recipe"} />
        </div>
        <Button
          className="size-10 rounded-[10px] "
          icon={<MagnifyingGlassIcon className="size-7 text-white" />}
        />
      </div>
      <p className="mt-5">Resualt for Beef</p>
      <div className="mt-5 grid grid-cols-2 gap-3.5 ">
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
      </div>
    </>
  );
}
