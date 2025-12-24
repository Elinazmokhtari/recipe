import React from "react";
import cover from "../assets/img/splash_pic.png";
import logo from "../assets/img/logo.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Splash() {
  return (
    <div className="container relative  m-auto flex justify-center">
      <div className="max-w-fit h-screen flex ">
        <img src={cover} alt="cover_pic" className=" object-cover" />
      </div>
      <div className="absolute top-25 flex flex-col items-center">
        <img src={logo} alt="logo_pic" className="w-[210px]" />
        <div className="text-white  text-center mt-[300px]">
          <p className="font-semibold text-5xl">Get</p>
          <p className="font-semibold text-5xl mb-5">Cooking</p>
          <p>Simple way to find Tasty Recipe</p>
        </div>
        <button className="px-17 py-3 bg-[#129575] rounded-[10px] text-white font-semibold mt-16 flex items-center gap-1.5">
          start Cooking{" "}
          <p>
            <ArrowRightIcon className="size-5" />
          </p>
        </button>
      </div>
    </div>
  );
}
