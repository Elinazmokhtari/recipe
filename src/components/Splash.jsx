import React from "react";
import cover from "../assets/img/splash_pic.png";
import logo from "../assets/img/logo.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Splash(props) {
  function handleStatus() {
    localStorage.setItem("status", 1);
    props.setSplashStatus(true);
  }

  return (
    <div className="container relative  m-auto flex justify-center">
      <div className="max-w-fit h-screen flex ">
        <img src={cover} alt="cover_pic" className=" object-cover" />
      </div>
      <div className="absolute top-25 flex flex-col items-center">
        <img src={logo} alt="logo_pic" className="w-[210px]" />
        <div className="text-white  text-center mt-60">
          <p className="font-semibold text-5xl">Get</p>
          <p className="font-semibold text-5xl mb-5">Cooking</p>
          <p>Simple way to find Tasty Recipe</p>
        </div>
        <button
          className="px-15 py-3 bg-[#129575] rounded-[10px] text-white font-semibold  flex items-center gap-1.5 mt-20"
          onClick={handleStatus}
        >
          start Cooking
          <p>
            <ArrowRightIcon className="size-5" />
          </p>
        </button>
      </div>
    </div>
  );
}
