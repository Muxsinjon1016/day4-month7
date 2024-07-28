import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="bg-black absolute text-center pt-10 w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div>
        <h1 className="text-white mb-10 text-5xl flex items-center gap-5">
          <span className="text-7xl">404 |</span> Page Not Found
        </h1>
        <Link
          className="text-white text-2xl py-2 px-4 border border-white rounded-xl"
          to={"/"}
        >
          Go to "Home"
        </Link>
        <img className="mt-7 shadow-inner-xl" src="/tiredDev.avif" alt="img" />
      </div>
    </div>
  );
};

export default NotFound;
