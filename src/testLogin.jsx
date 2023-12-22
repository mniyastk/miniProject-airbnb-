import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const TestLogin = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
            const decodedResponse = jwtDecode(credentialResponse.credential)
          console.log(decodedResponse,credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

export default TestLogin;
