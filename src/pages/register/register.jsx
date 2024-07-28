import React from "react";
import { Form } from "../../components/ui/form";

export const Register = () => {
  return (
    <>
      <div className="bg-bg2 bg-fixed bg-center bg-no-repeat min-h-screen bg-cover">
        <div className="pt-[70px] container flex items-center justify-center">
          <Form variant={"register"} />
        </div>
      </div>
    </>
  );
};

export default Register;
