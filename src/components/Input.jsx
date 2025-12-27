import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      className="w-full outline-none text-[11px] text-[#D9D9D9]"
    />
  );
}
