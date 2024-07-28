import clsx from "clsx";
import React from "react";
import { IoTriangle } from "react-icons/io5";

export const Tooltip = ({ children, className, variant }) => {
  const variants = {
    login:
      "absolute py-2 px-4 w-[145px] -bottom-[65px] -right-[45px] bg-gray-900 rounded-[12px]",
    header:
      "absolute py-2 px-4 w-[105px] text-center -bottom-[55px] headerTooltip -right-[25px] bg-gray-900 rounded-[12px]",
  };
  return (
    <div className={clsx(variants[variant], className)}>
      <div className="relative">
        <p className="text-xs text-white font-medium">{children}</p>
        <IoTriangle className="w-[40px] h-auto absolute -top-[32px] text-gray-900 right-[45px]" />
      </div>
    </div>
  );
};

export default Tooltip;
