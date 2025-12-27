import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className={`bg-[#129575] flex justify-center items-center ${props.className}`}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
