import React from "react";
import { Outlet } from "react-router";

export default function PageLayOut() {
  return (
    <div className="container min-h-screen m-auto px-8">
      <div className="w-full bg-red-200 flex items-center justify-between">
        <i className="w-8">icon</i>
        <p>page name</p>
        <div className="w-8"></div>
      </div>
      <Outlet />
    </div>
  );
}
