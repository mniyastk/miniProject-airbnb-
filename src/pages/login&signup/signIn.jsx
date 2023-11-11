import React from "react";

function SignIn() {
  return (
    <div className="w-3/4">
      <form
        action=""
        method="post"
        className="w-full flex flex-col justify-center items-center"
      >
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border rounded-md"
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="password"
          className="w-full border rounded-md"
        />
        <button className=" w-[150px] h-8 border mt-3 rounded-md bg-rose-600 font-bold text-sm text-white">
          {" "}
          Sign In{" "}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
