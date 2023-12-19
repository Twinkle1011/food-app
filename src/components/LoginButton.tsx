import { useState } from "react";

const LoginButton = (): JSX.Element => {
  const [btnName, setBtnName] = useState<string>("login");

  return (
    <button
      onClick={() => {
        btnName === "login" ? setBtnName("logout") : setBtnName("login");
      }}
      className="login"
    >
      {btnName}
    </button>
  );
};

export default LoginButton;
