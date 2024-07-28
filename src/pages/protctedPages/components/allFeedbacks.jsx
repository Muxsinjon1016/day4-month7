import React from "react";
import { Link } from "react-router-dom";
import UiFeedbacks from "./uiFeedbacks";
import UxFeedbacks from "./uxFeedbacks";
import Enhancement from "./enhancementFeedbacks";
import BugFeedbacks from "./bugFeedbacks";
import Feature from "./featureFeedbacks";
import Button from "../../../components/ui/button";
import { FeedbacksContent } from "./feedbacksContent";
import { request } from "../../../config/request";

export const AllFeedback = () => {
  const [state, setState] = React.useState([]);

  const getFeedbacks = () => {
    request.get("/feedback").then((res) => {
      setState(res.data);
    });
  };

  React.useEffect(() => {
    getFeedbacks();
  }, []);
  return (
    <>
      {state.map((data) => (
        <FeedbacksContent key={data.id} refetch={getFeedbacks} {...data} />
      ))}
    </>
  );
};

export default AllFeedback;
