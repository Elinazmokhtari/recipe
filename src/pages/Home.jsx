import React from "react";
import user from "../assets/img/user.png";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Button from "../components/Button";
import Input from "../components/Input";
import FoodCard from "../components/FoodCard";

export default function Home() {
  return (
    <div className="container m-auto px-8 py-5 ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[20px] font-semibold font-black">Hello Jega</p>
          <p className="text-[11px] text-[#A9A9A9] mt-1">
            What are you cooking today ?
          </p>
        </div>
        <div className="size-10 bg-[#fece80] rounded-[10px]">
          <img src={user} alt="" className="" />
        </div>
      </div>
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
      <div className="my-9 py-2 flex justify-between items-center overflow-x-auto gap-1 *:py-2.5 *:px-5 *:bg-[#129575] *:rounded-[10px] text-white font-semibold  ">
        <div>All</div>
        <div>indian</div>
        <div>korean</div>
        <div>persian</div>
        <div>italian</div>
        <div>indian</div>
        <div>korean</div>
        <div>persian</div>
      </div>
      <div className="grid grid-cols-2 gap-3.5 ">
        <div>
          <FoodCard />
        </div>
        <div>
          <FoodCard />
        </div>
      </div>
    </div>
  );
}
