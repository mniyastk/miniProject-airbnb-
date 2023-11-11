import React from "react";

export const SignUp = () => {
    
  return (
    <div className="w-full flex justify-center items-center h-full">
      <form action="" className="flex flex-col w-3/5 justify-center">
        {/* <label htmlFor=""> First Name</label> */}
        <input
          className=" border h-10 rounded-md "
          type="text"
          placeholder="First Name"
        />
        <br />
        {/* <label htmlFor=""> Last Name</label> */}
        <input
          className=" border h-10 rounded-md "
          type="text"
          placeholder="Last Name"
        />
        <br />
        {/* <label htmlFor="">Phone Number</label> */}
        <input
          className=" border h-10 rounded-md "
          type="email"
          name=""
          id=""
          placeholder="E-mail"
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          type="tel"
          name=""
          id=""
          placeholder="Phone number"
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          type="password"
          name=""
          id=""
          placeholder="confirm password"
        />
        {/* <label htmlFor=""></label> */}
        <button className=" w-13 h-8 border mt-3 rounded-md bg-rose-600 font-bold text-sm text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};
