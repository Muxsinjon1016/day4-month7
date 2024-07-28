import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/loginPage";
import { NotFound } from "./layout/not-found";
import { ProtectedPage } from "./pages/protctedPages/ptotectedPage";
import { AllFeedback } from "./pages/protctedPages/components/allFeedbacks";
import { UiFeedbacks } from "./pages/protctedPages/components/uiFeedbacks";
import UxFeedbacks from "./pages/protctedPages/components/uxFeedbacks";
import Enhancement from "./pages/protctedPages/components/enhancementFeedbacks";
import BugFeedbacks from "./pages/protctedPages/components/bugFeedbacks";
import Feature from "./pages/protctedPages/components/featureFeedbacks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ptotected-page" element={<ProtectedPage />}>
          <Route index element={<AllFeedback />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
