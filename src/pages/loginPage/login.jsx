import { React } from "react";
import { Form } from "../../components/ui/form";


export const Login = () => {


  return (
    <div className="min-h-screen pt-[120px] bg-bg3 bg-fixed bg-no-repeat bg-center bg-cover">
      <div className="container">
        <Form variant={"login"} />
      </div>
    </div>
  );
};

export default Login;
