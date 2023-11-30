import React, { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [errors, setErrors] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(userData);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/api/user/register", { userData })
      .then((data) => console.log(data))
      .catch((e) => setErrors(e.response.data.message));
  };

  return (
    <div className="w-full flex justify-center items-center h-full">
      <form className="flex flex-col w-3/5 justify-center">
        {/* <label htmlFor=""> First Name</label> */}
        <input
          className=" border h-10 rounded-md "
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* <label htmlFor=""> Last Name</label> */}
        <input
          className=" border h-10 rounded-md "
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={(e) => handleChange(e)}
        />
        <br />
        {/* <label htmlFor="">Phone Number</label> */}
        <input
          className=" border h-10 rounded-md "
          type="email"
          name="email"
          id=""
          placeholder="E-mail"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          type="tel"
          name="phone"
          id=""
          placeholder="Phone number"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          type="password"
          name="password"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="Password"
        />
        <br />
        <input
          className=" border h-10 rounded-md "
          // type="password"
          name=""
          id=""
          placeholder="confirm password"
        />
        {/* <label htmlFor=""></label> */}
        {errors}
        <button
          className=" w-13 h-8 border mt-3 rounded-md bg-rose-600 font-bold text-sm text-white"
          onClick={(e) => handlesubmit(e)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
