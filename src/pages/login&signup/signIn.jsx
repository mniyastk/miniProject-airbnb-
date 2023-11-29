import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  // const dispatch =useDispatch
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/user/login", { email, password })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-3/4">
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={(e) => handleClick(e)}
      >
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="password"
          className="w-full border rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input className=" w-[150px] h-8 border mt-3 rounded-md bg-rose-600 font-bold text-sm text-white" type ="submit" >
          {" "}
          Sign In{" "}
        </input> */}
        <input type="submit" value="dgdf" />
      </form>
    </div>
  );
}

export default SignIn;
