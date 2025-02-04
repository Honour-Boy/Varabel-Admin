import { useState } from "react";
import { Form, SideDesign } from "../components/login";
import { Alert } from "../components/common";
const Login = () => {
  const [message, setMessage] = useState({
    value: "",
    show: false,
  });

  return (
    <div className="relative w-full h-full">
      <div
        className={`${
          message.show && "brightness-50 pointer-events-none"
        } w-full h-full bg-primary flex items-center justify-center`}
      >
        <Form setMsg={setMessage} msg={message} allow={false} />
        <SideDesign />
      </div>
      <Alert msg={message} setMsg={setMessage} />
    </div>
  );
};

export default Login;
