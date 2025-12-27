import React from "react";
import { Outlet, useLocation } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PageLayOut() {
  const location = useLocation();
  return (
    <div className="container min-h-screen m-auto px-8 ">
      <div className="w-full py-5 flex items-center justify-between mb-5">
        <ArrowLeftIcon className="size-5" />
        <p className="text-[18px] font-semibold">
          {location.pathname === "/foodlist" ? "Search recipes" : "Food Name"}
        </p>
        <div className="w-8"></div>
      </div>
      <Outlet />
    </div>
  );
}
