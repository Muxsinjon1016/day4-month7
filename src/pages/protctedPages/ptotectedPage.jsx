import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { loadState } from "../../config/storage";
import { Outlet } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { request } from "../../config/request";
import { UiFeedbacks } from "./components/uiFeedbacks";

export const ProtectedPage = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="bg-[#F7F8FD]">
      <div className="container flex">
        <div className="min-h-screen w-[225px] p-5">
          <div className="bg-bgGradient mb-6 w-[225px] rounded-[10px] p-[24px]">
            <div className="mt-[38px]">
              <h3 className="text-xl font-bold text-white">Frontend Mentor</h3>
              <p className="text-white font-medium text-lg opacity-[0.75]">
                Feedback Board
              </p>
            </div>
          </div>
          <div className="rounded-[10px] flex flex-wrap gap-2 bg-white p-6 pr-[25px] w-[225px]">
            <NavLink
              to="/ptotected-page"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              All
            </NavLink>
            <NavLink
              to="/ptotected-page/ui-feedbacks"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              UI
            </NavLink>
            <NavLink
              to="/ptotected-page/ux-feedbacks"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              UX
            </NavLink>
            <NavLink
              to="/ptotected-page/enhancement-feedbacks"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              Enhancement
            </NavLink>
            <NavLink
              to="/ptotected-page/bug-feedbacks"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              Bug
            </NavLink>
            <NavLink
              to="/ptotected-page/feature-feedbacks"
              className={({ isActive }) =>
                `py-[5px] px-[16px] rounded-[10px] text-lg font-semibold ${
                  isActive
                    ? "bg-[#4661e6] text-[#f2f4ff]"
                    : "bg-[#f2f4ff] text-[#4661e6]"
                }`
              }
            >
              Feature
            </NavLink>
          </div>
        </div>
        <div className="w-[80%] m-5">
          <div className="ml-5 mb-4">
            <div className="bg-[#373f68] container flex items-center justify-between rounded-[10px] ml-5 mb-6 py-[14px] px-[16px] pl-[20px]">
              <div className="flex items-center gap-[38px]">
                <div className="flex items-center gap-4">
                  <img src="/lightIcon.svg" alt="icon" />
                  <p className="text-xl font-bold text-white">6 Suggestions</p>
                </div>
                <p className="text-white">
                  Sort by : <b>Categories </b>
                  <select className="text-white appearance-auto font-bold bg-transparent outline-none">
                    <option className="bg-[#373f68] font-bold" value="All">
                      All
                    </option>
                    <option className="bg-[#373f68] font-bold" value="UI">
                      UI
                    </option>
                    <option className="bg-[#373f68] font-bold" value="UX">
                      UX
                    </option>
                    <option
                      className="bg-[#373f68] font-bold"
                      value="Enhancement"
                    >
                      Enhancement
                    </option>
                    <option className="bg-[#373f68] font-bold" value="Bug">
                      Bug
                    </option>
                    <option className="bg-[#373f68] font-bold" value="Feature">
                      Feature
                    </option>
                  </select>
                </p>
              </div>
              <Button variant={"add"}>+ Add Feedback</Button>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedPage;
