import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { Button } from "./button";
import { request } from "../../config/request";

export const ModalForm = ({ onClose, refetch }) => {
  const { handleSubmit, register, reset, setValue } = useForm();

  const modalFormSubmited = (data) => {
    request
      .post("/feedback", data)
      .then((res) => {
        res.data.name;
        reset();
        refetch();
      })
      .finally(() => onClose());
  };

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#F7F8FD]">
        <div className="flex items-center justify-center h-auto">
          <div className="w-[540px] mt-[92px]">
            <button
              className="flex items-center mb-[40px] gap-4 text-sm text-[#647196] font-bold"
              onClick={onClose}
            >
              <FaChevronLeft className="text-[#4661e6]" />
              Go Back
            </button>
            <div className="bg-white relative rounded-[10px] px-[42px] pb-[40px] pt-[52px]">
              <div className="absolute -top-[30px]">
                <img src="/plusIcon.svg" alt="icon" />
              </div>
              <h2 className="text-[#3a4374] font-bold text-lg mb-[40px]">
                Create New Feedback
              </h2>
              <form onSubmit={handleSubmit(modalFormSubmited)}>
                <div className="mb-6">
                  <p className="text-3a4374 font-bold mb-[2px]">
                    Feedback Title
                  </p>
                  <label className="text-647196" htmlFor="title">
                    Add a short, descriptive headline
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    name="title"
                    className="w-full bg-f7f8fd mt-4 px-4 rounded-[5px] h-[48px]"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-3a4374 font-bold mb-[2px]">Category</p>
                  <label className="text-647196" htmlFor="category">
                    Choose a category for your feedback
                  </label>
                  <input
                    {...register("category")}
                    type="text"
                    name="category"
                    className="w-full bg-f7f8fd mt-4 px-4 rounded-[5px] h-[48px]"
                  />
                </div>
                <div className="mb-[32px]">
                  <p className="text-3a4374 font-bold mb-[2px]">
                    Feedback Detail
                  </p>
                  <label className="text-647196" htmlFor="description">
                    Include any specific comments on what should be improved,
                    added, etc.
                  </label>
                  <textarea
                    {...register("description")}
                    className="h-[96px] resize-none py-2 outline-none overflow-auto w-full bg-f7f8fd mt-4 px-4 rounded-[5px]"
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <Button type={"reset"} variant={"cencel"}>
                    Cancel
                  </Button>
                  <Button type={"submit"} variant={"add"}>
                    Add Feedback
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
