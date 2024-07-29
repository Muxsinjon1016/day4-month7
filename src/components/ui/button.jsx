import clsx from "clsx";
import React from "react";

export const Button = ({
  children,
  startIcon,
  endIcon,
  variant,
  className,
  type,
  onClick,
}) => {
  const variants = {
    default:
      "rounded-[17px] outline-none py-3 px-7 bg-blue-700 text-white text-2xl font-bold flex items-center justify-between hover:endIcon button  w-[245px]",
    login:
      "rounded-[12px] outline-none py-2 px-6 bg-blue-700 text-white text-lg font-medium hover:bg-blue-600 flex items-center justify-between",
    submit:
      "rounded-[12px] outline-none py-2 px-6 bg-green-600 text-white text-lg font-medium flex items-center justify-center mx-auto w-[100%]",
    add: "bg-[#ad1fea] rounded-[10px] py-[12px] px-[25px] text-white font-bold text-base",
    danger:
      "bg-red-600 text-white hover:bg-red-500 block font-medium mb-2 text-base rounded-[10px] py-2 px-4",
    warning:
      "bg-yellow-400 text-white ml-auto hover:bg-yellow-300 block font-medium text-base rounded-[10px] py-2 px-4",
    cencel:
      "bg-[#3a4374] rounded-[10px] py-[12px] px-[25px] text-white font-bold text-base",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(variants[variant], className)}
    >
      <span>{startIcon}</span>
      <span>{children}</span>
      <span className="endIcon transition-all duration-500">{endIcon}</span>
    </button>
  );
};

export default Button;
