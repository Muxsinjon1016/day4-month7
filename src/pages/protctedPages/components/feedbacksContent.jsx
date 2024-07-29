import React from "react";
import { request } from "../../../config/request";
import { FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Button from "../../../components/ui/button";

export const FeedbacksContent = ({
  id,
  title,
  description,
  category,
  refetch,
}) => {
  const [idOpen, setIdOpen] = React.useState(true);

  const feedbackId = () => {
    setIdOpen(!idOpen);
  };

  const deleteFeedback = () => {
    request
      .delete(`/feedback/${id}`)
      .then((res) => {
        refetch();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          toast.info("You have deleted feedback", {
            position: "top-center",
          });
        }, 1000);
      });
  };

  return (
    <>
      <div className="bg-white mb-5 h-[151px] ml-4 py-[28px] px-[32px] w-[100%] rounded-[10px]">
        <>
          <div className="flex items-center justify-between">
            <div key={id} className="flex gap-[40px] items-start">
              <div
                onClick={() => feedbackId()}
                className={`bg-[#f2f4fe] cursor-pointer transition overflow-hidden duration-500 w-[40px] rounded-[10px] p-2 ${
                  idOpen ? " h-[53px]" : " h-[30px]"
                }`}
              >
                <FaChevronUp className="w-[15px] mt-1 h-auto mx-auto bg-transparent text-[#4661e6]" />
                <p className="text-[#3a4374] font-bold text-sm text-center">
                  {id}
                </p>
              </div>
              <div>
                <h3 className="text-lg text-[#3a4374] font-bold mb-1">
                  {title}
                </h3>
                <p className="text-base mb-3 text-[#647196] max-w-[500px]">
                  {description}
                </p>
                <span className="text-[#4661e6] font-semibold py-[6px] px-4 rounded-[10px] bg-[#f2f4ff] w-[100%]">
                  {category}
                </span>
              </div>
            </div>
            <div>
              <Button onClick={() => deleteFeedback()} variant={"danger"}>
                Delete
              </Button>
              {/* <Button variant={"warning"}>Edit</Button> */}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default FeedbacksContent;
