import React from "react";

export default function Button({onClick, btnText, className }) {
  return (
    <button
    onClick={onClick}
      className={`btn btn-sm ${className}
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700`}
    >
      {btnText}
    </button>
  );
}
