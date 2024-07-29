import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/loginPage";
import { NotFound } from "./layout/not-found";
import { ProtectedPage } from "./pages/protctedPages/ptotectedPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ptotected-page" element={<ProtectedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
