import React from "react";

function Button({ varient , label , icon , className}) {
  const primary =
    "px-5 py-3 border rounded-full text-sm  uppercase font-bold";
  const secondary =
    "bg-black uppercase  hover:bg-gray-700 text-white font-bold py-3 px-5 rounded-full";

  return (
  
    <button
      className={`${
        varient === "primary" ? primary : secondary
      } ${className}`}
    >
        {label}
        {icon && <span className="ml-2 text-white inline-block text-xl">{icon}</span>}
    </button>
  );
}

export default Button;
