import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../../components/ui/button";
import Tooltip from "../../components/ui/tooltip";

export const Header = () => {
  return (
    <div className="fixed z-10 container top-0 left-0 right-0">
      <div className="flex relative items-center justify-between backdrop-blur-lg rounded-b-[45px] border-b-4 border-blue-800 py-5 px-7 ">
        <img
          className="cursor-pointer w-[45px] h-auto"
          src="/logo.png"
          alt="img"
        />
        <div>
          <nav className="flex items-center gap-[45px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white text-2xl font-semibold "
                  : "text-white border-b-2 border-transparent transition duration-300 hover:border-white font-semibold text-xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white text-2xl font-semibold "
                  : "text-white border-b-2 border-transparent transition duration-300 hover:border-white font-semibold text-xl"
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/content"}
              className={({ isActive }) =>
                isActive
                  ? "text-white headerContent relative border-b-2 border-white text-2xl font-semibold "
                  : "text-white headerContent relative border-b-2 border-transparent transition duration-300 hover:border-white font-semibold text-xl"
              }
            >
              <Tooltip variant={"header"}>Protected</Tooltip>
              content
            </NavLink>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white text-2xl font-semibold "
                  : "text-white border-b-2 border-transparent transition duration-300 hover:border-white font-semibold text-xl"
              }
            >
              register
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white text-2xl font-semibold "
                  : "text-white border-b-2 border-transparent transition duration-300 hover:border-white font-semibold text-xl"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-[23px]">
          <Link to={"/login"}>
            <Button variant={"login"}>Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button variant={"login"}>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
