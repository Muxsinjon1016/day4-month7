import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";

export const Form = ({ variant }) => {
  const [visible, setVisible] = React.useState(false);
  const { handleSubmit, register, reset, setValue } = useForm();
  const navigate = useNavigate();

  const registrated = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          toast.success("You have successfully registered", {
            position: "top-center",
          });
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => toast.error("something went wrong,please check again"));
  };

  const logined = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          toast.success("You have successfully logined", {
            position: "top-center",
          });
          navigate("/ptotected-page", { replace: true });
        }
      })
      .catch((error) => toast.error("something went wrong,please check again"));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center mt-[70px] p-[45px] mx-auto max-w-[630px] backdrop-blur-lg rounded-[25px]">
        {variant === "register" ? (
          <form onSubmit={handleSubmit(registrated)}>
            <input
              {...register("firstName")}
              className="text-white w-[100%] font-medium mb-4 mr-4 border-2 border-gray-300 rounded-[12px] py-2 px-4"
              name="firstName"
              placeholder="Enter your first name"
              type="text"
            />
            <input
              {...register("lastName")}
              className="text-white w-[100%] font-medium mb-4 border-2 border-gray-300 rounded-[12px] py-2 px-4"
              name="lastName"
              placeholder="Enter your last name"
              type="text"
            />
            <div className="flex items-center gap-4">
              <input
                {...register("email")}
                className="text-white font-medium border-2 border-gray-300 rounded-[12px] py-2 px-4"
                name="email"
                required
                placeholder="Enter your email"
                type="email"
              />
              <div className="border-2 flex items-center border-gray-300 rounded-[12px] py-2 px-4">
                <input
                  {...register("password")}
                  className="text-white font-medium"
                  name="password"
                  required
                  placeholder="Enter your password"
                  type={visible ? "text" : "password"}
                />
                <Button type={"button"} onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <FaEyeSlash className="w-[20px] h-auto text-white" />
                  ) : (
                    <FaEye className="w-[20px] h-auto text-white" />
                  )}
                </Button>
              </div>
            </div>
            <input
              {...register("region")}
              className="text-white mt-4 w-[100%] font-medium mb-4 mr-4 border-2 border-gray-300 rounded-[12px] py-2 px-4"
              defaultValue={"Uzbekistan, Tashkent"}
              name="region"
              type="text"
            />
            <Button type={"submit"} variant={"submit"}>
              Send
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(logined)}>
            <input
              {...register("firstName")}
              className="text-white w-[100%] font-medium mb-4 mr-4 border-2 border-gray-300 rounded-[12px] py-2 px-4"
              name="firstName"
              placeholder="Enter your first name"
              type="text"
            />
            <div className="flex mb-4 items-center gap-4">
              <input
                {...register("email")}
                className="text-white font-medium border-2 border-gray-300 rounded-[12px] py-2 px-4"
                name="email"
                required
                placeholder="Enter your email"
                type="email"
              />
              <div className="border-2 flex items-center border-gray-300 rounded-[12px] py-2 px-4">
                <input
                  {...register("password")}
                  className="text-white font-medium"
                  name="password"
                  required
                  placeholder="Enter your password"
                  type={visible ? "text" : "password"}
                />
                <Button type={"button"} onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <FaEyeSlash className="w-[20px] h-auto text-white" />
                  ) : (
                    <FaEye className="w-[20px] h-auto text-white" />
                  )}
                </Button>
              </div>
            </div>
            <Button type={"submit"} variant={"submit"}>
              Send
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
